<script setup>
import { ref } from "vue";
import pageBanner from "./banners/page-banner.vue";
import { contactList, tenderingInfo, recruitmentInfo } from "./webMockInfos";

const mainTitle = ref("联系我们");
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
/* 联系我们移动端适配 */
.mobile .content {
  padding: 0 16px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.mobile .content h2 {
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
}

.mobile .content span {
  width: 40px;
  margin-top: 10px;
}

.mobile .content .contact_list {
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
}

.mobile .content .contact_item {
  width: 100%;
  max-width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-align: center;
}

.mobile .content .contact_item h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.mobile .content .contact_item p {
  font-size: 14px;
  margin-bottom: 5px;
  line-height: 1.4;
}

.mobile .content .contact_map {
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
  text-align: center;
}

.mobile .content .contact_map img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.mobile .content .contact_map p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  padding: 0 10px;
}

.mobile .content .contact_map font {
  font-weight: bold;
  color: #2c3e50;
}
</style>
