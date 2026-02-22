import { prisma } from "@/lib/prisma";

export async function allResponses() {
    const resp = prisma.response.findMany()
    return resp
}