import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import MediaPage from "./_components/MediaPage"



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 1, name: 'Media', href: '/admin/media'},
]


export default function page() {

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <MediaPage />

    </>
  )
}
