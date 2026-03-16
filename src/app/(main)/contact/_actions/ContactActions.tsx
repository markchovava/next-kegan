"use server"

import { revalidatePath } from "next/cache";
import { baseURL } from "@/_api/baseURL";



export async function contactStoreAction(data: any) {
    const res = await fetch(`${baseURL}message`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/contact');
    return await res.json();
}