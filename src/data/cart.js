import { reactive, computed } from "vue";

// 购物车状态管理（简单的响应式数据）
const cartState = reactive({
  items: [], // { id, name, price, image, quantity }
});

// 添加商品到购物车
export function addToCart(product) {
  const exist = cartState.items.find((item) => item.id === product.id);
  if (exist) {
    exist.quantity++;
  } else {
    cartState.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }
}

// 修改商品数量
export function updateQuantity(id, quantity) {
  const item = cartState.items.find((i) => i.id === id);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      item.quantity = quantity;
    }
  }
}

// 删除购物车商品
export function removeFromCart(id) {
  const index = cartState.items.findIndex((i) => i.id === id);
  if (index > -1) {
    cartState.items.splice(index, 1);
  }
}

// 清空购物车
export function clearCart() {
  cartState.items = [];
}

// 计算购物车总价
export const cartTotal = computed(() => {
  return cartState.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
});

// 计算购物车商品总数
export const cartCount = computed(() => {
  return cartState.items.reduce((sum, item) => sum + item.quantity, 0);
});

export function useCart() {
  return {
    cartState,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  };
}
