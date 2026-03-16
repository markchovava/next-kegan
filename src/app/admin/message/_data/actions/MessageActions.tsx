"use server";

import { baseURL } from "@/_api/baseURL";
import { AuthServerCookieName } from "@/_cookie/CookieServer";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export async function messageListAction() {
    const res = await fetch(`${baseURL}message`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function messageAllAction() {
    const res = await fetch(`${baseURL}message-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function messageViewAction(id: number | string) {
    const res = await fetch(`${baseURL}message/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function messageSearchAction(search: string) {
    const res = await fetch(`${baseURL}message-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

/*********************************
*  AUTHENICATED
*********************************/
export async function _messageListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _messagePaginateAction(url: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _messageAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _messageSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _messageViewAction(id: number | string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _messageStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/message')
    return await res.json();
}

export async function _messageUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message/${id}`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath(`/admin/message/${id}`)
    return await res.json();
}

export async function _messageDeleteAction(id: number | string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/message/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/message`)
    return await res.json();
}
