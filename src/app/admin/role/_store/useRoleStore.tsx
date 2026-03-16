"use client"

import { create } from "zustand";
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "../../_data/entities/ResponseEntity";
import { RoleEntity, RoleInterface } from "../_data/entity/RoleEntity";
import { _roleListAction, _rolePaginateAction, _roleSearchAction, _roleViewAction } from "../_data/actions/RoleActions";



interface PropsInterface{
    data: RoleInterface,
    dataList: RoleInterface[],
    meta: MetaInterface,
    links: MetaLinksInterface,
    preData: RoleInterface,
    errors: RoleInterface,
    search: string,
    isSearching: boolean,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    setDataListAll: (i: RoleInterface[]) => void,
    setIsLoading: (i: boolean) => void,
    setDataList: (i: ResponseInterface) => void
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setError: (name: string, value: string) => void,
    setValue: (name: string, value: string | number) => void,
    setData: (i: RoleInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (i: string) => void,
    clearErrors: () => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: RoleInterface },
    getData: (i: number | string) => Promise<void>,
    getDataList: () => Promise<void>,
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
}
 

export const useRoleStore = create<PropsInterface>((set, get) => ({ 
    data: RoleEntity,
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
    preData: RoleEntity,
    errors: RoleEntity,
    search: '',
    isSearching: false,
    message: '',
    isLoading:true,
    isSubmitting: false,
    toggleModal: false,
    setDataListAll: (i) => {
        set({
            dataList: i,
            isLoading: false,
        })
    },
    setValue: (name, value) => {
        const currentData = get().data;
        const currentErrors = get().errors;
        set({ 
            data: {...currentData, [name]: value},
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        })
    },
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
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    setData: (i) => {
        set({
            data: i,
            preData: i,
            isLoading: false,
        })
    },
    resetData: () => {
        set({
            data: RoleEntity,
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    clearErrors: () => {
        set({
            errors: RoleEntity
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Full Name is required.";
                } 
                break;

            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...RoleEntity };
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
            const res = await _roleViewAction(i);
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: RoleEntity,
                    preData: RoleEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: RoleEntity,
                preData: RoleEntity,
                isLoading: false,
            });
        }
    },
    getDataList: async() => {
        set({ isLoading: true });
        try {
            const res = await _roleListAction();
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
            const res = await _roleSearchAction(search);
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
            const res = await _rolePaginateAction(url);
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