<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const searchKeyword = ref("");

// 从路由query参数中获取搜索词
onMounted(() => {
  if (route.query.query) {
    searchKeyword.value = route.query.query;
  }
});

// 处理搜索功能
const handleSearch = () => {
  const keyword = searchKeyword.value.trim();
  
  if (!keyword) {
    alert("请输入搜索内容");
    return;
  }
  
  // 跳转到搜索结果页，携带搜索关键词
  router.push({
    path: "/searchresults",
    query: { query: keyword }
  });
};

// 添加回车键搜索
const handleKeyUp = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};
</script>

<template>
  <div class="container">
    <div class="content" :key="route.query.query">
      <div class="search-input">
        <p>站内搜索</p>
        <div class="input-container">
          <input 
            type="text" 
            class="inputarea" 
            placeholder="请输入关键字"
            v-model="searchKeyword"
            @keyup="handleKeyUp"
          />
          <i 
            class="iconfont icon-a-searchbar-search" 
            @click="handleSearch"
          ></i>
        </div>
      </div>
      <div class="search-results">
        
        <p >没有匹配的结果</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-input {
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
}

.search-input p {
  font-size: 20px;
  color: #666666;
}

.input-container {
  position: relative;
  width: 800px;
}

.input-container input {
  height: 40px;
  width: 100%;
  padding: 5px 40px 5px 10px;
  outline: none;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
}

.input-container .iconfont {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #a9a9a9;
  cursor: pointer;
  transition: color 0.3s;
}

.input-container .iconfont:hover {
  color: #9f2843; /* 悬停时变色 */
}

.search-results {
  width: 1200px;
  min-height: calc(100vh - 464.8px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>