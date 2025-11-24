<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { stationInfo, professorsInfo } from "./webMockInfos";
import { getImgSrc } from "../utils/common";

const stationInfoList = ref(stationInfo);
// 动态导入新闻图片
const newsModules = import.meta.glob(
  "../assets/images/polyHfri/news*.{png,jpg}",
  { eager: true }
);
const bannerNews = ref([]);
Object.entries(newsModules).forEach(([path, module]) => {
  bannerNews.value.push(module.default);
});

// 动态导入专利证书图片
const patentModules = import.meta.glob(
  "../assets/images/polyHfri/RC*.{png,jpg}",
  { eager: true }
);
const imgPatents = ref([]);
Object.entries(patentModules).forEach(([path, module]) => {
  imgPatents.value.push(module.default);
});

// 轮播图数据
const currentIndex = ref(0);
const slides = computed(() => {
  return bannerNews.value.map((image, index) => ({
    image,
    title: `新闻图片${index + 1}`,
  }));
});

const slideStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// 自动轮播
let slideInterval = null;
let patentInterval = null;

onMounted(() => {
  slideInterval = setInterval(nextSlide, 3000);
  patentInterval = startPatentScroll();
});

onUnmounted(() => {
  clearInterval(slideInterval);
  clearInterval(patentInterval);
});

// 路由
const router = useRouter();
const goToCenter = (dif, id) => {
  dif === "center"
    ? router.push({ name: "center", params: { id } })
    : router.push({ name: "newsdetails", params: { id } });
};

// 取前4名教授数据
const professors = computed(() => professorsInfo.slice(0, 4));
// const professors = ref([
//   {
//     id: 1,
//     name: "陈武 教授",
//     title: "院长",
//     image: new URL(
//       "../assets/images/coreteam/people_RC03_01.jpg",
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 2,
//     name: "严锋 教授",
//     title: "副院长 生物医疗传感器研发中心主任",
//     image: new URL(
//       "../assets/images/coreteam/people_RC01_01.jpg",
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 3,
//     name: "吴波 教授",
//     title: "行星遥感与机器视觉研发中心主任",
//     image: new URL(
//       "../assets/images/coreteam/people_RC04_01.jpg",
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 4,
//     name: "黄海龙 教授",
//     title: "飞行器与低空导航研发中心主任",
//     image: new URL(
//       "../assets/images/coreteam/people_RC02_02.jpg",
//       import.meta.url
//     ).href,
//   },
//   // {
//   //   id: 5,
//   //   name: "杨扬 教授",
//   //   title: "北斗应用技术研发中心主任",
//   //   image: new URL(
//   //     "../assets/images/coreteam/people_RC03_02.jpg",
//   //     import.meta.url
//   //   ).href,
//   // },
// ]);

const navigateToProfessor = (professorId) => {
  router.push({
    name: "professor",
    params: { id: professorId },
  });
};

// 核心团队滑动
const professorScrollPosition = ref(0);
const professorItemWidth = 300 + 8;

// const nextProfessorSlide = () => {
//   if (
//     Math.abs(professorScrollPosition.value) <
//     (professors.value.length - 4) * professorItemWidth
//   ) {
//     professorScrollPosition.value -= professorItemWidth;
//   }
// };

// const prevProfessorSlide = () => {
//   if (professorScrollPosition.value < 0) {
//     professorScrollPosition.value += professorItemWidth;
//   }
// };

// 专利证书数据
const patents = computed(() => {
  return imgPatents.value.map((image, index) => ({
    image,
    alt: `专利${index + 1}`,
  }));
});

const duplicatedPatents = computed(() => [...patents.value, ...patents.value]);
const scrollPosition = ref(0);
const scrollSpeed = 2;
const itemWidth = 300 + 8;
const isHovering = ref(false);

const startPatentScroll = () => {
  return setInterval(() => {
    if (!isHovering.value) {
      scrollPosition.value -= scrollSpeed;
      if (Math.abs(scrollPosition.value) >= patents.value.length * itemWidth) {
        scrollPosition.value = 0;
      }
    }
  }, 30);
};
</script>

