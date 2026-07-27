<template>
  <div class="container">
    <h2 class="page-title">商品列表</h2>

    <!-- 分类筛选 -->
    <div class="filter-bar">
      <span>分类筛选：</span>
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', { active: currentCategory === cat }]"
        @click="currentCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- 商品列表 -->
    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <p v-if="filteredProducts.length === 0" class="empty-tip">
      该分类下暂无商品
    </p>
  </div>
</template>

<script>
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  data() {
    return {
      products: products,
      categories: ["全部", "数码", "服饰", "生活"],
      currentCategory: "全部",
    };
  },
  computed: {
    // 根据分类筛选商品
    filteredProducts() {
      if (this.currentCategory === "全部") {
        return this.products;
      }
      return this.products.filter((p) => p.category === this.currentCategory);
    },
  },
};
</script>

<style scoped>
.filter-bar {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px 16px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.filter-btn.active {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}

.filter-btn:hover {
  border-color: #409eff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
</style>
