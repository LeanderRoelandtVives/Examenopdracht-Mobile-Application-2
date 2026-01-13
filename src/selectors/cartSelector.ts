import { RootState } from '../store/store'
import { CartProduct } from '../types/Cart/CartProduct'



export const selectCartItems = (state: RootState): CartProduct[] => state.cart.items

export const selectTotalItems = (state: RootState): number => state.cart.items.reduce((sum: number, i: CartProduct) => sum + i.quantity, 0)

export const selectSubtotal = (state: RootState): number => state.cart.items.reduce((sum: number, i: CartProduct) => sum + i.price * i.quantity, 0)