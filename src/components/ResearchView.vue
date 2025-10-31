<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToCenter = (id) => {
  router.push({ name: "center", params: { id } });
};
</script>

<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/images/banner/research.jpg" alt="banner" />
    </div>
    <div
      class="content"
      v-if="!$route.matched.some((r) => r.name === 'center')"
    >
      <div class="crumbs">
        <i class="iconfont icon-Homehomepagemenu"></i>
        <span>您当前的位置：</span>
        <RouterLink to="/reserach">研究中心</RouterLink>
      </div>
      <div class="research_department">
        <div class="department_item" 
          @click="goToCenter(1)">
          <div class="department_item_bg"></div>
          <p>生物医疗精密传感器研究所</p>
        </div>
        <div
          class="department_item"
          @click="goToCenter(2)"
        >
          <div class="department_item_bg"></div>
          <p>飞行器与低空导航研发中心</p>
        </div>
        <div
          class="department_item"
          @click="goToCenter(3)"
        >
          <div class="department_item_bg"></div>
          <p>北斗应用技术研发中心</p>
        </div>
        <div
          class="department_item"
          @click="goToCenter(4)"
        >
          <div class="department_item_bg"></div>
          <p>行星遥感与机器视觉研发中心</p>
        </div>
      </div>
    </div>
    <div class="content" v-if="$route.matched.some((r) => r.name === 'center')">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
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
  background: url("../assets/images/researchcenter/RC01.png") no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.content
  .research_department
  .department_item:nth-child(2)
  .department_item_bg {
  background: url("../assets/images/researchcenter/RC02.png");
}
.content
  .research_department
  .department_item:nth-child(3)
  .department_item_bg {
  background: url("../assets/images/researchcenter/RC03.png");
}
.content
  .research_department
  .department_item:nth-child(4)
  .department_item_bg {
  background: url("../assets/images/researchcenter/RC04.png");
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
.content .research_department .department_item:hover  p{
  background: #9f2843;
}
</style>
