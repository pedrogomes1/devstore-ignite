'use client'

import { useCart } from '@/contexts/cart'

export interface AddToCartButton {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButton) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="w-full flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
