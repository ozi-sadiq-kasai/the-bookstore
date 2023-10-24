import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const ProductItem = ({product}) => {
 const {image,title,price,id} = product
 const {addToCart} =useContext(CartContext)
  return (
    <div className="flex flex-col items-center justify-center max-sm:mb-10 flex-wrap">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>
        <span>&#8358;</span>
        {price}
      </p>
      <button
        className="border-2 border-gray-500 py-2 px-7 text-gray-500"
        onClick={() => addToCart(product, id)}
      >
        Add to Cart
      </button>
    </div>
  )
}
export default ProductItem