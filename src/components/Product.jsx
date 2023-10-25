import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import ProductItem from "./ProductItem"

const Product = () => {
 const {products}=useContext(ProductContext)
 const adultCat = products.filter(item => {
  return item.category === 'Adult'
 })
 const childCat = products.filter((item) => {
    return item.category === 'Children'
 })
 
  return (
    <main className="container mx-auto overflow-hidden py-8">
      <h2 className="my-1 text-gray-500">Adult</h2>
      <section className="flex flex-wrap">
        {adultCat.map((product) => {
          return <ProductItem key={product.id} product={product} />
        })}
      </section>

      <h2 className="my-1 text-gray-500">Children</h2>
      <section className="flex flex-wrap">
        {childCat.map((product) => {
          return <ProductItem key={product.id} product={product} />
        })}
      </section>
    </main>
  )
}
export default Product
