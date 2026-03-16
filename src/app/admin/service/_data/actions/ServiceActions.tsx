"use server";
import { baseURL } from "@/_api/baseURL";
import { AuthServerCookieName } from "@/_cookie/CookieServer";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function serviceAllAction() {
    const res = await fetch(`${baseURL}service-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function serviceListAction() {
    const res = await fetch(`${baseURL}service`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function servicePaginateAction(url: string) {
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function serviceSearchAction(search: string) {
    const res = await fetch(`${baseURL}service-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function serviceViewAction(id: string | number) {
    const res = await fetch(`${baseURL}service/${id}`, {
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

export async function _serviceAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _serviceListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _servicePaginateAction(url: string) {
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

export async function _serviceSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _serviceViewAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _serviceDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/service')
    return await res.json();
}

export async function _serviceStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/service')
    return await res.json();
}

export async function _serviceUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get(AuthServerCookieName);
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/service/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/service/${id}`)
    return await res.json();
}