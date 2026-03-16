import { _checkAuthAction, _checkUserIsAdminAction } from './(auth)/_data/actions/AuthActions';
import BreadCrumbDefault from './_components/bread-crumbs/BreadCrumbDefault'
import AdminPage from './AdminPage'



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
]


export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />

        <AdminPage />
    </>
  )
}
