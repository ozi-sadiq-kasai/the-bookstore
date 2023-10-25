import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const ProductItem = ({product}) => {
 const {image,title,price,id} = product
 const {addToCart} =useContext(CartContext)
  return (
    <div className="border border-gray-300 w-[300px] container mx-auto mb-2 flex flex-col items-center justify-center py-3">
      <div className="">
        <img src={image} alt={title} className=" " />
      </div>

      <h3>{title}</h3>
      <p>
        <span>&#8358;</span>
        {price}
      </p>
      <button
        className="border-2 border-gray-400 py-2 px-7 text-green-500"
        onClick={() => addToCart(product, id)}
      >
        Add to Cart
      </button>
    </div>
  )
}
export default ProductItem