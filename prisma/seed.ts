import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { mockProducts } from "../src/data/mockData"; // 👈 ۱. دیتای محصولات را اینجا ایمپورت کن (مسیر را چک کن)

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 شروع فرآیند بذرپاشی دیتابیس (Seeding)...");

  // ۱. هش کردن پسورد ادمین برای امنیت
  const hashedPassword = await bcrypt.hash("12345678", 10);

  // ۲. ساخت یا به‌روزرسانی کاربر ادمین
  const adminUser = await prisma.user.upsert({
    where: { email: "kosar@gmail.com" },
    update: {},
    create: {
      email: "kosar@gmail.com",
      name: "Kosar",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
  console.log("✅ کاربر ادمین با موفقیت ساخته شد:", adminUser.email);

  // 👈 ۳. اضافه کردن بخش محصولات: خواندن اطلاعات از mockData و ریختن در دیتابیس
  console.log("📦 در حال وارد کردن محصولات به دیتابیس...");
  
  for (const product of mockProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug }, // بر اساس اسلاگ چک میکند که تکراری وارد نشود
      update: {}, // اگر از قبل محصول با این اسلاگ بود، تغییرش نده
      create: {
        name: product.name,
        slug: product.slug,
        features: product.features,
        price: product.price,
        countInStock: product.countInStock,
        category: product.category || "عمومی",
        images:{
          create:product.images.map((imgUrl:string)=>({
            url:imgUrl,
          })),
        },
      },
    });
  };
  
  console.log("✅ تمام محصولات با موفقیت وارد دیتابیس شدند!");
    console.log("🏷️ در حال ساخت تگ‌ها...");

  const tagNames = [
    "warm",
    "cool",
    "geometric",
    "floral",
    "minimalist",
    "living-room",
    "kitchen",
  ];

  const tags = [];

  for (const name of tagNames) {
    const tag = await prisma.tag.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    tags.push(tag);
  }

  console.log("✅ تگ‌ها ساخته شدند!");

  // چند محصول موجود را برای تست به تگ‌ها وصل می‌کنیم
  const products = await prisma.product.findMany({
    take: 3,
    orderBy: {
      createdAt: "asc",
    },
  });

  if (products.length >= 3) {
    const tagConnections = [
      { product: products[0], tag: tags[0] }, // warm
      { product: products[0], tag: tags[4] }, // minimalist

      { product: products[1], tag: tags[1] }, // cool
      { product: products[1], tag: tags[2] }, // geometric

      { product: products[2], tag: tags[5] }, // living-room
      { product: products[2], tag: tags[3] }, // floral
    ];

    for (const connection of tagConnections) {
      await prisma.productTag.upsert({
        where: {
          productId_tagId: {
            productId: connection.product.id,
            tagId: connection.tag.id,
          },
        },
        update: {},
        create: {
          productId: connection.product.id,
          tagId: connection.tag.id,
        },
      });
    }

    console.log("✅ تگ‌ها به محصولات متصل شدند!");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });