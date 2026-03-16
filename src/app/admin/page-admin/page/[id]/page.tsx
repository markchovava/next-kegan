import BreadCrumbDefault from "@/app/admin/_components/bread-crumbs/BreadCrumbDefault";
import PageViewPage from "./_components/PageViewPage";
import PageEditModal from "./_components/PageEditPage";




interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
  const { id } = await params;
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 2, name: 'Settings', href: '/admin/settings'},
        {id: 3, name: 'Pages', href: '/admin/role'},
        {id: 4, name: 'View Page', href: `/admin/role/${id}`},
    ]
  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <PageViewPage />

        <PageEditModal />

    </>
  )
}
