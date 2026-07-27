<template>
  <div class="container">
    <div v-if="product">
      <h2 class="page-title">商品详情</h2>
      <div class="detail-box">
        <img :src="product.image" :alt="product.name" class="detail-img" />
        <div class="detail-info">
          <h1>{{ product.name }}</h1>
          <p class="detail-category">分类：{{ product.category }}</p>
          <p class="detail-price">¥{{ product.price }}</p>
          <p class="detail-desc">{{ product.desc }}</p>
          <div class="detail-actions">
            <button class="btn btn-primary btn-lg" @click="handleAdd">
              加入购物车
            </button>
            <router-link to="/products" class="btn btn-back"
              >返回列表</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <p v-else class="empty-tip">商品不存在</p>
  </div>
</template>

<script>
import { getProductById } from "../data/products.js";
import { useCart } from "../data/cart.js";

export default {
  name: "ProductDetail",
  setup() {
    const { addToCart } = useCart();
    return { addToCart };
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    // 根据路由参数获取商品
    const id = this.$route.params.id;
    this.product = getProductById(id);
  },
  methods: {
    handleAdd() {
      this.addToCart(this.product);
      alert("已加入购物车：" + this.product.name);
    },
  },
};
</script>

<style scoped>
.detail-box {
  display: flex;
  gap: 30px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.detail-img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 6px;
  background: #eee;
}

.detail-info {
  flex: 1;
}

.detail-info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.detail-category {
  color: #999;
  margin-bottom: 15px;
}

.detail-price {
  font-size: 28px;
  color: #f56c6c;
  font-weight: bold;
  margin-bottom: 20px;
}

.detail-desc {
  line-height: 1.8;
  color: #666;
  margin-bottom: 30px;
}

.detail-actions {
  display: flex;
  gap: 15px;
}

.btn-lg {
  padding: 12px 30px;
  font-size: 16px;
}

.btn-back {
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
}

.btn-back:hover {
  border-color: #409eff;
  color: #409eff;
}
</style>
