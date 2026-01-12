import { get } from '../client'
import { Product } from '../../types';
import { Products } from '../../types';



export function fetchProducts()
{
    return get<Products>('/products')
}

export function fetchProductById(id: number)
{
    return get<Product>(`/products/${id}`)
}