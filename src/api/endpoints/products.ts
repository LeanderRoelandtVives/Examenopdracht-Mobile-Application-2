import { get } from '../client'
import { Product } from '../../types/Product';
import { Products } from '../../types/Products';



export function fetchProducts()
{
    return get<Products>('/products')
}

export function fetchProductById(id: number)
{
    return get<Product>(`/products/${id}`)
}