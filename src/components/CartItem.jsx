

const CartItem = ({item}) => {
const{title,image,price,amount} = item
  return (
    <div className="m-4 border-b">
      <div className="flex justify-between items-center mb-2 gap-4 ">
        <div className="w-2/5 flex-2">
          <img src={image} alt={title} />
        </div>
        <div className="flex-2">
          <p className="font-semibold text-sm">{title}</p>
          <p>
            <span>&#8358;</span>
            {price}
          </p>
        </div>
        <div className="flex-1">{amount}</div>
      </div>
    </div>
  )
}
export default CartItem