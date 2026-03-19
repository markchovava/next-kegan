"use client"

import { create } from "zustand"
import { AppInfoEntity, AppInfoInterface } from "../_data/entity/AppInfoEntity"


interface PropInterface{
    data: AppInfoInterface
    setData: (i: AppInfoInterface) => void
}

export const useAppInfoStore = create<PropInterface>((set, get) => ({ 
    data: AppInfoEntity,
    setData: (i) => {
        set({
            data: i
        })
    }
}))