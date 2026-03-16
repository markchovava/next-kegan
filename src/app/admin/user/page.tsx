import { _checkAuthAction, _checkUserIsAdminAction } from "../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import UserAddModal from "./_components/UserAddModal"
import UserPage from "./_components/UserPage"
import { _userListAction } from "./_data/actions/UserActions";



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Users', href: '/admin/user'},
]


export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ userData ] = await Promise.all([ _userListAction() ]);

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <UserPage dbData={userData} />

        <UserAddModal />

    </>
  )
}
