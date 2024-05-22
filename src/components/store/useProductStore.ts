import { create } from "zustand";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductStore = {
  product: Product | null;
  setProduct: (product: Product) => void;
};

const useProductStore = create<ProductStore>((set) => ({
  product: null, // state awal adalah null
  setProduct: (product) => set({ product }), // action untuk mengatur produk
}));

export default useProductStore;
