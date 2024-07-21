import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center border-b py-4 w-[750px] mx-auto justify-between mt-1">
      <div className="h-[120px] w-[120px] ">
        <img className="w-full h-full object-fit" src={item.image} alt={item.title} />
      </div>
      <div className="flex flex-col ml-4 flex-grow">
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p className="text-gray-600 mt-2 text-[15px] text-left ">{item.description.split(" ").slice(0,20).join(" ") + "..."}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div
            className="cursor-pointer text-red-600"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
