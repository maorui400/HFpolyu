<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 动态导入所有图片
const centerImages01 = ref([]);
const centerImages02 = ref([]);
const centerImages03 = ref([]);
const centerImages04 = ref([]);

// 导入 RC 文件夹中的图片
const centerModules01 = import.meta.glob('../assets/images/researchcenter/RC01/*.{png,jpg}', { eager: true });
Object.values(centerModules01).forEach((module, index) => {
  centerImages01.value.push(module.default);
});
const centerModules02 = import.meta.glob('../assets/images/researchcenter/RC02/*.{png,jpg}', { eager: true });
Object.values(centerModules02).forEach((module, index) => {
  centerImages02.value.push(module.default);
});
const centerModules03 = import.meta.glob('../assets/images/researchcenter/RC03/*.{png,jpg,gif}', { eager: true });
Object.values(centerModules03).forEach((module, index) => {
  centerImages03.value.push(module.default);
});
const centerModules04 = import.meta.glob('../assets/images/researchcenter/RC04/*.{png,jpg}', { eager: true });
Object.values(centerModules04).forEach((module, index) => {
  centerImages04.value.push(module.default);
});

console.log('RC01 Images:', centerImages01.value);

// 计算属性
const centerImageList01 = computed(() => centerImages01.value);
const centerImageList02 = computed(() => centerImages02.value);
const centerImageList03 = computed(() => centerImages03.value);
const centerImageList04 = computed(() => centerImages04.value);

// 路由id匹配数据信息
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

// 研究中心信息
const centerInfo = ref([
  {
    id: 1,
    name: '生物医疗精密传感器研究所',
    intro:
      '研究中心将聚焦生物医疗精密传感器技术的研发与产业化，重点突破可穿戴健康监测、无创医学影像、神经调控等前沿领域，深度融合材料科学、电子工程与生物医学技术，构建‘基础研究-技术转化-产业孵化’的全链条创新体系。通过深化政产学研合作，整合香港理工大学尖端科研资源与合肥市产业优势，致力打造国际一流的生物传感技术研发高地，为皖港两地及长三角地区培育高端医疗器械人才，推动精准医疗产业创新发展。',
    direction: [
      '可穿戴唾液葡萄糖传感器',
      '蛋白标志物的便携式测试盒',
      '医用高频超声阵列成像系统研发',
      '无创功能超声成像系统',
      '超声神经调控系统',
    ],
    developPlan: [
      {
        item: '产学研合作',
        content:
          '搭建高校与企业桥梁，培养面向社会需求的生物医疗科技领域创新创业人才，打造国内一流的产学研合作平台',
      },
      {
        item: '科技产业发展',
        content:
          '围绕合肥政府与企业切实需求，推动生物传感器及医疗器械等尖端技术发展，助力产业发展',
      },
      {
        item: '公共技术服务平台',
        content:
          '搭建生物医疗传感器公共技术服务平台，为本地企业提供研发支持与中试服务，降低技术产业化门槛。',
      },
    ],
    img: centerImageList01,
  },
  {
    id: 2,
    name: '飞行器与低空导航研发中心',
    intro:
      '研究中心将聚焦无人机安全飞行技术与低空监控系统的创新研发，联合当地产业领军企业，针对城市复杂环境开展高精度定位、智能避障及多源感知融合技术攻关。通过政产学研协同创新，推动无人机在物流配送、安全巡检、应急救援等场景的规模化应用，同时构建‘5G-A+雷达+光电’一体化低空监控平台，实现城市低空态势智能感知与风险预警，为智慧城市建设和低空经济发展提供核心技术支撑，培育高端无人机与低空经济领域专业人才。',
    direction: ['空基平台与多无人机协作系统：应急装备'],
    developPlan: [
      {
        item: '推进关键技术创新',
        content:
          '将面向城市复杂环境中无人机安全飞行与低空监控技术的需求，重点攻关城市无人机高精度定位与动态避障技术创新。',
      },
      {
        item: '加速重点应用落地',
        content:
          '将联合当地企业，加速无人机在物流配送、城市安全巡检和应急救援等场景的示范应用，推动低空经济产业化落地。',
      },

    ],
    img: centerImageList02,
  },
  {
    id: 3,
    name: '北斗应用技术研发中心',
    intro:
      '北斗应用技术研发中心将致力于高精度导航定位与GNSS遥感技术的创新研究，重点突破水文监测、空域安全等领域的核心技术，积极联合当地政府部门及产业链企业构建产学研协同平台，推动北斗技术在智慧城市、飞行安全、防灾减灾等场景的示范应用，为合肥及长三角地区培育空天信息领域专业人才，助力国家卫星导航产业高质量发展。',
    direction: [
      'GNSS-R水平面监测站',
      'GNSS信号质量监测及干扰源定位系统',
    ],
    developPlan: [
      {
        item: '产学研合作',
        content: '联合当地大学、研究院及行业龙头企业，共建GNSS技术联合实验室，推动协同创新。',
      },
      {
        item: '关键技术创新',
        content: '研发高精度定位、环境监测与干扰源定位技术，重点解决复杂多变环境下的适用性问题。',
      },
      {
        item: '成果转化落地',
        content: '推动泛在定位、水文监测和航空安全系统示范应用，形成可复制的北斗产业化解决方案。',
      },
    ],
    img: centerImageList03,
  },
  {
    id: 4,
    name: '行星遥感与机器视觉研发中心',
    intro:
      '本中心聚焦深空探测与航天科普产业化，依托香港理工大学国际领先的遥感技术，联合当地研究院及科研产业机构，开展行星科学、AI视觉与航天教育产品研发，推动空天信息技术在科普、安防等领域的创新应用。',
    direction: [
      '“月球 / 火星着陆区虚拟实境”VR 产品',
      '“AI + 航天” 互动教育产品'
    ],
    developPlan: [
      {
        item: '产学研结合',
        content: '与深空探测实验室共建联合实验平台，协同开展行星遥感算法与智能视觉技术攻关。',
      },
      {
        item: '科技产业发展',
        content:
          '开发"AI+航天"互动教育产品，培育商业航天与智能视觉新业态，助力空天信息产业集群发展。',
      },
    ],
    img: centerImageList04,
  },
]);

