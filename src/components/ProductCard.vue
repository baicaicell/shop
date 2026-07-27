<template>
  <!-- 商品卡片组件 -->
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-img" />
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-category">分类：{{ product.category }}</p>
      <p class="product-price">¥{{ product.price }}</p>
      <div class="product-actions">
        <router-link :to="'/product/' + product.id" class="btn btn-detail"
          >查看详情</router-link
        >
        <button class="btn btn-primary" @click="handleAdd">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCart } from "../data/cart.js";

export default {
  name: "ProductCard",
  props: {
    // 接收商品数据
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { addToCart } = useCart();
    return { addToCart };
  },
  methods: {
    // 点击加入购物车
    handleAdd() {
      this.addToCart(this.product);
      alert("已加入购物车：" + this.product.name);
    },
  },
};
</script>

<style scoped>
.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: #eee;
}

.product-info {
  padding: 12px;
}

.product-name {
  font-size: 16px;
  margin-bottom: 6px;
}

.product-category {
  font-size: 13px;
  color: #999;
  margin-bottom: 6px;
}

.product-price {
  font-size: 20px;
  color: #f56c6c;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-actions {
  display: flex;
  gap: 8px;
}

.btn-detail {
  padding: 6px 12px;
  border: 1px solid #409eff;
  color: #409eff;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
}

.btn-detail:hover {
  background-color: #ecf5ff;
}

.product-actions .btn-primary {
  flex: 1;
  font-size: 13px;
}
</style>
