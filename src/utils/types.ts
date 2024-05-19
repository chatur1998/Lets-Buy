export type Product = {
  category?: string;
  description?: string;
  id: number;
  title: string;
  price: number;
  image: string;
};

export type UseProductsReturn = {
  products: Product[];
  categories: string[];
  loading: boolean;
  hasMore: boolean;
  loadMoreProducts: () => void;
};
