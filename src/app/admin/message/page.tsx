import { _checkAuthAction, _checkUserIsAdminAction } from "../(auth)/_data/actions/AuthActions";
import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import MessageAddModal from "./_components/MessageAddModal"
import MessagePage from "./_components/MessagePage"
import { _messageListAction } from "./_data/actions/MessageActions";



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Messages', href: '/admin/message'},
]

 
export default async function page() {
    await _checkAuthAction();
    await _checkUserIsAdminAction(1);
    const [ messageData ] = await Promise.all([ _messageListAction() ]);

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/* PAGE */}
        <MessagePage dbData={messageData} />

        {/* MODAL */}
        <MessageAddModal />

    </>
  )
}
