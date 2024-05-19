import React, { useCallback, useRef } from "react";
import { Product } from "../utils/types";
import { useProducts } from "../utils/hooks";

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
  hasMore: boolean;
  loadMoreProducts: () => void;
  loading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart, hasMore, loadMoreProducts, loading }) => {
  const observer = useRef<IntersectionObserver>();

  const lastProductElementRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore, loading]);

  return (
    <>
      {!products.length ? (
        <div className="flex justify-center">
          <h2 className="text-xl font-bold">
            Sorry, we don't have any such items.
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              ref={index === products.length - 1 ? lastProductElementRef : null} 
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover mb-4"
              />
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                  <p className="text-gray-700 mb-4">${product.price}</p>
                </div>
                <button
                  className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition self-end"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
