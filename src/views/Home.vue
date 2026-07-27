<template>
  <div class="container">
    <!-- 首页 -->
    <div class="banner">
      <h1>春季大促 全场优惠</h1>
      <p>精选数码、服饰、生活用品，低价好物等你来选</p>
      <router-link to="/products" class="btn btn-primary">立即选购</router-link>
    </div>

    <h2 class="page-title">热门商品</h2>
    <div class="product-grid">
      <ProductCard
        v-for="product in hotProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  components: { ProductCard },
  data() {
    return {
      // 取前4个作为热门商品展示
      hotProducts: products.slice(0, 4),
    };
  },
};
</script>

<style scoped>
.banner {
  background: linear-gradient(135deg, #409eff, #66b1ff);
  color: #fff;
  text-align: center;
  padding: 50px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.banner h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.banner p {
  font-size: 15px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
</style>
