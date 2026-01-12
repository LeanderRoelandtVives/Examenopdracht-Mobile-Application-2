import { useQuery } from "@tanstack/react-query"
import { fetchProductById } from "../../api/endpoints/products"
import { Product } from "../../types/Product"
import { queryKeys } from "../../constants/queryKeys"

export const useProduct = (id: number) =>
{
  return useQuery<Product, Error>(
    {
      queryKey: queryKeys.products.detail(id),
      queryFn: () => fetchProductById(id)
    }
  )
}