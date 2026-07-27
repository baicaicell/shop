# Vue.js 简易商城项目

## 项目说明

这是一个基于 Vue.js 框架开发的简易商城网站，用于课程实验。

## 功能特性

- 商品展示（首页 + 商品列表页）
- 商品详情查看
- 购物车功能（增删改查 + 总价计算）
- 分类筛选
- 路由页面切换

## 组件说明

- `NavBar.vue` - 顶部导航栏组件
- `ProductCard.vue` - 商品卡片组件
- `CartItem.vue` - 购物车商品项组件

## 页面路由

- `/` - 首页
- `/products` - 商品列表
- `/product/:id` - 商品详情
- `/cart` - 购物车

## 运行方式

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 http://localhost:3000

## 技术栈

- Vue 3
- Vue Router 4
- Vite
