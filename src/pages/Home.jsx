import Hero from "../components/Hero"
import Header from "../components/Header"
import Product from "../components/Product"
import Sidebar from "../components/Sidebar"
const Home = () => {
  return (
    <div className=" bg-slate-200">
      <Sidebar />
      <Header />
      <Hero />
      <Product />
    </div>
  )
}
export default Home