import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const ProductItem = ({product}) => {
 const {image,title,price,id} = product
 const {addToCart} =useContext(CartContext)
  return (
    <div className='border-0 flex-1 '>
      <img src={image} alt="" className='w-3/5 mx-auto'/>
      <h3>{title}</h3>
      <p>Price:{price}</p>
      <button className='border-1 border-black' onClick={()=>addToCart(product,id)}>Add to Cart</button>
    </div>
  )
}
export default ProductItem