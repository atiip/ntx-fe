import { create } from "zustand";
import { gql } from "@apollo/client";
import { immer } from "zustand/middleware/immer";
import client from "@/helper/apolloClient";


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category_id: number;
  company_id: number;
  created_at: string;
}

interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  created_at: string;
}

interface StoreState {
  categories: Category[];
  products: Product[];
  selectedCategory: number | null;
  loading: boolean;
  fetchProductsAndCategories: () => Promise<void>;
  selectCategory: (categoryId: number | null) => void;
  addCategory: (name: string, parentId?: number) => Promise<void>;
  updateProduct: (id: number, updatedData: Partial<Product>) => Promise<void>;
  addProduct: (productData: Omit<Product, "id" | "created_at">) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  getProductById: (id: number) => Promise<Product | null>;
}

const useStore = create<StoreState>()(
  immer((set) => ({
    categories: [],
    products: [],
    selectedCategory: null,
    loading: false,

    fetchProductsAndCategories: async () => {
      set({ loading: true });

      try {
        const { data } = await client.query({
          query: gql`
            query Products {
              products(order_by: { created_at: desc }) {
                id
                name
                price
                quantity
                category_id
                company_id
                created_at
              }
              categories {
                id
                name
                parent_id
                created_at
              }
            }
          `,
        });

        set((state) => {
          state.categories = data.categories;
          state.products = data.products;
          state.loading = false;
        });
      } catch (error) {
        console.error("Error fetching products and categories:", error);
        set({ loading: false });
      }
    },

    selectCategory: (categoryId) => {
      set((state) => {
        state.selectedCategory = state.selectedCategory === categoryId ? null : categoryId;
      });
    },

    addCategory: async (name, parentId) => {
      try {
        const { data } = await client.mutate({
          mutation: gql`
            mutation ($name: String!, $parentId: Int) {
              addCategory(name: $name, parentId: $parentId) {
                id
                name
                parent_id
              }
            }
          `,
          variables: { name, parentId },
        });

        set((state) => {
          state.categories.push(data.addCategory);
        });
      } catch (error) {
        console.error("Error adding category:", error);
      }
    },

    addProduct: async (productData) => {
      try {
        const { data } = await client.mutate({
          mutation: gql`
            mutation Insert_products_one($object: products_insert_input!) {
              insert_products_one(object: $object) {
                id
                name
                price
                quantity
                category_id
                company_id
                created_at
              }
            }
          `,
          variables: { object: productData },
          refetchQueries: [{ query: gql`
            query Products {
              products {
                id
                name
                price
                quantity
                category_id
                company_id
                created_at
              }
            }
          `}],
        });

        set((state) => {
          state.products.push(data.insert_products_one);
        });

      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    
    deleteProduct: async (id) => {
      try {
        await client.mutate({
          mutation: gql`
            mutation ($id: Int!) {
              delete_products_by_pk(id: $id) {
                id
              }
            }
          `,
          variables: { id },
          refetchQueries: [{ query: gql`
            query Products {
              products {
                id
                name
                price
                quantity
                category_id
                company_id
                created_at
              }
            }
          `}],
        });
        
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },

    getProductById: async (id) => {
      try {
        const { data } = await client.query({
          query: gql`
            query Products_by_pk($id: Int!) {
              products_by_pk(id: $id) {
                id
                name
                price
                quantity
                category_id
                company_id
                created_at
              }
            }
          `,
          variables: { id },
        });

        return data.products_by_pk ?? null;
      } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
      }
    },
    
     updateProduct: async (id, updatedData) => {
      try {
        await client.mutate({
          mutation: gql`
            mutation Update_products($id: Int!, $changes: products_set_input!) {
              update_products(where: { id: { _eq: $id } }, _set: $changes) {
                affected_rows
              }
            }
          `,
          variables: { id, changes: updatedData },
          refetchQueries: [{ query: gql`
            query Products {
              products {
                id
                name
                price
                quantity
                category_id
                company_id
                created_at
              }
            }
          `}],
        });

        set((state) => {
          const productIndex = state.products.findIndex((product) => product.id === id);
          if (productIndex !== -1) {
            state.products[productIndex] = { ...state.products[productIndex], ...updatedData };
          }
        });

      } catch (error) {
        console.error("Error updating product:", error);
      }}
  }))
);

export default useStore;
