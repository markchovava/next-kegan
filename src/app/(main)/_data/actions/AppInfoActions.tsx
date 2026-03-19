"use server"

import { cache } from 'react'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { baseURL } from "@/_api/baseURL";
import { AuthServerCookieName } from "@/_cookie/CookieServer";


export async function appInfoViewAction() {
    const res = await fetch(`${baseURL}app-info`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}


// Wrap it and export the cached version
export const getAppInfo = cache(appInfoViewAction)