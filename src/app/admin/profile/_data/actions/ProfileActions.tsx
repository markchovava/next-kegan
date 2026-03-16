"use server";

import { baseURL } from "@/_api/baseURL";
import { AuthServerCookieName } from "@/_cookie/CookieServer";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/*********************************
*  AUTHENICATED
*********************************/
export async function _profileViewAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/profile`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _profileStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/profile`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/profile');
    return await res.json();
}

export async function _emailUpdateAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/email`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/profile');
    return await res.json();
}

export async function _passwordUpdateAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/password`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/profile');
    return await res.json();
}