<!-- ChildComponent.vue -->
<template>
  <div class="banner">
    <!-- 装饰用线条 -->
    <div class="line left top"></div>
    <div class="line right top"></div>
    <div class="line left bottom"></div>
    <div class="line right bottom"></div>

    <div class="text">{{mainTitle}}</div>
    <img
      width="1200"
      height="120"
      src="../../assets/images/banner/pattern-bg-red.jpg"
      alt=""
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

// 定义props - 接收父组件传递的数据
const props = defineProps({
  mainTitle: {
    type: String,
    default: "banner",
  },
});
</script>

<style scoped>
.container .banner {
  position: relative;
  max-width: 1200px;
  width: 0 auto;
  height: 120px;
  text-align: center;
  margin-top: 30px;
  overflow: visible;
}
.container .banner .text {
  position: absolute;
  margin-left: -150px;
  margin-top: -32px;
  left: 50%;
  top: 50%;
  width: 300px;
  font-size: 40px;
  font-weight: 300;
  color: #fff;
}
.container .banner .line {
  position: absolute;
  width: 100px;
}
.container .banner .line::before {
  content: "";
  position: absolute;
  width: 50%;
  left: 0;
  height: 1px;
  background: #9f2434;
}
.container .banner .line::after {
  content: "";
  position: absolute;
  width: 50%;
  right: 0;
  height: 1px;
  background: #fff;
}
.container .banner .line.left.top {
  left: -50px;
  top: 0px;
  transform: translate(1px, 0) rotate(45deg);
}
.container .banner .line.left.bottom {
  left: -50px;
  bottom: 0px;
  transform: translate(1px, 0) rotate(-45deg);
}
.container .banner .line.right.top {
  right: -50px;
  top: 0px;
  transform: translate(1px, 0) rotate(135deg);
}
.container .banner .line.right.bottom {
  right: -50px;
  bottom: 0px;
  transform: translate(1px, 0) rotate(225deg);
}
</style>
