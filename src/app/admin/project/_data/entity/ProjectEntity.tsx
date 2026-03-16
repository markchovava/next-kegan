export interface ProjectInterface{
    id: string | number
    name: string
    level: number | string
    createdAt: string
    updatedAt: string
}


export const ProjectEntity: ProjectInterface = {
    id: "",
    name: "",
    level: "",
    createdAt: "",
    updatedAt: ""
};