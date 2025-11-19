<script setup>
import { ref } from "vue";
import pageBanner from "./banners/page-banner.vue";
const mainTitle = ref("核心团队");
import { professorsInfo } from "./webMockInfos";

const professorsList = ref(professorsInfo);
</script>

<template>
  <div class="container">
    <!-- banner组件 -->
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content">
      <div class="crumbs">
        <i class="iconfont icon-Homehomepagemenu"></i>
        <span>您当前的位置：</span>
        <RouterLink to="/hexintuandui">核心团队</RouterLink>
      </div>
      <div class="professors_list">
        <div
          v-for="item in professorsList"
          :key="item.index"
          class="professors_item"
          @click="$router.push(item.jumpTo)"
        >
          <div class="img">
            <img :src="item.img" :alt="item.imgAlt" />
          </div>

          <div class="professors_title">
            <a href="javascript:void(0);">{{ item.title }}</a>
          </div>
          <div class="professors_info">{{ item.info || "" }}</div>
        </div>
        <!-- <div class="professors_item" @click="$router.push('/professor/6')">
          <img src="../assets/images/coreteam/people_RC01_02.jpg" alt="Prof. Jiyan DAI" />
          <div class="professors_title"><a href="javascript:void(0);">戴吉岩 教授</a></div>
          <div class="professors_info"></div>
        </div> -->
        <!-- <div class="professors_item" @click="$router.push('/professor/7')">
          <img src="../assets/images/coreteam/people_RC01_03.jpg" alt="Prof. Lei SUN" />
          <div class="professors_title"><a href="javascript:void(0);">孙雷 教授</a></div>
          <div class="professors_info"></div>
        </div> -->
        <!-- <div class="professors_item" @click="$router.push('/professor/8')">
          <img src="../assets/images/coreteam/people_RC02_01.jpg" alt="Prof. Yiping JIANG" />
          <div class="professors_title"><a href="javascript:void(0);">陈文华 教授</a></div>
          <div class="professors_info"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/*通用的banner样式抽取到在main.css里*/
.container .content .professors_list {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.container .content .professors_list .professors_item {
  width: 25%;
  padding: 0 10px;
}
.container .content .professors_list .professors_item .img {
  display: flex;
  width: 100%;
  height: 430px;
  align-items: center;
}
.container .content .professors_list .professors_item img {
  width: 100%;
  cursor: pointer;
}
.container .content .professors_list .professors_item .professors_title a {
  color: #333;
  font-size: 18px;
  text-decoration: none;
}
.container
  .content
  .professors_list
  .professors_item
  .professors_title
  a:hover {
  text-decoration: underline;
  color: #9f2843;
  background: none;
}
.container .content .professors_list .professors_item .professors_info {
  line-height: 1.8;
  height: 5.4em;
  overflow: hidden;
  color: #929292;
  font-size: 14px;
}

@media (min-width: 1024px) {
  .container h1,
  .container h3 {
    text-align: left;
  }
}
</style>
