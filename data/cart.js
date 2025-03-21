export const cart = [];

export function addToCart(productId) {
  const qty = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  );
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += qty;
  } else {
    cart.push({
      productId: productId,
      quantity: qty,
    });
  }
}
