import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-3/4">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="mb-4">
              <h2 className="text-2xl  font-bold bg-green-600">Your Cart</h2>
              <h3 className="text-xl font-semibold bg-green-600">Summary</h3>
              <p className="text-gray-700 text-lg mt-2">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="text-lg">
              <p className="text-gray-700 mb-4">Total Amount: ${totalAmount}</p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700  
                border-2 border-green-600 hover:text-white transition duration-300 ease-in">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-40 flex flex-col gap-6 justify-center items-center">
          <h1 className="text-xl font-bold">Cart Empty !</h1>
          <Link to="/">
            <button className="bg-green-600 text-white text-md uppercase font-bold py-2 px-10 rounded-md border-2 border-green-600 hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
