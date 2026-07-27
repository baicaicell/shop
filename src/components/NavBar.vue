<template>
  <!-- 导航栏组件 -->
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">🛒 在线商城</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/" exact-active-class="active">首页</router-link>
        </li>
        <li>
          <router-link to="/products" active-class="active"
            >商品列表</router-link
          >
        </li>
        <li>
          <router-link to="/cart" active-class="active" class="cart-link">
            购物车
            <span v-if="cartCount > 0" class="badge">{{ cartCount }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useCart } from "../data/cart.js";

export default {
  name: "NavBar",
  setup() {
    const { cartCount } = useCart();
    return { cartCount };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #409eff;
  color: #fff;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.logo a {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: #fff;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 4px;
}

.nav-links a.active,
.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.cart-link {
  position: relative;
}

.badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: #f56c6c;
  color: #fff;
  font-size: 12px;
  padding: 1px 6px;
  border-radius: 10px;
}
</style>
