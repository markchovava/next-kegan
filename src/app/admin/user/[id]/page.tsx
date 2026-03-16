import { _checkAuthAction, _checkUserIsAdminAction } from "../../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import { _userViewAction } from "../_data/actions/UserActions";
import UserEditModal from "./_components/UserEditModal";
import UserViewPage from "./_components/UserViewPage";




interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
    const { id } = await params;
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ userData ] = await Promise.all([  _userViewAction(id) ])
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 3, name: 'Users', href: '/admin/user'},
        {id: 4, name: 'View User', href: `/admin/user/${id}`},
    ]
  return ( 
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/*  */}
        <UserViewPage id={id} dbData={userData} />

        <UserEditModal id={id} />

    </>
  )
}
