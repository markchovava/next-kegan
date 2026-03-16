import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import ProjectEditModal from "./_components/ProjectEditPage";

import ProjectViewPage from "./_components/ProjectViewPage"



interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
  const { id } = await params;
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 2, name: 'Settings', href: '/admin/settings'},
        {id: 3, name: 'Projects', href: '/admin/role'},
        {id: 4, name: 'View Project', href: `/admin/role/${id}`},
    ]
  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <ProjectViewPage />

        <ProjectEditModal />

    </>
  )
}
