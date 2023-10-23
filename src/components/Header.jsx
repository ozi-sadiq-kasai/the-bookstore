import { BsCart4 } from 'react-icons/bs'
import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'

const Header = () => {
 const {isOpen,setIsOpen} = useContext(SidebarContext)
  return (
    <header className=" bg-slate-500 container py-2 fixed z-50">
      <div className="w-full md:px-8 text-white font-semibold flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl">The BookStore</h1>
        <div className="text-2xl lg:text-3xl">
          <BsCart4 onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer' />
        </div>
      </div>
    </header>
  )
}
export default Header
