"use server";
import { baseURL } from "@/_api/baseURL";


export async function clientAllAction() {
    const res = await fetch(`${baseURL}client-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}