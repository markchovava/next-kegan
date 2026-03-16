import { _checkAuthAction, _checkUserIsAdminAction } from "../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import ClientAddModal from "./_components/ClientAddModal"
import ClientPage from "./_components/ClientPage"
import { _clientListAction } from "./_data/actions/ClientActions";



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 2, name: 'Clients', href: '/admin/client'},
]
 

export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ clientData ] = await Promise.all([ _clientListAction() ]);

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/* PAGE */}
        <ClientPage dbData={clientData} />

        {/* MODAL */}
        <ClientAddModal />

    </>
  )
}
