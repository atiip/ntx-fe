"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import useStore from "@/store/useStore";

const UpdateProductPage = () => {
  const { getProductById, updateProduct, categories } = useStore();
  const router = useRouter();
  const params = useParams();
  const productId = params.id ? parseInt(params.id as string, 10) : null;
  const { toast } = useToast();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (productId) {
      getProductById(productId).then(setProduct);
    }
  }, [productId]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name || "",
      price: product?.price || "",
      quantity: product?.quantity || "",
      category_id: product?.category_id || categories[0]?.id || "",
    },
  });

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("price", product.price.toString());
      setValue("quantity", product.quantity.toString());
      setValue("category_id", product.category_id.toString());
    }
  }, [product]);

  const onSubmit = async (data: any) => {
    if (!productId) return;

    const updatedData = {
      name: data.name,
      price: parseFloat(data.price),
      quantity: parseInt(data.quantity, 10),
      category_id: parseInt(data.category_id, 10),
    };

    await updateProduct(productId, updatedData);

    toast({
      variant: "default",
      title: "Product Updated",
      description: `Product "${data.name}" has been updated successfully.`,
    });

    setTimeout(() => {
      router.push("/products");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 text-black">
      <Toaster />
      <h2 className="text-2xl font-semibold text-center mb-4">
        Update Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            {...register("name", { required: "Product name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message as String}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            min="0"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">
              {errors.price.message as String}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="quantity">Stock</Label>
          <Input
            id="quantity"
            type="number"
            min="0"
            {...register("quantity", { required: "Quantity is required" })}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">
              {errors.quantity.message as String}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            {...register("category_id", { required: "Category is required" })}
            className="border rounded-md p-2 w-full"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" className="w-full">
          Update Product
        </Button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
