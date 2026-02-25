'use server';
import { prisma } from '@/lib/prisma'; // Using the singleton we set up earlier

export async function createRegistration(data: {
  name: string;
  rollNo: string;
}) {
  // Now you can use Prisma to save it!
  const user = await prisma.response.create({
    data: {
      name: data.name,
      rollNo: data.rollNo,
    },
  });

  return user;
}