// 根据 id 动态匹配研究中心信息
const showInfo = computed(() => {
  return centerInfo.value.find((item) => item.id === id) || {};
});
console.log('Show Infor:', showInfo.value.img);
// 上一条信息
const prevInfo = computed(() => {
  const currentIndex = centerInfo.value.findIndex((item) => item.id === id);
  return currentIndex > 0 ? centerInfo.value[currentIndex - 1] : null;
});

// 下一条信息
const nextInfo = computed(() => {
  const currentIndex = centerInfo.value.findIndex((item) => item.id === id);
  return currentIndex < centerInfo.value.length - 1
    ? centerInfo.value[currentIndex + 1]
    : null;
});

// 当前研究中心的图片
const currentCenterImages = computed(() => {
  const centerImg = showInfo.value?.img || [];
  console.log('Current Center Images:', centerImg);
  return centerImg.map((img, index) => ({
    id: index,
    large: img,
    thumb: img,
  }));
});

// 当前显示的图片 - 初始化为第一张图片
const currentImage = ref(currentCenterImages.value[0] || null);
console.log('Current Image:', currentImage.value);
const currentIndex = ref(0);

// 设置当前显示图片
const setCurrentImage = (image) => {
  currentImage.value = image;
  currentIndex.value = currentCenterImages.value.findIndex((img) => img.id === image.id);
};

// 缩略图分页
const thumbStartIndex = ref(0);
const thumbsPerPage = 4;

// 左右按钮状态
const canPrev = computed(() => currentIndex.value > 0);
const canNext = computed(() => currentIndex.value < currentCenterImages.value.length - 1);

// 缩略图导航函数
const nextThumbs = () => {
  if (canNext.value) {
    currentIndex.value++;
    currentImage.value = currentCenterImages.value[currentIndex.value];
  }
};

const prevThumbs = () => {
  if (canPrev.value) {
    currentIndex.value--;
    currentImage.value = currentCenterImages.value[currentIndex.value];
  }
};

// 当前可见的缩略图
const visibleThumbs = computed(() => {
  return currentCenterImages.value.slice(
    thumbStartIndex.value,
    Math.min(thumbStartIndex.value + thumbsPerPage, currentCenterImages.value.length)
  );
});

// 跳转到指定id的页面
const navigateToCenter = (centerId) => {
  router.push(`/research/center/${centerId}`);
};
</script>

