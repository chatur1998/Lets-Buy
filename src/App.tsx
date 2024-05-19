import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import CartModal from "./components/CartModal";
import { useProducts } from "./utils/hooks";
import Loader from "./components/Loader";
import { Product } from "./utils/types";

const App = () => {
  const { products, categories, loading, hasMore, loadMoreProducts } =
    useProducts();
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const isProductInPriceRange = (product: Product, priceRange: string) => {
    const [min, max] = priceRange.split("-").map(parseFloat);
    if (!max) {
      return product.price <= min;
    }
    return product.price > min && product.price <= max;
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && selectedPriceRange) {
      return (
        product.category === selectedCategory &&
        isProductInPriceRange(product, selectedPriceRange)
      );
    } else if (selectedCategory) {
      return product.category === selectedCategory;
    } else if (selectedPriceRange) {
      return isProductInPriceRange(product, selectedPriceRange);
    }
    return products;
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value || null);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceRange(e.target.value || null);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!cart.length) setShowModal(false);
  }, [cart]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 pt-6">
      <div className="mx-12">
        <div className="flex justify-between align-middle mb-6">
          <h1 className="text-3xl font-bold">Let's Buy</h1>
          <button
            className={
              !cart.length
                ? "p-2 bg-gray-500 text-white rounded cursor-not-allowed"
                : "p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
            }
            onClick={openModal}
            disabled={!cart.length}
          >
            <span className="ml-1">
              {!!cart.length ? `${cart.length} Items in` : "View"}
            </span>{" "}
            Cart
          </button>
        </div>
        <Filter
          categories={categories}
          filterByCategory={handleCategoryChange}
          filterByPrice={handlePriceChange}
        />
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
          loadMoreProducts={loadMoreProducts}
          hasMore={hasMore}
          loading={loading}
        />
      </div>
      {loading && <div>Loading more</div>}
      <footer className="flex justify-end bg-white p-3 border-t shadow-md mt-6 max-w-full">
        <button
          className={
            !cart.length
              ? "p-2 bg-gray-500 text-white rounded cursor-not-allowed"
              : "p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          }
          onClick={openModal}
          disabled={!cart.length}
        >
          Checkout
        </button>
      </footer>
      {showModal && (
        <CartModal
          cart={cart}
          closeModal={closeModal}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
