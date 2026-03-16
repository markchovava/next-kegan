import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface ClientInterface{
    id: string | number
    name: string
    image: string
    imageUpload: File | null
    priority: string | number
    createdAt: string
    updatedAt: string
    user: UserInterface
}


export const ClientEntity: ClientInterface = {
    id: "",
    name: "",
    image: "",
    imageUpload: null,
    priority: "",
    createdAt: "",
    updatedAt: "",
    user: UserEntity
};