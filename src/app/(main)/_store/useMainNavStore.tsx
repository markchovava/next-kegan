"use client"

import { create } from "zustand";
import { NavEntity, NavInterface } from "../_data/entity/NavEntity"
import { PrimaryNavData } from "../_data/sample/MainNavData";


interface PropInterface{
    navList: NavInterface[]
    current: NavInterface
    isMenu: boolean
    setIsMenu: (i: boolean) => void 
    setIsOpen: (a: boolean, b: NavInterface) => void
    setNavList: (i: NavInterface[]) => void
    setCurrent: (i: NavInterface) => void
}


export const useMainNavStore = create<PropInterface>((set, get) => ({ 
    navList: PrimaryNavData,
    current: NavEntity,
    isMenu: false,
    setIsMenu: (i) => {
        set({
            isMenu: i
        })
    },
    setCurrent: (i) => {
        set({
            current: i
        })
    },
    setIsOpen: (a, b) => {
        const list = get().navList
        set({
            navList: list.map((i) => (
                i.id == b.id ? {...i, isOpen: a} : {...i, isOpen: false}
            ))
        })
    },
    setNavList: (i) => {
        set({
            navList: i
        })
    },
   
}))