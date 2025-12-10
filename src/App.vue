<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import { stationInfo } from "./components/webMockInfos";
import { detectDevice } from "../src/utils/common";
const route = useRoute(); // 获取当前路由信息
const router = useRouter();
const showSubMenu = ref(false);
const showContactSubMenu = ref(false);
const isMainLoading = ref(true);
const searchKeyword = ref(""); // 搜索关键词
// 移動端設備判斷
const isMobile = detectDevice();
// console.log("外面監聽：", isMobile, store.state.device.isMobile);

onMounted(() => {
  // loading效果模拟内容加载
  setTimeout(() => {
    isMainLoading.value = false;
  }, 1000); // 后面可以配合接口数据请求的加载逻辑
  // 防止移动端左右滑动
  if (detectDevice()) {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }
});

// 处理搜索功能
const handleSearch = () => {
  if (!searchKeyword.value.trim()) {
    alert("请输入检索内容");
    return;
  }
  // 跳转到搜索结果页，携带搜索关键词
  router.push({
    path: "/searchresults",
    query: { query: searchKeyword.value.trim() },
  });
};
</script>

<template>
  <adapter :class="{ mobile: isMobile, desktop: !isMobile }">
    <!-- 头部 -->
    <header>
      <div class="wrapper">
        <div class="logo">
          <router-link to="/"
            ><img
              src="../src/assets/images/PolyU-Hefei logo_hori.png"
              alt="section_logo"
          /></router-link>
        </div>
        <div class="menu">
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li
              @mouseenter="showSubMenu = true"
              @mouseleave="showSubMenu = false"
              @click="showSubMenu = false"
              class="about-menu"
            >
              <router-link to="/about">关于我们</router-link>

              <!-- 二级导航 -->
              <!-- <transition name="fade">
              <div v-show="showSubMenu" class="submenu">
                
              </div>
            </transition> -->
            </li>
            <li><router-link to="/hexintuandui">核心团队</router-link></li>
            <li>
              <router-link to="/research/center/1">研发实验室</router-link>
            </li>
            <li><router-link to="/news">新闻动态</router-link></li>
            <li
              @mouseenter="showContactSubMenu = true"
              @mouseleave="showContactSubMenu = false"
              @click="showContactSubMenu = false"
              class="contact-menu"
            >
              <router-link to="/contact">联系我们</router-link>
              <!-- 联系我们二级导航 -->
              <transition name="fade">
                <div v-show="showContactSubMenu" class="submenu">
                  <!-- <router-link to="/contactdetails/1">项目合作</router-link> -->
                  <router-link to="/contactdetails/2">采购招标</router-link>
                  <router-link to="/contactdetails/3">人才招聘</router-link>
                </div>
              </transition>
            </li>
          </ul>
          <!-- 站内搜索 -->
          <!-- <div class="search-container">
          <input
            type="text"
            class="search-input"
            placeholder="请输入关键字"
            v-model="searchKeyword"
            @keyup.enter="handleSearch"
          />
          <i class="iconfont icon-a-searchbar-search" @click="handleSearch"></i>
        </div> -->
        </div>
      </div>
    </header>

    <!-- 内容主体部分: key属性用于更新路由视图(教授信息的更新) -->
    <main :key="route.params.id || route.query.query">
      <!-- 加载效果 -->
      <div v-if="isMainLoading" class="main-loading">
        <div class="loading-spinner"></div>
      </div>
      <!-- 路由视图 -->
      <RouterView v-show="!isMainLoading" />
    </main>
    <!-- 底部 -->
    <footer>
      <div class="wrapper">
        <div class="navgation">
          <div class="title">导航</div>
          <div class="item"><router-link to="/">首页</router-link></div>
          <div class="item">
            <router-link to="/about">关于我们</router-link>
          </div>
          <div class="item">
            <router-link to="/research/center/1">研发实验室</router-link>
          </div>
          <!-- <div class="item"><router-link to="/news">新闻动态</router-link></div> -->
          <div class="item">
            <router-link to="/contact">联系我们</router-link>
          </div>
        </div>
        <div class="deparment">
          <div class="title">研发实验室</div>
          <div class="item" v-for="item in stationInfo" :key="item.id">
            <router-link :to="`/research/center/${item.id}`">{{
              item.name
            }}</router-link>
            <!-- <a href="javascript:void(0);">生物医疗精密传感器研究所</a> -->
          </div>
        </div>
        <div class="contactinfo">
          <div class="title">联系我们</div>
          <div class="item">
            地址：安徽省合肥市庐阳区清河路868号庐阳大数据产业园4号楼及5号楼
          </div>
          <!-- <div class="item">电话：院行政办 025-86963105</div> -->
        </div>
        <div class="media">
          <div class="title">关注我们</div>
          <div class="item" id="item">
            <div class="qrcode">
              <img src="./assets/images/QRcode.jpg" alt="" />
            </div>
            <div class="notice">
              <p>微信公众号/视频号/小红书</p>
              <p>搜索关注：香港理工大学合肥研究院</p>
            </div>
          </div>

          <div class="item">版权归港理大（合肥）技术创新研究院有限公司所有</div>
        </div>
      </div>
    </footer>
  </adapter>
