import { _checkAuthAction, _checkUserIsAdminAction } from "../../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import MetaAddModal from "./_components/MetaAddModal"
import MetaPage from "./_components/MetaPage"
import { _pageMetaListAction } from "./_data/actions/PageMetaActions";



const CrumbsData = [
      {id: 1, name: 'Admin', href: '/admin'},
      {id: 2, name: 'Pages', href: '/admin/page-admin'},
      {id: 3, name: 'Metas', href: '/admin/page-admin/meta'},
]
 

export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ pageMetaData ] = await Promise.all([ _pageMetaListAction() ]);
  

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <MetaPage dbData={pageMetaData} />

        <MetaAddModal />

    </>
  )
}
