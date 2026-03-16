import { _checkAuthAction, _checkUserIsAdminAction } from "../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import PartnerAddModal from "./_components/PartnerAddModal"
import PartnerPage from "./_components/PartnerPage"
import { _partnerListAction } from "./_data/actions/PartnerActions";



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 2, name: 'Partners', href: '/admin/partner'},
]


export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ partnerData ] = await Promise.all([ _partnerListAction() ]);

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/* PAGE */}
        <PartnerPage dbData={partnerData} />

        {/* MODAL */}
        <PartnerAddModal />

    </>
  )
}
