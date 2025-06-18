import { redirect } from "next/navigation";
import db from "./db";
import { Prisma } from "@/lib/generated/prisma";

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

// export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
//   const products = await db.product.findMany({
//     where: {
//       OR: [
//         { name: { contains: search, mode: "insensitive" } },
//         { company: { contains: search, mode: "insensitive" } },
//       ],
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   return products;
// };

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  const whereClause: Prisma.ProductWhereInput = search
    ? {
        OR: [
          { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
          { company: { contains: search, mode: Prisma.QueryMode.insensitive } },
        ],
      }
    : {};

  const products = await db.product.findMany({
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};
