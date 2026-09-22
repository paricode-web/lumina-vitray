import { prisma } from "@/lib/prisma";

export async function searchProducts(tags: string[]) {
  const normalizedTags = tags
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean);

  if (normalizedTags.length === 0) {
    return [];
  }

  const products = await prisma.product.findMany({
    where: {
      AND: normalizedTags.map((tagName) => ({
        tags: {
          some: {
            tag: {
              name: tagName,
            },
          },
        },
      })),
    },

    include: {
      images: true,

      tags: {
        include: {
          tag: true,
        },
      },
    },
  });

  return products;
}