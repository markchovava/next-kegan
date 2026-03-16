import { _checkAuthAction, _checkUserIsAdminAction } from "../../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import { _roleViewAction } from "../_data/actions/RoleActions";
import RoleEditModal from "./_components/RoleEditPage";

import RoleViewPage from "./_components/RoleViewPage"



interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
    const { id } = await params;
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ roleData ] = await Promise.all([  _roleViewAction(id) ])
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 2, name: 'Settings', href: '/admin/settings'},
        {id: 3, name: 'Roles', href: '/admin/role'},
        {id: 4, name: 'View Role', href: `/admin/role/${id}`},
    ]

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <RoleViewPage id={id} dbData={roleData} />

        <RoleEditModal id={id} />

    </>
  )
}
