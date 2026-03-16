import { _checkAuthAction, _checkUserIsAdminAction } from "../../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import { _clientViewAction } from "../_data/actions/ClientActions";
import ClientEditModal from "./_components/ClientEditPage";

import ClientViewPage from "./_components/ClientViewPage"



interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}
 

export default async function page({ params }: PropInterface) {
      const { id } = await params;
      await _checkAuthAction();
      await _checkUserIsAdminAction(1);
      const [ clientData ] = await Promise.all([  _clientViewAction(id) ])
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 3, name: 'Clients', href: '/admin/client'},
        {id: 4, name: 'View Client', href: `/admin/client/${id}`},
    ]
  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/* PAGE */}
        <ClientViewPage dbData={clientData} />

        {/* MODAL */}
        <ClientEditModal id={id} />

    </>
  )
}
