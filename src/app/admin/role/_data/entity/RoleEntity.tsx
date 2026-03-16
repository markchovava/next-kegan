import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface RoleInterface{
    id: string | number
    name: string
    level: number | string
    createdAt: string
    updatedAt: string
    user: UserInterface
}


export const RoleEntity: RoleInterface = {
    id: "",
    name: "",
    level: "",
    createdAt: "",
    updatedAt: "",
    user: UserEntity
};