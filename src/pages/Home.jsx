import Hero from "../components/Hero"
import Header from "../components/Header"
import Product from "../components/Product"
import Sidebar from "../components/Sidebar"
const Home = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Hero />
      <Product />
    </div>
  )
}
export default Home