</template>

<style scoped>
/*字体*/
@font-face {
  font-family: Roboto;
  font-weight: 300;
  font-style: normal;
  src: url(./assets/fonts/roboto-light.woff2) format("woff2"),
    url(../fonts/roboto-light.woff) format("woff");
}

@font-face {
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  src: url(./assets/fonts/roboto-regular.woff2) format("woff2"),
    url(../fonts/roboto-regular.woff) format("woff");
}

@font-face {
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  src: url(./assets/fonts/roboto-bold.woff2) format("woff2"),
    url(./assets/fonts/roboto-bold.woff) format("woff");
}

@font-face {
  font-family: Roboto;
  font-weight: 600;
  font-style: normal;
  src: url(./assets/fonts/roboto-medium.woff2) format("woff2"),
    url(./assets/fonts/roboto-medium.woff) format("woff");
}

/*通用头部*/
header {
  line-height: 1.5;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}
header .wrapper {
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
header .wrapper .logo {
  display: block;
  width: 40%;
  height: 100%;
}
header .wrapper .logo a {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
header .wrapper .logo a img {
  vertical-align: middle; /* 垂直对齐 */
  max-width: 100%; /* 防止图片溢出 */
  max-height: 100%; /* 防止图片溢出 */
}
header .menu {
  height: 100%;
  min-width: 800px;
  text-align: center;
  display: flex;
  justify-content: end;
  align-items: center;
}
header .menu ul {
  display: flex; /* 启用 Flex 布局 */
  list-style: none; /* 移除默认的列表符号 */
  padding: 0; /* 移除默认的 padding */
  margin: 0; /* 移除默认的 margin */
}
header .menu ul li {
  position: relative;
  margin-left: 40px; /* 可选：设置 li 之间的间距 */
  cursor: pointer;
}
header .menu ul li:not(:last-child)::after {
  content: "";
  position: absolute;
  right: -20px;
  top: 50%;
  width: 1px;
  height: 12px;
  margin-top: -6px;
  background: #c6c6c6;
}
header .menu ul li a {
  line-height: 100px;
  font-size: 16px;
  display: block;
  color: #333;
  padding: 0;
  position: relative;
  text-decoration: none;
}
header .menu ul li a:hover {
  color: #9f2843;
}

header .menu .search-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 10px;
  background: white;
}

.search-input {
  height: 35px;
  padding: 5px;
  border: none;
  outline: none;
  width: 200px; /* 调整宽度 */
}

.search-container .iconfont {
  font-size: 20px;
  color: #a9a9a9;
  cursor: pointer;
  transition: color 0.3s;
}

.search-container .iconfont:hover {
  color: #9f2843; /* 悬停时使用主题色 */
}
.about-menu {
  position: relative;
}

/* 二级菜单样式 */
.contact-menu {
  position: relative;
}
.submenu {
  position: absolute;
  top: 100%;
  left: -50px;
  width: 160px;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 2px;
  overflow: hidden;
  border-top: 2px solid #9f2843;
}

.submenu a {
  display: block !important;
  padding: 12px 20px !important;
  color: #333 !important;
  text-align: center !important;
  line-height: 1 !important;
  transition: all 0.3s !important;
  font-size: 14px !important;
  border-bottom: 1px solid #f0f0f0; /* 添加分隔线 */
}

.submenu a:last-child {
  border-bottom: none; /* 最后一个选项不加分隔线 */
}

.submenu a:hover {
  background-color: #9f2843;
  color: #fff !important;
}
/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
/*通用内容主体部分在各个组件中定义：此处是加载效果的样式*/
/* 新增样式 */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  position: relative;
  min-height: calc(100vh - 380px); /* 视口高度减去头部和底部高度 */
  display: flex;
  justify-content: center;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #9f2843;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*通用底部*/
footer {
  height: 280px;
  background: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* 防止底部被压缩 */
}
footer .wrapper {
  width: 1200px;
  display: flex;
  justify-content: start;
  align-items: center;
}
footer .wrapper .title {
  color: #fff;
  font-size: 22px;
  width: 220px;
  height: 44px;
  margin-bottom: 0.3em;
}
footer .wrapper .navgation {
  width: 20%;
  min-height: 240px;
}
footer .wrapper .deparment {
  width: 25%;
  min-height: 280px;
  margin-left: 20px;
}
footer .wrapper .contactinfo {
  width: 35%;
  min-height: 240px;
  margin-left: 20px;
}
footer .wrapper .media {
  width: 25%;
  min-height: 240px;
  margin-left: 20px;
}
footer .wrapper .item {
  color: #dcdcdc;
  margin-top: 8px;
}
footer .wrapper .item a {
  color: #dcdcdc;
  text-decoration: none;
}
footer .wrapper .item a:hover {
  text-decoration: underline;
  background: none;
}
footer .wrapper .item .qrcode {
  height: 110px;
  width: 110px;
  overflow: hidden;
}
footer .wrapper .item .qrcode img {
  height: 100%;
  object-fit: cover; /* 保持比例填充容器 */
  transition: opacity 0.3s ease; /* Smooth fade effect */
}
footer .wrapper .media #item {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
footer .wrapper .media #item .notice {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s ease; /* Smooth fade effect */
  cursor: pointer;
}
footer .wrapper .media #item:hover .notice {
  opacity: 1; /* Show on hover */
}
footer .wrapper .media #item:hover img {
  transform: scale(1.1); /* 放大10% */
}
footer .wrapper .media #item .notice p {
  color: white;
  width: 250px;
  text-align: left;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
}
/* ========== 移动端样式 .mobile前綴設定  ========== */
.mobile header .wrapper {
  /* 移动端头部应更紧凑，280px 太高了 */
  height: auto;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
}

