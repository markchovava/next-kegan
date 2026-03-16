"use server";
import { baseURL } from "@/_api/baseURL";


export async function partnerAllAction() {
    const res = await fetch(`${baseURL}partner-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}