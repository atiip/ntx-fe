"use client";

import CategoryTag from "@/components/CategoryTag";
import useStore from "@/store/useStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const {
    categories,
    products,
    fetchProductsAndCategories,
    addProduct,
    deleteProduct,
    selectCategory,
    selectedCategory,
    loading,
  } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetchProductsAndCategories();
  }, [pathname]);

  if (loading) return <p className="text-black">Loading...</p>;
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category_id === selectedCategory)
    : products;

  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting product ID: ${id}`);

    deleteProduct(id);
    fetchProductsAndCategories();
  };

  return (
    <div className="flex flex-col gap-4 p-6 ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Products</h1>
        <div className="flex flex-row items-center justify-start gap-4">
          <div
            onClick={() => {}}
            className="font-label-l14 font-bold text-black"
          >
            Filter
          </div>
          <button
            className="bg-black text-white font-medium px-5 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => {
              router.replace("/products/add");
            }}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full ">
          <thead className="w-full border-collapse border-x-0 border-y border-gray-200 border-solid mb-2">
            <tr className="text-left text-black">
              <th className=" px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50 text-black">
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {getCategoryName(product.category_id)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                    <button
                      className="bg-custom-lightBlue-400 text-white px-3 py-1 rounded-md hover:bg-custom-lightBlue-500 transition"
                      onClick={() => {
                        router.push(`/products/edit/${product.id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-custom-red-400 font-medium text-white px-3 py-1 rounded-md hover:bg-custom-red-500  transition"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
