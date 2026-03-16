"use client"

import { create } from "zustand";
import { PartnerEntity, PartnerInterface } from "../_data/entity/PartnerEntity"
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "../../_data/entities/ResponseEntity";
import { _partnerListAction, _partnerPaginateAction, _partnerSearchAction, _partnerViewAction } from "../_data/actions/PartnerActions";


interface PropInterface{
    dataList: PartnerInterface[]
    meta: MetaInterface
    links: MetaLinksInterface
    data: PartnerInterface,
    preData: PartnerInterface,
    errors: PartnerInterface,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    search: string,
    isSearching: boolean,
    setIsLoading: (i: boolean) => void
    setDataList: (i: ResponseInterface) => void
    setImage: (e: File) => void
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    setError: (name: string, value: string) => void,
    setData: (data: PartnerInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: PartnerInterface },
    getData: (i: number | string) => Promise<void>,
    getDataList: () => Promise<void>,
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
}
  

export const usePartnerStore = create<PropInterface>((set, get) => ({ 
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
    data: PartnerEntity,
    preData: PartnerEntity,
    errors: PartnerEntity,
    message: "",
    search: "",
    isSearching: false,
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    setIsLoading: (i) => {
        set({
            isLoading: i
        })
    },
    setDataList: (i) => {
        const {data, links, meta} = i
        set({
            dataList: data,
            meta: meta,
            links: links,
            isLoading: false,
        })
    },
    setImage: (i) => {
        const current = get().data
        set({
            data: {...current, imageUpload: i}
        })
    },
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
            data: i ? i : PartnerEntity,
            preData: i ? i : PartnerEntity,
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
            data: PartnerEntity,
            preData: PartnerEntity,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    clearErrors: () => {
        set({
            errors: PartnerEntity,
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
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...PartnerEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }      
        
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    getData: async (i) => {
        try {
            const res = await _partnerViewAction(i);
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: PartnerEntity,
                    preData: PartnerEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: PartnerEntity,
                preData: PartnerEntity,
                isLoading: false,
            });
        }
    },
    getDataList: async() => {
        set({ isLoading: true });
        try {
            const res = await _partnerListAction();
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                // Fallback if structure is different
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isLoading: false,
            });
        }
    },
    getSearchDatalist: async (search) => {
        set({ isSearching: true });
        try {
            const res = await _partnerSearchAction(search);
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isSearching: false,
                });
            } else {
                // Fallback if structure is different
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isSearching: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isSearching: false,
            });
        }
    },
    getPaginatedDatalist: async (url: string) => {
        set({ isLoading: true });
        try {
            const res = await _partnerPaginateAction(url);
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                // Fallback if structure is different
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isLoading: false,
            });
        }
    },


}))