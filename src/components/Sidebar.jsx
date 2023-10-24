import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { HiArrowLongRight } from 'react-icons/hi2'
import { BsTrash } from 'react-icons/bs'
import CartItem from './CartItem'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart,totalAmount, clearCart } = useContext(CartContext)

  const sidebarClassName = isOpen
    ? 'right-0'
    : '-right-full md:translate-x-full'

  return (
    <div
      className={`h-full w-full bg-white fixed top-[4.5rem] md:w-[35vw] xl:max-w-[30vw] transition-transform duration-300 px-4 lg:px-[35px] z-10 opacity-90 ${sidebarClassName}`}
    >
      <div className="border-b flex justify-end">
        <div
          className="cursor-pointer h-10 flex items-center text-gray-500 hover:text-green-400"
          onClick={handleClose}
        >
          <HiArrowLongRight />
        </div>
      </div>
      {/* Add your cart item content here */}
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />
      })}
      {/* bottom Cart */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold">
          Total:<span>&#8358;</span>
          {totalAmount}
        </p>
        <div className='h-10 w-10 border flex items-center justify-center bg-red-900 cursor-pointer'>
          <BsTrash onClick={clearCart} className="text-white " />
        </div>
      </div>
      <button className='border py-4 px-16 mt-5 ml-10 bg-green-500 text-white'>CHECKOUT</button>
    </div>
  )
}

export default Sidebar
