<template>
  <!-- 购物车商品项组件 -->
  <div class="cart-item">
    <img :src="item.image" :alt="item.name" class="item-img" />
    <div class="item-info">
      <h4>{{ item.name }}</h4>
      <p class="item-price">单价：¥{{ item.price }}</p>
    </div>
    <div class="item-quantity">
      <button class="qty-btn" @click="changeQty(-1)">-</button>
      <span class="qty-num">{{ item.quantity }}</span>
      <button class="qty-btn" @click="changeQty(1)">+</button>
    </div>
    <div class="item-subtotal">¥{{ item.price * item.quantity }}</div>
    <button class="btn btn-danger btn-sm" @click="handleRemove">删除</button>
  </div>
</template>

<script>
import { useCart } from "../data/cart.js";

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { updateQuantity, removeFromCart } = useCart();
    return { updateQuantity, removeFromCart };
  },
  methods: {
    // 修改数量
    changeQty(delta) {
      this.updateQuantity(this.item.id, this.item.quantity + delta);
    },
    // 删除商品
    handleRemove() {
      if (confirm("确定要删除该商品吗？")) {
        this.removeFromCart(this.item.id);
      }
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 10px;
  gap: 15px;
}

.item-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  background: #eee;
}

.item-info {
  flex: 1;
}

.item-info h4 {
  font-size: 15px;
  margin-bottom: 5px;
}

.item-price {
  color: #999;
  font-size: 13px;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.qty-btn:hover {
  background: #f5f5f5;
}

.qty-num {
  min-width: 30px;
  text-align: center;
  font-size: 15px;
}

.item-subtotal {
  font-size: 16px;
  color: #f56c6c;
  font-weight: bold;
  min-width: 80px;
  text-align: right;
}

.btn-sm {
  padding: 5px 12px;
  font-size: 13px;
}
</style>
