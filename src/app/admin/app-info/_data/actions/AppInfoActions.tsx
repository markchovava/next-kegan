"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { baseURL } from "@/_api/baseURL";
import { AuthServerCookieName } from "@/_cookie/CookieServer";



export async function _appInfoViewAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ redirect('/auth/login'); }
    const res = await fetch(`${baseURL}api/app-info`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _appInfoStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ redirect('/auth/login'); }
    const res = await fetch(`${baseURL}api/app-info`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/app-info');
    return await res.json();
}