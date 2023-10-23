import { BsCart4 } from 'react-icons/bs'
const Header = () => {
  return (
    <header className="w-full  bg-red-500 h-[60px] flex justify-center items-center">
      <div className="container mx-auto w-full bg-red-500 text-white font-semibold flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl">The BookStore</h1>
        <div className="text-2xl lg:text-3xl">
          <BsCart4 />
        </div>
      </div>
    </header>
  )
}
export default Header
