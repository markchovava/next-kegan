import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import RoleAddModal from "./_components/ProjectAddModal"
import RolePage from "./_components/ProjectPage"



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 2, name: 'Settings', href: '/admin/settings'},
    {id: 3, name: 'Roles', href: '/admin/role'},
]


export default function page() {

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <RolePage />

        <RoleAddModal />

    </>
  )
}
