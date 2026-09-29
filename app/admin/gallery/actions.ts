"use server";

import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function addGalleryImage(formData: FormData) {

  try {

    const file = formData.get("image") as File;

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;



    // Check file exists

    if (!file || file.size === 0) {
      throw new Error("لطفا یک تصویر انتخاب کنید");
    }



    // Check title

    if (!title || title.trim().length === 0) {
      throw new Error("عنوان تصویر الزامی است");
    }



    // Check file type

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp"
    ];


    if (!allowedTypes.includes(file.type)) {
      throw new Error(
        "فرمت تصویر باید JPG، PNG یا WEBP باشد"
      );
    }



    // Check file size (5MB)

    if (file.size > 5 * 1024 * 1024) {
      throw new Error(
        "حجم تصویر باید کمتر از 5MB باشد"
      );
    }



    // Convert file to buffer

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);



    // Upload to Cloudinary

    const uploadResult = await new Promise<any>(
      (resolve, reject) => {

        cloudinary.uploader.upload_stream(
          {
            folder: "lumina/gallery"
          },

          (error, result) => {

            if (error) {
              reject(error);
              return;
            }


            resolve(result);

          }

        ).end(buffer);

      }
    );



    // Save database

    await prisma.gallery.create({

      data: {

        title: title.trim(),

        description:
          description?.trim() || null,

        imageUrl: uploadResult.secure_url

      }

    });



    // Refresh pages

    revalidatePath("/");
    revalidatePath("/admin/gallery");



  } catch(error) {


    console.error(
      "Gallery upload error:",
      error
    );


    throw new Error(
      error instanceof Error
        ? error.message
        : "خطایی هنگام آپلود تصویر رخ داد"
    );

  }

}