<template>
  <div class="crumbs">
    <RouterLink to="/research">研究中心</RouterLink>
    <span> > {{ showInfo.name }}</span>
  </div>
  <div class="center_info">
    <div class="center_pic">
      <!-- 主图 -->
      <div class="main-image-container" v-if="currentImage">
        <img :src="currentImage.large" alt="Main display" class="main-image" />
      </div>
    
      <!-- 缩略图导航 -->
      <div class="thumbnail-navigation" v-if="currentCenterImages.length > 0">
        <button
          class="nav-button"
          @click="prevThumbs"
          :disabled="!canPrev"
          :class="{ disabled: !canPrev }"
        >
          <i class="iconfont icon-left"></i>
        </button>
    
        <div class="thumbnail-container">
          <div
            v-for="image in visibleThumbs"
            :key="image.id"
            @click="setCurrentImage(image)"
            :class="{ 'thumbnail-active': image.id === currentImage?.id }"
            class="thumbnail-wrapper"
          >
            <img :src="image.thumb" alt="Thumbnail" class="thumbnail" />
            <div
              v-if="image.id === currentImage?.id"
              class="thumbnail-indicator"
            ></div>
          </div>
        </div>
    
        <button
          class="nav-button"
          @click="nextThumbs"
          :disabled="!canNext"
          :class="{ disabled: !canNext }"
        >
          <i class="iconfont icon-right1"></i>
        </button>
      </div>
    </div>
    <div class="center_text">
      <div class="center_title">
        <h3>{{ showInfo.name }}</h3>
        <p>{{ showInfo.intro }}</p>
      </div>
      <div class="research_direction">
        <h4>产业转化方向</h4>
        <p v-for="(item, index) in showInfo.direction" :key="index">
          <span class="point"></span> {{ item }}
        </p>
      </div>
      <div class="develop_plan">
        <h4>在合肥发展计划</h4>
        <div v-for="(item, index) in showInfo.developPlan" :key="index">
          <p><span class="point"></span> {{ item.item }}</p>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="options">
    <div class="next_previous">
      <p v-if="prevInfo">
        上一个：
        <RouterLink :to="`/research/center/${prevInfo.id}`">{{
          prevInfo.name
        }}</RouterLink>
      </p>
      <p v-else>上一个： 没有了</p>

      <p v-if="nextInfo">
        下一个：
        <RouterLink :to="`/research/center/${nextInfo.id}`">{{
          nextInfo.name
        }}</RouterLink>
      </p>
      <p v-else>下一个： 没有了</p>
    </div>
    <button @click="$router.go(-1)">返回</button>
  </div>
</template>

<style scoped>
.center_info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  gap: 30px;
  width: 1200px;
  height: 100%;
}

.center_pic {
  width: 478px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-image-container {
  width: 417px;
  height: 312px;
  margin-bottom: 15px;
  position: relative;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.thumbnail-navigation {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.thumbnail-container {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 10px;
  margin: 0 10px;
}

.nav-button {
  border: 1px solid gainsboro;
  background: #fff;
  cursor: pointer;
  padding: 20px 5px;
  transition: all 0.3s;
}

.nav-button:hover:not(.disabled) {
  background: #ddd;
}

.nav-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button .iconfont {
  font-size: 24px;
}

.thumbnail-wrapper {
  position: relative;
  width: 80px;
  height: 60px;
  flex-shrink: 0;
}

.thumbnail-indicator {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid black;
  z-index: 1;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail:hover {
  opacity: 0.8;
}

.thumbnail-active .thumbnail {
  border: 1px solid #333;
}

.center_info .center_text {
  width: calc(100% - 478px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}

.center_info .center_text .center_title h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.center_info .center_text .center_title p {
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}

.center_info .center_text h4 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.center_info .center_text .research_direction {
  text-align: left;
}

.center_info .center_text .research_direction p {
  font-size: 14px;
  color: #000;
  margin-bottom: 10px;
}

.center_info .center_text .point {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #000;
  vertical-align: middle;
  margin-left: 10px;
}

.center_info .center_text .develop_plan p {
  font-size: 14px;
  color: #000;
  margin: 10px 0;
}

.center_info .center_text .develop_plan span {
  font-size: 14px;
  color: #000;
  margin-bottom: 10px;
}
</style>