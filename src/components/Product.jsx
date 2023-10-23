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
    <main className="border-4 w-full ">
      <h2>Adult</h2>
      <section className="container mx-auto flex gap-6 max-sm:flex-col">
        {adultCat.map((product) => {
          return <ProductItem key={product.id} product={product} />
        })}
      </section>
      <h2>Children</h2>
      <section className="container mx-auto flex gap-6 max-sm:flex-col">
        {childCat.map((product) => {
          return <ProductItem key={product.id} product={product} />
        })}
      </section>
      <div></div>
    </main>
  )
}
export default Product
