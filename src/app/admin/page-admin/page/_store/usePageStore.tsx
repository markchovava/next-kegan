"use client"

import { create } from "zustand";
import { PageEntity, PageInterface } from "../_data/entity/PageEntity";




interface PropInterface{
    data: PageInterface,
    preData: PageInterface,
    errors: PageInterface,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    search: string,
    isSearching: boolean,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    setError: (name: string, value: string) => void,
    setData: (data: PageInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: PageInterface },
    // getData: () => Promise<void>
}


export const usePageStore = create<PropInterface>((set, get) => ({ 
    data: PageEntity,
    preData: PageEntity,
    errors: PageEntity,
    message: "",
    search: "",
    isSearching: false,
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    setSearch: (e) => {
        const { value } = e.target;
        set({
            search: value
        })
    },
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setData: (i) => {
        set({
            data: i ? i : PageEntity,
            preData: i ? i : PageEntity,
            isLoading: false,
        })
    },
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    resetData: () => {
        set({
            data: PageEntity,
            preData: PageEntity,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    clearErrors: () => {
        set({
            errors: PageEntity,
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Name is required.";
                } 
                break;
            case "level":
                if(!value.trim()){
                    error = "Level is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...PageEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate PHONE
        const levelError = get().validateField("phone", data.level.toString());
        if (levelError) {
            errors.level = levelError;
            hasError = true;
        }
        
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },


}))