import { useContext } from "react"
import {SidebarContext} from "../contexts/SidebarContext"
import { HiArrowLongRight } from 'react-icons/hi2'

const Sidebar = () => {
 const{handleClose} = useContext(SidebarContext)
 return (
   <div className="h-full w-full bg-white fixed top-0 right-0 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] opacity-90">
     <div className="border-b flex items-center justify-between">
       <p className="uppercase text-sm font-semibold py-2">Shopping Bag(0)</p>
       <div className="cursor-pointer" onClick={handleClose}>
         <HiArrowLongRight />
       </div>
     </div>
   </div>
   // <div onClick={handleClose}>sidebar</div>
 )
}
export default Sidebar

