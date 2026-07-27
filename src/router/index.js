import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Cart from "../views/Cart.vue";

// 路由配置
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/products", name: "ProductList", component: ProductList },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/cart", name: "Cart", component: Cart },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
