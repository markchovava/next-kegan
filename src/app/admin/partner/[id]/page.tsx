import { _checkAuthAction, _checkUserIsAdminAction } from "../../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import { _partnerViewAction } from "../_data/actions/PartnerActions";
import PartnerEditModal from "./_components/PartnerEditPage";

import PartnerViewPage from "./_components/PartnerViewPage"



interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
    const { id } = await params;
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ partnerData ] = await Promise.all([  _partnerViewAction(id) ])
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 3, name: 'Partners', href: '/admin/partner'},
        {id: 4, name: 'View Partner', href: `/admin/partner/${id}`},
    ]

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/* PAGE */}
        <PartnerViewPage dbData={partnerData} />

        {/* MODAL */}
        <PartnerEditModal id={id} />

    </>
  )
}
