<script setup>  
import { ref, computed } from "vue";  
import new_01 from "../assets/images/news/new_01.jpg";  
import new_02 from "../assets/images/news/new_02.jpg";  
import new_03 from "../assets/images/news/new_03.jpg";  
import new_04 from "../assets/images/news/new_04.jpg";  
import new_05 from "../assets/images/news/new_05.jpg";  
import new_06 from "../assets/images/news/new_06.jpg";  
import new_07 from "../assets/images/news/new_07.jpg";  
import new_08 from "../assets/images/news/new_08.jpg";  
import new_09 from "../assets/images/news/new_09.jpg";  
import new_10 from "../assets/images/news/new_10.png";  
import new_11 from "../assets/images/news/new_11.jpg";  
import new_12 from "../assets/images/news/new_12.jpeg";  


const news_List = ref([  
  {  
    id: 1,  
    title: "CNN报道中国人形机器人发展，港理大南京研究院院长张丹教授权威解读行业机遇与挑战",  
    date: "2022-05-15",  
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
  {  
    id: 4,  
    title: "南京（香港）科技创新环境推介会：香港理工大学南京研究院的交流新篇",  
    date: "2022-05-15",  
    img: new_04,  
  },  
  {  
    id: 5,  
    title: "香港理工大学南京研究院行政办到访石城实验室参观交流",  
    date: "2022-05-15",  
    img: new_05,  
  },  
  {  
    id: 6,  
    title: "南京市新年第一会召开 香港理工大学南京研究院获市级资助",  
    date: "2022-05-15",  
    img: new_06,  
  },  
  {  
    id: 7,  
    title: "港理大南京研究院院长张丹教授受邀2024世界智能制造大会做主题报告",  
    date: "2022-05-15",  
    img: new_07,  
  },  
  {  
    id: 8,  
    title: "香港理工大学校董会主席林大辉博士率考察团访问南京",  
    date: "2022-05-15",  
    img: new_08,  
  },  
  {  
    id: 9,  
    title: "全国政协委员、香港理工大学校董会主席林大辉博士一行到访苏豪控股集团",  
    date: "2022-05-15",  
    img: new_09,  
  },  
  {  
    id: 10,  
    title: "张丹院士：具身智能或将成为明年科技界的重头戏",  
    date: "2022-05-15",  
    img: new_10,  
  },  
  {  
    id: 11,  
    title: "张丹院士：无人机如何变成具身智能机器人 在海上稳稳降落",  
    date: "2022-05-15",  
    img: new_11,  
  },  
  {  
    id: 12,  
    title: "香港理工大学，我和南京一起闯天涯",  
    date: "2022-05-15",  
    img: new_12,  
  },  
]);  

// Pagination variables  
const itemsPerPage = 8;  
const currentPage = ref(1);  

const totalPages = computed(() => Math.ceil(news_List.value.length / itemsPerPage));  

const paginatedItems = computed(() => {  
  const start = (currentPage.value - 1) * itemsPerPage;  
  return news_List.value.slice(start, start + itemsPerPage);  
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
    <div class="banner">  
      <img src="../assets/images/banner/news_banner.png" alt="banner" />  
    </div>  
    <div class="content">  
      <div class="crumbs">  
        <i class="iconfont icon-Homehomepagemenu"></i>  
        <span>您当前的位置：</span>  
        <RouterLink to="/news">新闻中心</RouterLink>  
      </div>  
      <div class="news-list">  
        <div v-for="item in paginatedItems" :key="item.id" class="news-item" @click="$router.push('/newsdetails/' + item.id)">  
          <img :src="item.img" alt="">  
          <h3>{{item.title}}</h3>  
          <p>{{item.date}}</p>  
        </div>  
      </div>  
      <div class="pagination">  
        <button @click="firstPage" :disabled="currentPage === 1">First</button>  
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>  
        <span v-for="page in totalPages" :key="page">  
          <button  
            @click="goToPage(page)"  
            :class="{ active: currentPage === page }"  
          >  
            {{ page }}  
          </button>  
        </span>  
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>  
        <button @click="lastPage" :disabled="currentPage === totalPages">Last</button>  
      </div>  
    </div>  
  </div>  
</template>  

<style scoped>  
.news-list {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: space-between;  
  width: 1200px;  
  margin-top: 30px;  
}  
.news-item {  
  width: 24%;  
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
  background-color: #A02337;  
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
.mobile .content{
  width: 100%;
  padding: 15px;
}
.mobile .crumbs{
  margin-top: 0px;
}
 .news-list {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: space-between;  
  width: 100%;  
  margin-top: 5px;
}  
.mobile .news-item {  
  width: 48.5%;  
  margin-bottom: 20px;  
  cursor: pointer;
}  
.mobile .news-item img {  
  width: 100%;  
  height:150px;  
  object-fit: cover;  
}  

</style>  