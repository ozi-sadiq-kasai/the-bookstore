import { createContext, useState, useEffect } from "react";
import { books } from "../../data.js";

// create context
export const ProductContext = createContext() 

const ProductProvider = ({children}) => {
  // product state
  const [products, setProducts] = useState([])

  // Fetch products when the component mounts
  useEffect(() => {
    setProducts(books) 
  }, [])
 
  //Fetch products when the component changes
  useEffect(()=>{
   setProducts(books)
  },[products])
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider