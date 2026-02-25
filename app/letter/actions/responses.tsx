'use server'
import { prisma } from "@/lib/prisma";

export async function allResponses() {
    const resp = prisma.response.findMany()
    return resp
}

import { revalidatePath } from 'next/cache';

export async function deleteResponse(ID: number) {
    const resp = prisma.response.delete({ where: { id: ID } })


    revalidatePath('/responses');
    return resp

}