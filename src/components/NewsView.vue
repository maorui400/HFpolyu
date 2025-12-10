<script setup>
import { ref, computed } from "vue";
import pageBanner from "./banners/page-banner.vue";
const mainTitle = ref("新闻动态");
import { newsInfo } from "./webMockInfos";
import new_01 from "../assets/images/news/new_01.jpg";
import new_02 from "../assets/images/news/new_02.jpg";
import new_03 from "../assets/images/news/new_03.jpg";

const news_List = ref([
  {
    id: 1,
    title: "香港理工大学合肥技术创新研究院揭牌投运活动于12月4日正式举行",
    date: "2024-12-04",
    img: new_01,
  },
  {
    id: 2,
    title: "具身智能引领产业变革，智能机器人与机电一体化研究中心抢先布局",
    date: "2022-05-15",
    img: new_02,
  },
  {
    id: 3,
    title: "香港理工大学校董会主席林大辉博士一行到访南京开展新春团拜",
    date: "2022-05-15",
    img: new_03,
  },
]);

// Pagination variables
const itemsPerPage = 8;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(newsInfo.value.length / itemsPerPage)
);

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return newsInfo.value.slice(start, start + itemsPerPage);
});

// Pagination methods
const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return; // Validate page number
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const firstPage = () => {
  currentPage.value = 1;
};

const lastPage = () => {
  currentPage.value = totalPages.value;
};
</script>  

<template>
  <div class="container">
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content">
      <div class="crumbs">
        <i class="iconfont icon-Homehomepagemenu"></i>
        <span>您当前的位置：</span>
        <RouterLink to="/news">新闻动态</RouterLink>
      </div>
      <div class="news-list">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
          class="news-item"
          @click="$router.push('/newsdetails/' + item.id)"
        >
          <img :src="item.coverImg" alt="" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.date }}</p>
        </div>
      </div>
      <div v-if="totalPages > 1" class="pagination">
        <!-- <button @click="firstPage" :disabled="currentPage === 1">First</button> -->
        <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
        <span v-for="page in totalPages" :key="page">
          <button
            @click="goToPage(page)"
            :class="{ active: currentPage === page }"
          >
            {{ page }}
          </button>
        </span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          下一页
        </button>
        <!-- <button @click="lastPage" :disabled="currentPage === totalPages">
          Last
        </button> -->
      </div>
    </div>
  </div>
</template>  

<style scoped>
.container {
  width: 1180px;
}
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
  margin-top: 30px;
}
.news-item {
  width: 48.5%;
  margin-bottom: 40px;
  cursor: pointer;
}
.news-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.news-item h3 {
  font-size: 18px;
  color: #333;
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
  width: 100%; /* 确保有明确的宽度限制 */
}
.news-item p {
  font-size: 14.7px;
  color: #999;
}
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0 50px 0;
}
.pagination button {
  margin: 0 5px;
  padding: 10px 15px;
  background-color: #a02337;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
/*当前页特别标注*/
.pagination .active {
  font-weight: bold;
  text-decoration: underline;
}

/*==============移動端樣式==============*/
.mobile .container {
  width: 100%;
}
.mobile .content {
  width: 100%;
  padding: 15px;
}
.mobile .crumbs {
  margin-top: 0px;
}
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
}
.mobile .news-item {
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
}
.mobile .news-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>  