<script setup>
import { ref } from "vue";
import pageBanner from "./banners/page-banner.vue";
const mainTitle = ref("联系我们");
const contactList = ref([
  {
    department: "生物医疗精密传感器研究所",
    name: "刘红 博士",
    //position: "智能机器人与机电一体化研究中心副主任",
    email: "hhhong.liu@polyu.edu.hk",
  },
  {
    department: "飞行器与低空导航研发中心",
    name: "黄海龙 博士",
    //position: "人工智能物联网创新研究中心副主任",
    email: "hailong.huang@polyu.edu.hk",
  },
  {
    department: "北斗应用技术研发中心",
    name: "杨扬 博士",
    //position: "智能建造研究中心副主任",
    email: "yangyang@polyu.edu.hk",
  },
  {
    department: "行星遥感与机器视觉研发中心",
    name: "陈龙 博士",
    //position: "科研助理",
    email: "brandon-long.chen@polyu.edu.hk",
  },
]);
</script>

<template>
  <div class="container">
    <!-- banner组件 -->
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content">
      <div class="contact_list">
        <div class="contact_item" v-for="item in contactList" :key="item.name">
          <h3>{{ item.department }}</h3>
          <p>联络人：{{ item.name }}</p>
          <!-- <p>职务：{{ item.position }}</p> -->
          <p>电邮：{{ item.email }}</p>
        </div>
      </div>
      <div class="contact_map">
        <img src="../assets/images/contact/map.jpg" alt="position" />
        <p>
          <font>地址：</font
            >安徽省合肥市庐阳区清河路868号庐阳大数据产业园4号楼及5号楼
        </p>
        <!-- <p><font>电话：</font>院行政办 025-86963105</p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.content h2 {
  font-size: 32px;
  font-weight: bold;
  color: #222;
  line-height: 1;
  margin-top: 50px;
}
.content span {
  display: inline-block;
  width: 30px;
  height: 1.5px;
  background: rgb(156, 154, 154);
  margin-top: 15px;
}
.content .contact_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  max-width: 1200px;
}
.content .contact_item {
  width: 40%;
  padding: 20px;
  margin-bottom: 30px;
}
.content .contact_item h3 {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}
.content .contact_item p {
  font-size: 14px;
  color: rgb(89, 89, 89);
  margin-bottom: 5px;
}
.content .contact_map {
  margin-bottom: 30px;
}
.content .contact_map p {
  margin-top: 10px;
}
.content .contact_map font {
  font-weight: bold;
  color: #2c3e50;
}
</style>
