"use client";

import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import useStore from "@/store/useStore";
import { useEffect } from "react";

const AddProductPage = () => {
  const { addProduct, categories, fetchProductsAndCategories } = useStore();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetchProductsAndCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      quantity: "",
      category_id: categories.length > 0 ? categories[0].id : "",
    },
  });

  const onSubmit = async (data: any) => {
    const newProduct = {
      name: data.name,
      price: parseFloat(data.price),
      quantity: parseInt(data.quantity, 10),
      category_id: parseInt(data.category_id, 10),
      company_id: 1,
      created_at: new Date().toISOString(),
    };

    await addProduct(newProduct);

    toast({
      title: "Product Added",
      description: `Product "${data.name}" has been added successfully.`,
    });

    setTimeout(() => {
      router.push("/products");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 text-black">
      <Toaster />
      <h2 className="text-2xl font-semibold text-center mb-4">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            placeholder="Enter product name"
            {...register("name", { required: "Product name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            placeholder="Enter price"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="quantity">Stock</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="Enter stock quantity"
            {...register("quantity", { required: "Quantity is required" })}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            className="border rounded-md p-2 w-full"
            {...register("category_id", { required: "Category is required" })}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category_id && (
            <p className="text-red-500 text-sm">{errors.category_id.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
