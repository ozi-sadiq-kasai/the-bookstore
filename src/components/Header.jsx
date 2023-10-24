import { BsCart4 } from 'react-icons/bs'
import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'

const Header = () => {
 const {isOpen,setIsOpen} = useContext(SidebarContext)
 const {quantity} = useContext(CartContext)
  return (
    <header className="bg-slate-600 w-full fixed z-50 py-2">
      <div className="md:px-8 text-white font-semibold flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl">The BookStore</h1>
        <div className="text-2xl lg:text-3xl relative py-4">
         <div className='absolute top-0 right-2'>
           <p className="text-sm">{quantity}</p>
          </div>
          <BsCart4
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}
export default Header
