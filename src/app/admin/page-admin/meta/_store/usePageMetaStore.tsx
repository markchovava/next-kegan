"use client"
import { create } from "zustand";
import { PageMetaEntity, PageMetaInterface } from "../_data/entity/PageMetaEntity";
import { MetaEntity, 
    MetaInterface, 
    MetaLinksEntity, 
    MetaLinksInterface, 
    ResponseInterface } from "@/app/admin/_data/entities/ResponseEntity";
import { _pageMetaListAction, 
    _pageMetaPaginateAction, 
    _pageMetaSearchAction, 
    _pageMetaViewAction } from "../_data/actions/PageMetaActions";



interface PropsInterface{
    data: PageMetaInterface
    dataList: PageMetaInterface[]
    meta: MetaInterface
    links: MetaLinksInterface
    preData: PageMetaInterface
    errors: PageMetaInterface
    search: string
    isSearching: boolean
    message: string
    isLoading: boolean
    isSubmitting: boolean
    toggleModal: boolean
    keyword: string
    resetKeyword: () => void
    setKeywordList: (i: any) => void
    setKeyword: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void,
    addKeyword: (i: string) => void  
    removeKeyword: (i: string) => void 
    setIsLoading: (i: boolean) => void
    setDataList: (i: ResponseInterface) => void
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setError: (name: string, value: string) => void,
    setData: (i: PageMetaInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (i: string) => void,
    clearErrors: () => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: PageMetaInterface },
    getData: (i: number | string) => Promise<void>,
    getDataList: () => Promise<void>,
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
}


export const usePageMetaStore = create<PropsInterface>((set, get) => ({ 
    data: PageMetaEntity,
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
    preData: PageMetaEntity,
    errors: PageMetaEntity,
    search: '',
    isSearching: false,
    message: '',
    isLoading:true,
    isSubmitting: false,
    toggleModal: false,
    keyword: "",
    resetKeyword: () => {
        set({
            keyword: ""
        })
    },
    setKeywordList: (i) => {
        const current = get().data
        const a = JSON.parse(i)
        set({
            data: {...current, keywords: a},
        })
    },
    setKeyword: (e) => {
        const {value} = e.target
        set({
            keyword: value
        })
    },
    addKeyword: (i) => {
        const current = get().data
        const keywords = current.keywords
        if(i.length > 0) {
            set({
                data: {...current, keywords: [...keywords, i.trim()]},
                keyword: "",
            })
        }
    },
    removeKeyword: (i) => {
        const current = get().data
        const keywords = current.keywords.filter((a) => a !== i )
        set({
            data: {...current, keywords: keywords}
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
            data: PageMetaEntity,
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
            errors: PageMetaEntity
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "title":
                if(!value.trim()){
                    error = "Title is required.";
                } 
                break;
            case "description":
                if(!value.trim()){
                    error = "Description is required.";
                } 
                break;
            case "slug":
                if (!value.trim()) {
                    error = "slug is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...PageMetaEntity };
        let hasError = false;
        // Validate TITLE
        const titleError = get().validateField("title", data.title);
        if (titleError) {
            errors.title = titleError;
            hasError = true;
        }
        // Validate DESCRIPTION
        const descriptionError = get().validateField("description", data.description);
        if (descriptionError) {
            errors.description = descriptionError;
            hasError = true;
        }
        // Validate SLUG
        const slugError = get().validateField("slug", data.slug);
        if (slugError) {
            errors.slug = slugError;
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
            const res = await _pageMetaViewAction(i);
            if (res && res.data ) {
                const a = JSON.parse(res.data.keywords)
                set({
                    data: {...res.data, keywords: a},
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: PageMetaEntity,
                    preData: PageMetaEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: PageMetaEntity,
                preData: PageMetaEntity,
                isLoading: false,
            });
        }
    },
    getDataList: async() => {
        set({ isLoading: true });
        try {
            const res = await _pageMetaListAction();
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
            const res = await _pageMetaSearchAction(search);
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
            const res = await _pageMetaPaginateAction(url);
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