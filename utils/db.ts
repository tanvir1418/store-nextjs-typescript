// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

// const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ["query", "error", "warn"],
//   });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
