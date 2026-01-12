import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/endpoints/products";
import { Products } from "../../types/Products";
import { queryKeys } from "../../constants/queryKeys";

export const useProducts = () =>
{
  return useQuery<Products, Error>(
    {
      queryKey: queryKeys.products.all(),
      queryFn: () => fetchProducts()
    }
  )
}