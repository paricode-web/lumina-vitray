import ProductDetail from "@/components/home/ProductDetail";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string) {
  const decodedSlug = decodeURIComponent(slug);

  return prisma.product.findUnique({
    where: {
      slug: decodedSlug,
    },
    include: {
      images: true,
    },
  });
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "محصول پیدا نشد",
      description: "محصول موردنظر پیدا نشد.",
    };
  }

  return {
    title: product.name,
    description: `مشاهده و خرید ${product.name} از فروشگاه Lumina Vitray.`,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = await getProduct(slug);

  console.log("RECEIVED SLUG:", slug);
  console.log("DECODED SLUG:", decodeURIComponent(slug));
  console.log("SLUG:", slug);
  console.log("PRODUCT:", product);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}