import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import {HiMiniPlusSmall} from 'react-icons/hi2'
import { HiMiniMinusSmall } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

const CartItem = ({item}) => {
 const { removeCart, addQuantity, removeQuantity } = useContext(CartContext)
 const{title,image,price,amount,id} = item
  return (
    <div className="m-4 border-b relative px-2 ">
      <div className="flex justify-between items-center mb-2 gap-2 ">
        <div className="w-2/5 flex-2">
          <img src={image} alt={title} />
        </div>
        <div className="flex-2">
          <p className="font-semibold text-sm">{title}</p>
          <div className="flex items-center border w-14 justify-around cursor-pointer mb-1">
            <HiMiniPlusSmall
              onClick={() => {
                addQuantity(id)
              }}
            />
            <p>{amount}</p>
            <HiMiniMinusSmall
              onClick={() => {
                removeQuantity(id)
              }}
            />
          </div>
          <span>&#8358;</span>
          {price}
        </div>
        <div className="flex-1 ">
          <div className="absolute top-4 right-4 cursor-pointer ">
            <IoMdClose
              onClick={() => removeCart(id)}
              className="text-gray-500 hover:text-red-500  transition"
            />
          </div>
          <span>&#8358;</span>
          {price * amount}
        </div>
      </div>
    </div>
  )
}
export default CartItem