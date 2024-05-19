import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../api/api';
import { Product, UseProductsReturn } from './types';

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const limit = 10;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productResponse = await fetchProducts(limit, page);
        const categoryResponse = await fetchCategories();
        
        setProducts(productResponse.data);
        setCategories(categoryResponse.data);
        if (productResponse.data.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page]);

  const loadMoreProducts = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return {
    products,
    categories,
    loading,
    hasMore, 
    loadMoreProducts,
  };
};
