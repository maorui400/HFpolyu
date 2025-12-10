<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import pageBanner from "./banners/page-banner.vue";
const mainTitle = ref("新闻动态");

// 导入视频
import { newsInfo } from "./webMockInfos";

// 路由id匹配数据信息
const route = useRoute(); // 获取当前路由信息
const id = Number(route.params.id); // 将参数转为数字（因为你的 id 是数字）

// 根据 id 动态匹配教授信息
const showInfo = computed(() => {
  return newsInfo.value.find((item) => item.id === id);
});
// 上一个下一个新闻
// 计算上一个和下一个新闻
const prevNextInfo = computed(() => {
  const currentIndex = newsInfo.value.findIndex((item) => item.id === id);
  return {
    prev: currentIndex > 0 ? newsInfo.value[currentIndex - 1] : null,
    next:
      currentIndex < newsInfo.value.length - 1
        ? newsInfo.value[currentIndex + 1]
        : null,
  };
});
</script>
<template>
  <div class="container">
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content">
      <div class="news_content">
        <h2>{{ showInfo.title }}</h2>
        <p class="date">发布时间：{{ showInfo.date }}</p>
        <div class="main_content">
          <template v-for="(item, index) in showInfo.contentDif" :key="index">
            <p v-if="item.type === 'text'" v-html="item.content"></p>
            <img
              v-else-if="item.type === 'image'"
              :src="item.content"
              :alt="'news image ' + index"
            />
            <video
              v-else-if="item.type === 'video'"
              :src="item.content"
              controls
              class="news-video"
            ></video>
          </template>
        </div>
      </div>

      <div class="options">
        <div class="next_previous">
          <p>
            上一个：
            <span v-if="!prevNextInfo.prev">没有了</span>
            <RouterLink v-else :to="`/newsdetails/${prevNextInfo.prev.id}`">
              {{ prevNextInfo.prev.title }}
            </RouterLink>
          </p>
          <p>
            下一个：
            <span v-if="!prevNextInfo.next">没有了</span>
            <RouterLink v-else :to="`/newsdetails/${prevNextInfo.next.id}`">
              {{ prevNextInfo.next.title }}
            </RouterLink>
          </p>
        </div>
        <button @click="$router.go(-1)">返回</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content .news_content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}
.content .news_content h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  font-weight: bold;
}
.content .news_content p {
  text-align: center;
  font-size: 14px;
  color: #666;
  padding-top: 15px;
}
.content .news_content .main_content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin-top: 50px;
}
.content .news_content .main_content p {
  width: 100%;
  text-align: left;
  text-indent: 2em; /* 首行缩进2个字符 */
  padding: 20px 0;
  font-size: 15px;
  color: #2c3e50;
}
.content .news_content .main_content img {
  width: auto; /* 保持原始宽度比例 */
  max-width: 80%; /* 最大宽度为容器的80% */
  height: auto; /* 保持高度自适应 */
  display: block; /* 避免图片下方有间隙 */
  margin: 20px auto; /* 上下边距20px，水平居中 */
}
.content .news_content .main_content video {
  width: 80%;
}
/*==============移動端樣式==============*/
.mobile .content {
  width: 100%;
  padding: 15px;
}
</style>
