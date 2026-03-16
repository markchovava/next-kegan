import { _checkAuthAction, _checkUserIsAdminAction } from "../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import RoleAddModal from "./_components/RoleAddModal"
import RolePage from "./_components/RolePage"
import { _roleListAction } from "./_data/actions/RoleActions";



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 2, name: 'Settings', href: '/admin/settings'},
    {id: 3, name: 'Roles', href: '/admin/role'},
]


export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1); 
    const [ roleData ] = await Promise.all([ _roleListAction() ]);


  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <RolePage dbData={roleData} />

        <RoleAddModal />

    </>
  )
}