.mobile header .wrapper .logo {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}

.mobile header .menu {
  width: 100%;
  min-width: auto;
  justify-content: center;
}

.mobile header .menu ul {
  flex-wrap: wrap;
  justify-content: center;
}

.mobile header .menu ul li {
  margin: 8px 12px;
}

.mobile header .menu ul li::after {
  display: none; /* 移动端通常不用分隔线 */
}

.mobile header .menu ul li a {
  line-height: 1.4;
  font-size: 16px;
  padding: 6px 12px;
}
/* 如果保留，调整位置避免溢出 */
.mobile .submenu {
  left: 0;
  right: 0;
  width: auto;
  text-align: center;
}

.mobile footer {
  width: 100%;
  padding: 20px 0;
  height: auto;
}

.mobile footer .wrapper {
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column; /* 移动端变成纵向布局 */
}

/* 模块竖向排布 */
.mobile footer .deparment,
.mobile footer .contactinfo,
.mobile footer .media {
  width: 100%;
  margin-bottom: 20px;
}
.mobile footer .navgation {
  display: flex;
  justify-content: space-between;
  min-height: 30px;
  width: 100%;
}
/* 标题 */
.mobile footer .title {
  width: 50px;
  font-size: 18px;
  margin-bottom: 8px;
}

/* 文本内容 */
.mobile footer .item {
  font-size: 14px;
  margin-top: 6px;
}
.mobile footer .deparment {
  margin: 0;
  min-height: 250px;
}
.mobile footer .deparment .title {
  width: 80px;
  height: 22px;
}
.mobile footer .deparment .item {
  padding-left: 2em;
}
.mobile footer .contactinfo {
  margin: 0;
  min-height: 50px;
}
.mobile footer .contactinfo .title {
  width: 80px;
  height: 22px;
}
/* 二维码缩小 */
.mobile footer .qrcode {
  width: 90px;
  height: 90px;
}
.mobile footer .media {
  margin: 0;
  min-height: 80px;
}
.mobile footer .media .title {
  display: none;
}
.mobile footer .media .item {
  text-align: center;
  margin-top: 10px;
}

.mobile footer .media #item .notice {
  width: 100%;
  height: 110px;
}

.mobile footer .media #item .notice p {
  font-size: 12px;
  width: auto;
}

/* 加载 spinner 保持通用即可，无需重复 */

/* 通用 main 布局 */
main {
  flex: 1;
  position: relative;
  min-height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
}
</style>
