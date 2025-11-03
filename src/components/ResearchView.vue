<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import pageBanner from "./banners/page-banner.vue";
import { stationInfo } from "./webMockInfos";
import { onMounted, nextTick } from "vue";
const router = useRouter();

// import { getImgSrc } from "../utils/common";

const mainTitle = ref("研究中心");
const departmentList = ref(stationInfo);
var activeIndex = ref();
const goToCenter = (id) => {
  router.push({ name: "center", params: { id } });
};
onMounted(() => {
  nextTick(() => {
    let _id = router.currentRoute.value.params.id || "";
    !!_id && (activeIndex.value = _id);
  });
});
</script>

<template>
  <div class="container">
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content">
      <div class="crumbs">
        <i class="iconfont icon-Homehomepagemenu"></i>
        <span>您当前的位置：</span>
        <RouterLink to="/research/center/1">研究中心</RouterLink>
      </div>
      <div class="content-body">
        <!-- 左侧菜单 -->
        <div class="content-body__left">
          <div
            v-for="item in departmentList"
            :key="item.id"
            class="department_item"
            :class="{ active: activeIndex == item.id }"
            @click="goToCenter(item.id)"
          >
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
        <!-- 右侧详情 -->
        <div class="content-body__right">
          <router-view
            v-if="$route.matched.some((r) => r.name === 'center')"
          ></router-view>
        </div>
      </div>
    </div>
    <!-- <div class="content" v-if="$route.matched.some((r) => r.name === 'center')">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<style scoped>
.content {
  max-width: 1200px;
}
.content-body {
  display: flex;
  padding-top: 20px;
  width: 1200px;
}
.content-body__left {
  display: flex;
  width: 270px;
  padding-right: 20px;
  flex-direction: column;
}
.content-body__left .department_item {
  width: 100%;
  padding: 9px 25px 9px 15px;
  border: 1px solid #dfdfdf;
  color: #333;
  background: #fff;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.content-body__left .department_item:hover,
.content-body__left .department_item.active {
  background: #9f2436;
  color: #fff;
}
.content-body__left .department_item .name {
  font-size: 14px;
  line-height: 28px;
}
.content-body__right {
  display: flex;
  width: 930px;
  flex-direction: column;
}
.content .research_department {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 60px 0;
  width: 100%;
}
.content .research_department .department_item {
  width: 285px;
  height: 285px;
  position: relative;
  cursor: pointer;
}
.content .research_department .department_item .department_item_bg {
  background-size: cover;
  height: 100%;
  width: 100%;
}
.content .research_department .department_item p {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
.content .research_department .department_item:hover p {
  background: #9f2843;
}
</style>
