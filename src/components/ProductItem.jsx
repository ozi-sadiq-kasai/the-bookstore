import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const ProductItem = ({product}) => {
 const {image,title,price,id} = product
 const {addToCart} =useContext(CartContext)
  return (
    <div className="container border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
      <img
        src={image}
        alt=""
        className="max-h-[160px] group-hover:scale-x-110 transition duration-300 cursor-pointer"
      />
      <h3>{title}</h3>
      <p>Price:{price}</p>
      <button
        className="border-1 border-black"
        onClick={() => addToCart(product, id)}
      >
        Add to Cart
      </button>
    </div>
  )
}
export default ProductItem