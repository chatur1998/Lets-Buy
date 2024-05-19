import React from "react";

type ProductProps = {
  product: any;
  addToCart: (product: any) => void;
};

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button
        className="add-to-cart p-2 bg-green-500 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
