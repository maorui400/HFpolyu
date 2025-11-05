<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import pageBanner from "./banners/page-banner.vue";
const mainTitle = ref("专家信息");
import prof1 from "../assets/images/coreteam/people_RC03_01.jpg";
import prof2 from "../assets/images/coreteam/people_RC01_01.jpg";
import prof3 from "../assets/images/coreteam/people_RC04_01.jpg";
import prof4 from "../assets/images/coreteam/people_RC02_02.jpg";
import prof5 from "../assets/images/coreteam/people_RC03_02.jpg";
import prof6 from "../assets/images/coreteam/people_RC01_02.jpg";
import prof7 from "../assets/images/coreteam/people_RC01_03.jpg";
import prof8 from "../assets/images/coreteam/people_RC02_01.jpg";
import prof9 from "../assets/images/coreteam/people_RC02_03.jpg";
import prof10 from "../assets/images/coreteam/people_RC10_01.png";

const professorInfo = ref([
  {
    id: 1,
    name: "陈武 教授",
    releaseTime: "2024-12-18 15:28:41",
    picture: prof1,
    position: "院长",
    details: [
      "香港理工大学卫星导航讲座教授",
      "香港理工大学土地测量与地理资讯学系主任",
      "香港理工大学人工智能物联网研究院副院长",
    ],
  },
  {
    id: 2,
    name: "严锋 教授",
    releaseTime: "2024-12-18 15:45:01",
    picture: prof2,
    position: "副院长 生物医疗传感器研发中心主任",
    details: [
      "香港理工大学有机电子讲座教授",
      "香港理工大学智能可穿戴系统研究院副院长",
      "香港理工大学有机电子研究中心主任",
      "美国光学学会会士",
      "英国皇家化学学会会士",
    ],
  },
  {
    id: 3,
    name: "吴波 教授",
    releaseTime: "2024-12-18 15:49:32",
    picture: prof3,
    position: "行星遥感与机器视觉研发中心主任",
    details: [
      "香港理工大学土地测量与地理资讯学系教授",
      "香港理工大学张心瑜空间科学教授",
      "香港理工大学土地测量与地理资讯学系副主任(研究)",
      "香港理工大学深空探测研究中心副主任",
    ],
  },
  {
    id: 4,
    name: "黄海龙 助理教授",
    releaseTime: "2024-12-18 16:01:00",
    picture: prof4,
    position: "飞行器与低空导航研发中心主任",
    details: ["香港理工大学航空及民航工程学系助理教授"],
  },
  {
    id: 5,
    name: "杨扬 研究助理教授",
    releaseTime: "2024-12-19 10:21:58",
    picture: prof5,
    position: "北斗应用技术研发中心主任",
    details: ["香港理工大学土地测量与地理资讯学系研究助理教授"],
  },

  {
    id: 6,
    name: "戴吉岩 教授",
    releaseTime: "2024-12-19 10:24:22",
    picture: prof6,
    position: "",
    details: ["香港理工大学应用物理学系教授"],
  },
  {
    id: 7,
    name: "孙雷 教授",
    releaseTime: "2024-12-19 10:24:58",
    picture: prof7,
    position: "",
    details: ["香港理工大学生物医学工程学系教授"],
  },
  {
    id: 8,
    name: "陈文华 教授",
    releaseTime: "2024-12-19 10:25:20",
    picture: prof8,
    position: "",
    details: [
      "香港理工大学机器人及自主系统讲座教授",
      "香港理工大学低空经济研究中心主任",
      "香港理工大学航空及民航工程学系主任",
    ],
  },
  {
    id: 9,
    name: "蒋一平 助理教授",
    releaseTime: "2024-12-19 10:25:20",
    picture: prof9,
    position: "",
    details: ["香港理工大学航空及民航工程学系助理教授"],
  },
  {
    id: 10,
    name: "蔡璟 教授",
    releaseTime: "2024-12-19 10:25:20",
    picture: prof10,
    position: "肿瘤放疗疗效管理辅助机器人研发中心主任",
    details: ["香港理工大学医疗科技与资讯学系系主任"],
  },
]);

const route = useRoute(); // 获取当前路由信息
const id = Number(route.params.id); // 将参数转为数字（因为你的 id 是数字）
console.log("当前信息ID", id);
// 根据 id 动态匹配教授信息
const showInfo = computed(() => {
  return professorInfo.value.find((item) => item.id === id);
});
// 计算上一个/下一个教授的 id（用于翻页功能）
const prevId = computed(() => {
  if (!showInfo.value) return null;
  const currentIndex = professorInfo.value.findIndex((item) => item.id === id);
  console.log("prevId当前的信息ID", currentIndex);
  return currentIndex > 0 ? professorInfo.value[currentIndex - 1].id : null;
});
console.log("上一条信息ID", prevId.value);
const nextId = computed(() => {
  if (!showInfo.value) return null;
  const currentIndex = professorInfo.value.findIndex((item) => item.id === id);
  console.log("nextId当前的信息ID", id, currentIndex);
  return currentIndex < professorInfo.value.length - 1
    ? professorInfo.value[currentIndex + 1].id
    : null;
});

const prevOne = computed(() => {
  return prevId.value
    ? professorInfo.value.find((item) => item.id === prevId.value)?.name
    : null;
});

const nextOne = computed(() => {
  return nextId.value
    ? professorInfo.value.find((item) => item.id === nextId.value)?.name
    : null;
});

console.log("下一条信息ID", nextId.value);
</script>

<template>
  <div class="container" :key="route.params.id">
    <!-- banner组件 -->
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content" :key="route.params.id">
      <div class="professor_resume">
        <h2>{{ showInfo.name }}</h2>
        <!-- <span>发布时间：{{ showInfo.releaseTime }}</span> -->
        <img :src="showInfo.picture" alt="professor" />
        <h3>{{ showInfo.position }}</h3>
        <div
          class="details"
          v-for="(item, index) in showInfo.details"
          :key="index"
        >
          <p>{{ item }}</p>
          <p v-if="showInfo.details.length === 0">暂无详细信息</p>
        </div>
        <div class="options">
          <div class="next_previous">
            <p v-if="prevOne">
              上一个：
              <RouterLink :to="{ name: 'professor', params: { id: prevId } }">
                {{ prevOne }}
              </RouterLink>
            </p>
            <p v-else>上一个： 没有了</p>

            <p v-if="nextOne">
              下一个：
              <RouterLink :to="{ name: 'professor', params: { id: nextId } }">
                {{ nextOne }}
              </RouterLink>
            </p>
            <p v-else>下一个： 没有了</p>
          </div>
          <button @click="$router.go(-1)">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content .professor_resume {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 35px 0;
  width: 1200px;
}
.content .professor_resume h2 {
  font-weight: bold;
  color: #333333;
}
.content .professor_resume span {
  font-size: 14px;
  color: #666666;
  padding: 15px 0;
}
.content .professor_resume h3 {
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  padding: 15px 0;
}
.content .professor_resume .details p {
  margin: 0 0 15px;
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-family: arial, helvetica, sans-serif;
}
.content .professor_resume .professor-img {
  width: 300px; /* 限制图片宽度 */
  height: auto; /* 保持图片纵横比 */
}
</style>
