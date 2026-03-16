import BreadCrumbDefault from "@/app/admin/_components/bread-crumbs/BreadCrumbDefault";
import MetaViewPage from "./_components/MetaViewPage";
import MetaEditModal from "./_components/MetaEditPage";
import { _checkAuthAction, _checkUserIsAdminAction } from "@/app/admin/(auth)/_data/actions/AuthActions";
import { _pageMetaViewAction } from "../_data/actions/PageMetaActions";



interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
      const { id } = await params;
      await _checkAuthAction();
      await _checkUserIsAdminAction(1);
      const [ pageMetaData ] = await Promise.all([  _pageMetaViewAction(id) ])
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 2, name: 'Pages', href: '/admin/page-admin'},
        {id: 3, name: 'Metas', href: '/admin/page-admin/meta'},
        {id: 4, name: 'View Meta', href: `/admin/page-admin/meta/${id}`},
    ];

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <MetaViewPage id={id} dbData={pageMetaData} />

        <MetaEditModal id={id} />

    </>
  )
}
