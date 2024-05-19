import React from "react";
import { Product } from "../utils/types";

type CartModalProps = {
  closeModal: () => void;
  cart: Product[];
  removeFromCart: (productId: number) => void;
};

const CartModal: React.FC<CartModalProps> = ({
  cart,
  removeFromCart,
  closeModal,
}) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-xl mx-auto mt-24 relative">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="overflow-auto max-h-96 pr-5">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item: Product) => (
              <div
                key={item.id}
                className="mb-4 flex justify-between items-start"
              >
                <div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <p>
                    <b>${item.price}</b>
                  </p>
                </div>
                <button
                  className="ml-4 p-2 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="flex mt-6 border-t pt-4 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Cart Total:</span>
            <span>$ {calculateTotal()}</span>
          </div>
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={closeModal}
          >
            Checkout
          </button>
        </div>
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-gray-700"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
