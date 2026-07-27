<template>
  <div class="container">
    <h2 class="page-title">我的购物车</h2>

    <!-- 购物车为空 -->
    <div v-if="cartState.items.length === 0" class="empty-tip">
      <p>购物车是空的，快去挑选商品吧！</p>
      <router-link
        to="/products"
        class="btn btn-primary"
        style="margin-top: 15px; display: inline-block"
      >
        去购物
      </router-link>
    </div>

    <!-- 购物车有商品 -->
    <div v-else>
      <CartItem v-for="item in cartState.items" :key="item.id" :item="item" />

      <!-- 结算区域 -->
      <div class="cart-footer">
        <div class="total-info">
          <span>共 {{ cartCount }} 件商品，</span>
          <span
            >合计：<strong class="total-price">¥{{ cartTotal }}</strong></span
          >
        </div>
        <div class="footer-actions">
          <button class="btn btn-danger" @click="handleClear">
            清空购物车
          </button>
          <button class="btn btn-primary btn-lg" @click="handleCheckout">
            结算
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCart } from "../data/cart.js";
import CartItem from "../components/CartItem.vue";

export default {
  name: "Cart",
  components: { CartItem },
  setup() {
    const { cartState, cartTotal, cartCount, clearCart } = useCart();
    return { cartState, cartTotal, cartCount, clearCart };
  },
  methods: {
    // 清空购物车
    handleClear() {
      if (confirm("确定要清空购物车吗？")) {
        this.clearCart();
      }
    },
    // 结算（模拟）
    handleCheckout() {
      alert("结算成功！总计：¥" + this.cartTotal + "\n感谢您的购买！");
      this.clearCart();
    },
  },
};
</script>

<style scoped>
.cart-footer {
  background: #fff;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-info {
  font-size: 16px;
}

.total-price {
  font-size: 24px;
  color: #f56c6c;
}

.footer-actions {
  display: flex;
  gap: 10px;
}

.btn-lg {
  padding: 10px 30px;
  font-size: 16px;
}
</style>
