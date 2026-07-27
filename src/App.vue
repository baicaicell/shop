<template>
  <div id="app">
    <!-- 顶部导航栏组件 -->
    <NavBar />
    <!-- 页面内容区域 -->
    <main class="main-content">
      <router-view />
    </main>
    <!-- 底部 -->
    <footer class="footer">
      <p>在线商城 © 2026</p>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 120px);
}

.footer {
  background-color: #333;
  color: #aaa;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
}
</style>
