export interface SliderInterface{
    id: string | number,
    title: string | React.ReactNode
    description: string
    image: string
    href: string
    btnTitle: string
    css?: string
}


export const SliderEntity: SliderInterface = {
    id: "",
    title: "",
    description: "",
    image: "",
    href: "",
    btnTitle: "",
    css: "",
}