<template>
  <div class="container">
    <!-- 轮播部分 -->
    <div class="carousel">
      <div class="slides" :style="slideStyle">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: currentIndex === index }"
        >
          <img :src="slide.image" :alt="slide.title" />
        </div>
      </div>
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
      <div class="indicators">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
    <!-- 内容展示部分 -->
    <div class="content">
      <div class="section1">
        <div class="title">
          <h2>香港理工大学</h2>
          <h2>合肥技术创新研究院</h2>
        </div>
        <div class="introduction">
          <p>
            香港理工大学合肥技术创新研究院由香港理工大学与合肥市庐阳区人民政府携手共建，于2025年8月正式落地庐阳大数据产业园。研究院通过学术交流、技术研发、成果转化等各种形式，聚焦重点领域、整合优势创新资源，致力于培养具有国际视野的卓越工程师和高水平应用型创新创业人才，打造面向未来发展、紧密对接产业需求的科技创新高地和新兴产业孵化基地，为深化合港两地创新合作提供持续动力。
          </p>
        </div>
      </div>
      <!-- 研究中心 -->
      <div class="section1">
        <div class="content--section__title">
          <div>研究中心</div>
          <div class="conmon_style_link">
            <RouterLink to="/research/center/2">查看更多 >></RouterLink>
          </div>
        </div>
        <div class="department">
          <div
            class="item"
            v-for="item in stationInfoList"
            :key="item.id"
            @click="goToCenter('center', item.id)"
          >
            <img :src="item.icon" :alt="`dep0${item.id}`" />
            <h3>{{ item.name }}</h3>
          </div>
        </div>
      </div>
      <div class="section2" id="common_style">
        <div class="hexintuandui">
          <div class="content--section__title">
            <div>核心团队</div>
            <div class="conmon_style_link">
              <RouterLink to="/hexintuandui">查看更多 >></RouterLink>
            </div>
          </div>
          <div class="member_list_container">
            <!-- <button class="prev" @click="prevProfessorSlide">❮</button> -->
            <div
              class="member_list"
              :style="{ transform: `translateX(${professorScrollPosition}px)` }"
            >
              <div
                v-for="professor in professors"
                :key="professor.id"
                class="member_item"
                @click="navigateToProfessor(professor.id)"
              >
                <img :src="professor.img" :alt="professor.name" />
                <div class="member">
                  <div class="member_title">{{ professor.title }}</div>
                  <div class="member_info">{{ professor.info }}</div>
                </div>
              </div>
            </div>
            <!-- <button class="next" @click="nextProfessorSlide">❯</button> -->
          </div>
        </div>
      </div>
      <!-- 专利证书 -->
      <div class="section3" id="common_style">
        <div class="content--section__title">
          <div>专利证书</div>
          <!-- <div class="conmon_style_link">
            <RouterLink to="/hexintuandui">查看更多 >></RouterLink>
          </div> -->
        </div>
        <div class="patent_list">
          <div
            class="patent_container"
            :style="{ transform: `translateX(${scrollPosition}px)` }"
          >
            <div
              v-for="(patent, index) in duplicatedPatents"
              :key="index"
              class="patent_item"
              @mouseenter="isHovering = true"
              @mouseleave="isHovering = false"
            >
              <img :src="patent.image" :alt="patent.alt" />
              <div class="overlay_content" v-show="isHovering">
                <h3>专利证书</h3>
                <p>专利编号: {{ patent.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="section4" id="common_style">
        <h2>新闻动态</h2>
        <span></span>
        <div class="news_list">
          <div v-for="newitem in news" :key="newitem.id" class="news_item" @click="goToCenter('newsdetails',newitem.id)">
            <div class="news">
              <p class="news_date">{{newitem.date}}</p>
              <div class="news_day">{{newitem.day}}</div>
              <div class="news_content">
                <div class="news_title">
                  <RouterLink :to="{ name: 'newsdetails', params: { id: newitem.id }}">{{ newitem.title }}</RouterLink>
                </div>
                <p>{{ newitem.info }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="conmon_style_link">
          <i class="iconfont icon-play"></i>
          <RouterLink to="/news">查看更多</RouterLink><span></span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
/* 轮播图部分 */
.container .carousel {
  position: relative;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel .prev,
.carousel .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 35px;
  z-index: 10;
  width: 40px;
  height: 60px;
}

.carousel .prev {
  left: 10px;
}

.carousel .next {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.indicators span.active {
  background: white;
}

/* 文字内容展示部分 */
.container .content {
  margin-top: 50px;
  max-width: 1200px;
}

.container .content .section1 {
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}

.container .content .section1 h2 {
  display: inline-block;
  font-size: 28px;
  font-weight: bold;
}
.container .content .section1 .title {
  position: relative;
}
.container .content .section1 .title::after {
  content: "";
  position: absolute;
  width: 55px;
  height: 2px;
  background: #aa0235;
  bottom: -8px;
  left: 50%;
  margin-left: -28px;
}
.container .content .section1 .title :nth-child(1) {
  color: #aa0235;
}

.container .content .section1 .title :nth-child(2) {
  color: #000;
}

.container .content .section1 .introduction p {
  width: 1200px;
  display: flex;
  text-align: left;
  line-height: 30px;
  margin-top: 25px;
  color: rgb(89, 89, 89);
  font-size: 16px;
  margin-bottom: 50px;
}

.container .content .section1 .department {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.container .content .section1 .department .item {
  width: 25%;
  margin: 15px 0;
  cursor: pointer;
}

.container .content .section1 .department .item img {
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  transform-style: preserve-3d;
  will-change: transform;
}

.container .content .section1 .department h3 {
  font-weight: normal;
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
}

.container .content .section1 .department .item:hover img {
  transform: scale(1.1) translateZ(50px);
}

.container .content .section1 .department .item:hover h3 {
  color: #9f2843;
}

.container .content .section2 {
  width: 100%;
  min-width: 1200px;
  min-height: 560px;
  background-size: cover;
  background-position: center;
  margin-top: 80px;
}

.content--section__title {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 24px;
  margin-bottom: 20px;
  padding-left: 20px;
  font-weight: bold;
}
.content--section__title::before {
  content: "";
  width: 6px;
  height: 100%;
  background: #aa0235;
  position: absolute;
  left: 0;
  top: 0;
}

.container .content .section2 .hexintuandui {
  padding: 25px 0 0 0;
}

.container .content .section2 .hexintuandui h2 {
  font-size: 40px;
  color: #fff ;
  text-align: center;
}

.container .content .section2 .hexintuandui .member_list_container {
  width: 1200px;
  position: relative;
  min-height: 400px;
}

.container .content .section2 .hexintuandui .member_list_container .prev,
.container .content .section2 .hexintuandui .member_list_container .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
  width: 40px;
  height: 60px;
}

.container .content .section2 .hexintuandui .member_list_container .prev {
  left: 10px;
}

.container .content .section2 .hexintuandui .member_list_container .next {
  right: 10px;
}

.container .content .section2 .hexintuandui .member_list {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.5s ease;
  will-change: transform;
}

.container .content .section2 .hexintuandui .member_list .member_item {
  padding: 0 4px;
  color: #fff;
  text-align: center;
  position: relative;
  perspective: 1000px;
}

.container .content .section2 .hexintuandui .member_list .member_item .member {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 10px;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.container .content .section2 .hexintuandui .member_list .member_item img {
  width: 256px;
  height: 320px;
  object-fit: cover;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateZ(0);
  transform-style: preserve-3d;
  will-change: transform;
}

.container
  .content
  .section2
  .hexintuandui
  .member_list
  .member_item:hover
  img {
  transform: scale(1.1) translateZ(50px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.container
  .content
  .section2
  .hexintuandui
  .member_list
  .member_item
  .member_title {
  font-size: 18px;
}

.container
  .content
  .section2
  .hexintuandui
  .member_list
  .member_item
  .member_info {
  line-height: 1.8;
  overflow: hidden;
  font-size: 14px;
}

.container .content .conmon_style_link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}

.container .content .conmon_style_link a {
  text-decoration: none;
  color: #9f2843;
  margin-left: 15px;
}

.container .content .conmon_style_link a:hover {
  color: rgb(89, 89, 89);
}

.container .content .section3 {
  text-align: center;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container .content #common_style h2 {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  line-height: 1;
}

.container .content #common_style span {
  display: inline-block;
  width: 30px;
  height: 1.5px;
  background: rgb(156, 154, 154);
  margin-top: 15px;
}

.container .content .section3 .patent_list {
  width: 1200px;
  overflow: hidden;
  margin-top: 30px;
  position: relative;
  min-height: 450px;
}

.container .content .section3 .patent_container {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  will-change: transform;
}

.container .content .section3 .patent_item {
  flex: 0 0 300px;
  height: 400px;
  padding: 0 4px;
  position: relative;
}

.container .content .section3 .patent_item img {
  width: 100%;
  height: 100%;
  border: 1.5px solid #c4c2c2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container .content .section3 .overlay_content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.5s ease;
  margin: 0 4px;
}

.container .content .section3 .patent_item:hover .overlay_content {
  opacity: 1;
}

.container .content .section4 {
  text-align: center;
  margin: 50px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container .content .section4 .news_list {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
}

.container .content .section4 .news_list .news_item {
  width: 48%;
  margin-bottom: 30px;
  text-align: left;
  position: relative;
  cursor: pointer;
}

.container .content .section4 .news_item .news p {
  font-size: 12px;
  color: #666;
}

.container .content .section4 .news_item .news .news_date {
  font-size: 12px;
  color: #000;
  padding-left: 30px;
}

.container .content .section4 .news_item .news .news_day {
  display: block;
  width: 40px;
  height: 40px;
  background: #9f2843;
  position: absolute;
  top: 40px;
  left: -28px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
}

.container .content .section4 .news_item .news_content {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 10px;
  border: 1.5px solid #c4c2c2;
  padding: 15px 30px;
  border-radius: 2px;
  height: 150px;
}

.container .content .section4 .news_item .news_content .news_title a {
  color: #333;
  font-weight: bolder;
  font-size: 17px;
}

.container .content .section4 .news_item .news_content .news_title a:hover {
  color: #9f2843;
  text-decoration: underline;
}
/*==============移動端樣式==============*/
.mobile .content--section__title {
  width: 100% ;
  padding: 0 ;
  font-size: 20px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* 左侧标题容器 */
.mobile .content--section__title > div:first-child {
  position: relative;
  padding-left: 12px; /* 色条宽度 + 间距 */
  font-weight: bold;
  color: #000;
}

.mobile .content--section__title > div:first-child::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #aa0235;
}

/* 右侧“查看更多” */
.mobile .conmon_style_link {
  font-size: 14px;
  white-space: nowrap;
}

.mobile .conmon_style_link a {
  color: #9f2843;
  text-decoration: none;
}

.mobile .conmon_style_link a:hover {
  color: #666;
}

/* Section 内容容器统一内边距*/

.mobile .container .content {
  margin-top: 20px;
  padding: 0 16px;
  max-width: 100% ;
}

/* Section1：研究院介绍 & 研究中心 */

.mobile .content .section1 {
  text-align: left ;
  align-items: flex-start ;
  width: 100%;
}

.mobile .content .section1 .title {
  text-align: left;
  margin-bottom: 12px;
}

.mobile .content .section1 .title h2 {
  font-size: 22px;
  line-height: 1.3;
}

.mobile .content .section1 .title::after {
  display: none; /* 移动端用左侧色条替代居中横线 */
}

.mobile .content .section1 .introduction p {
  width: 100% ;
  text-align: justify;
  font-size: 15px;
  line-height: 1.6;
  margin: 12px 0 24px 0;
  color: #595959;
}

/* 研究中心 */
.mobile .content .section1 .department {
  width: 100% ;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0px;
  padding:0 15px;
  gap: 16px;
}

.mobile .content .section1 .department .item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.mobile .content .section1 .department .item:last-child {
  border-bottom: none;
}

.mobile .content .section1 .department img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.mobile .content .section1 .department h3 {
  font-size: 16px;
  margin: 0;
  color: #333;
}

.mobile .content .section1 .department .item:hover h3 {
  color: #9f2843;
}
/*所有 section 标题统一适配 */
  .mobile .content--section__title > div:first-child {
    position: relative;
    padding-left: 12px;
    font-weight: bold;
    color: #000;
  }

  .mobile .content--section__title > div:first-child::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: #aa0235;
  }

  .mobile .conmon_style_link {
    font-size: 14px;
    white-space: nowrap;
  }

  .mobile .conmon_style_link a {
    color: #9f2843;
    text-decoration: none;
  }

  .mobile .conmon_style_link a:hover {
    color: #666;
  }

  /* 内容容器统一内边距 */
  .mobile .container .content {
    margin-top: 20px;
    padding: 0 16px;
    max-width: 100% ;
  }

  /* Section1：研究院介绍 & 研究中心 */
  .mobile .content .section1 {
    text-align: left ;
    align-items: flex-start ;
  }

  .mobile .content .section1 .title {
    text-align: left;
    margin-bottom: 12px;
  }

  .mobile .content .section1 .title h2 {
    font-size: 22px;
    line-height: 1.3;
  }

  .mobile .content .section1 .title::after {
    display: none;
  }

  .mobile .content .section1 .introduction p {
    width: 100% ;
    text-align: justify;
    font-size: 15px;
    line-height: 1.6;
    margin: 12px 0 24px 0;
    color: #595959;
  }

  /* 研究中心 */
  .mobile .content .section1 .department {
    width: 100% ;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .mobile .content .section1 .department .item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .mobile .content .section1 .department .item:last-child {
    border-bottom: none;
  }

  .mobile .content .section1 .department img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 6px;
    flex-shrink: 0;
  }
  .mobile .content .section1 .department .item{
    margin: 0 auto;
  }
  .mobile .content .section1 .department h3 {
    font-size: 16px;
    margin: 0;
    color: #333;
  }

  .mobile .content .section1 .department .item:hover h3 {
    color: #9f2843;
  }

 /* Section2：核心团队 - 移动端适配 */
.mobile .content .section2 {
  width: 100% ;
  min-width: 100% ;
  min-height: auto ; /* 修复：移除固定高度 */
  margin-top: 0px ;
  height: auto ; /* 修复：高度自适应 */
}

.mobile .content .section2 .hexintuandui .member_list_container {
  width: 100% ;
  min-height: auto ; /* 修复：移除固定高度 */
  position: relative ;
  height: auto ; /* 修复：高度自适应 */
}

.mobile .content .section2 .hexintuandui .member_list {
  position: relative ;
  left: 0 ;
  top: 0 ;
  transform: none ;
  display: grid ;
  grid-template-columns: repeat(2, 1fr) ;
  gap: 16px ;
  width: 100% ;
  height: auto ; /* 修复：高度自适应 */
}

.mobile .content .section2 .hexintuandui .member_list .member_item {
  width: 100% ;
  padding: 0 ;
  margin-bottom: 16px ;
  position: relative ;
  overflow: hidden ;
  height: auto ; /* 修复：高度自适应 */
}

.mobile .content .section2 .hexintuandui .member_list .member_item img {
  width: 100% ;
  height: 200px ;
  object-fit: cover ;
  display: block ;
}

.mobile .content .section2 .hexintuandui .member_list .member_item .member {
  position: absolute ;
  bottom: 0 ;
  left: 0 ;
  width: 100% ;
  min-height: 92.6px ;
  padding: 12px 8px ;
  background: rgba(0, 0, 0, 0.7) ;
  color: #fff ;
  box-sizing: border-box ;
}

/* 确保所有相关元素高度自适应 */
.mobile .content .section2 * {
  height: auto ;
  min-height: auto ;
}
  /* Section3：专利证书 */
  .mobile .content .section3 {
    margin: 20px 0 ;
    width: 100% ;
    text-align: left ;
    align-items: flex-start ;
  }

  .mobile .content .section3 .patent_list {
    width: 100% ;
    overflow: hidden;
    position: relative;
    margin-top: 20px;
    min-height: auto;
  }

  .mobile .content .section3 .patent_container {
    display: flex;
    position: relative;
    will-change: transform;
    align-items: flex-start;
  }

  .mobile .content .section3 .patent_item {
    flex: 0 0 160px;
    height: 160px;
    padding: 0 6px;
    box-sizing: border-box;
  }

  .mobile .content .section3 .patent_item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
  }

  .mobile .overlay_content {
    display: none ;
  }

</style>
