<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, getCurrentInstance, nextTick } from "vue";
import centerTeam1 from "../assets/images/researchcenter/RCTeam/team1.png";
import centerTeam2 from "../assets/images/researchcenter/RCTeam/team2.png";
import centerTeam3 from "../assets/images/researchcenter/RCTeam/team3.png";
import centerTeam4 from "../assets/images/researchcenter/RCTeam/team4.png";
import centerTeam5 from "../assets/images/researchcenter/RCTeam/team5.png";
import centerTeam6 from "../assets/images/researchcenter/RCTeam/team6.png";
import centerTeam7 from "../assets/images/researchcenter/RCTeam/team7.png";

import center1Video from "../assets/videos/center1.mp4";
import center2Video from "../assets/videos/center2.mp4";
import center3Video from "../assets/videos/center3.mp4";

// 动态导入所有图片
const centerImages01 = ref([]);
const centerImages02 = ref([]);
const centerImages03 = ref([]);
const centerImages04 = ref([]);
const centerImages05 = ref([]);

// 导入 RC 文件夹中的图片
const centerModules01 = import.meta.glob(
  "../assets/images/researchcenter/RC01/*.{png,jpg}",
  { eager: true }
);

const centerModules02 = import.meta.glob(
  "../assets/images/researchcenter/RC02/*.{png,jpg}",
  { eager: true }
);
const centerModules03 = import.meta.glob(
  "../assets/images/researchcenter/RC03/*.{png,jpg,gif}",
  { eager: true }
);
const centerModules04 = import.meta.glob(
  "../assets/images/researchcenter/RC04/*.{png,jpg}",
  { eager: true }
);
const centerModules05 = import.meta.glob(
  "../assets/images/researchcenter/RC05/*.{png,jpg}",
  { eager: true }
);
Object.values(centerModules01).forEach((module, index) => {
  centerImages01.value.push(module.default);
});

Object.values(centerModules02).forEach((module, index) => {
  centerImages02.value.push(module.default);
});

Object.values(centerModules03).forEach((module, index) => {
  centerImages03.value.push(module.default);
});

Object.values(centerModules04).forEach((module, index) => {
  centerImages04.value.push(module.default);
});
Object.values(centerModules05).forEach((module, index) => {
  centerImages05.value.push(module.default);
});

// 计算属性
const centerImageList01 = computed(() => centerImages01.value);
const centerImageList02 = computed(() => centerImages02.value);
const centerImageList03 = computed(() => centerImages03.value);
const centerImageList04 = computed(() => centerImages04.value);
const centerImageList05 = computed(() => centerImages05.value);

// 路由id匹配数据信息
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

// 研究中心信息
const centerInfo = ref([
  {
    id: 1,
    name: "北斗应用技术研发中心",
    intro:
      "北斗应用技术研发中心将致力于高精度导航定位与GNSS遥感技术的创新研究，重点突破水文监测、空域安全等领域的核心技术，积极联合当地政府部门及产业链企业构建产学研协同平台，推动北斗技术在智慧城市、飞行安全、防灾减灾等场景的示范应用，为合肥及长三角地区培育空天信息领域专业人才，助力国家卫星导航产业高质量发展。",
    direction: ["GNSS-R水平面监测站", "GNSS信号质量监测及干扰源定位系统"],
    teamPhoto: centerTeam6,
    developPlan: [
      {
        item: "产学研合作",
        content:
          "联合当地大学、研究院及行业龙头企业，共建GNSS技术联合实验室，推动协同创新。",
      },
      {
        item: "关键技术创新",
        content:
          "研发高精度定位、环境监测与干扰源定位技术，重点解决复杂多变环境下的适用性问题。",
      },
      {
        item: "成果转化落地",
        content:
          "推动泛在定位、水文监测和航空安全系统示范应用，形成可复制的北斗产业化解决方案。",
      },
    ],
    img: centerImages03,
  },
  {
    id: 2,
    name: "生物医疗精密传感器研发中心",
    intro:
      "研究中心将聚焦生物医疗精密传感器技术的研发与产业化，重点突破可穿戴健康监测、无创医学影像、神经调控等前沿领域，深度融合材料科学、电子工程与生物医学技术，构建‘基础研究-技术转化-产业孵化’的全链条创新体系。通过深化政产学研合作，整合香港理工大学尖端科研资源与合肥市产业优势，致力打造国际一流的生物传感技术研发高地，为合港两地及长三角地区培育高端医疗器械人才，推动精准医疗产业创新发展。",
    direction: [
      "基于有机电化学晶体管，实现高灵敏度、低成本的无创唾液葡萄糖监测设备，推动移动医疗与个性化健康管理发展。",
      "开发便携式蛋白检测技术，建立高效检测方法，提升家庭健康监测及疾病早期筛查的便捷性。",
    ],
    video: center1Video || "",
    teamPhoto: centerTeam1 || "",
    developPlan: [
      {
        item: "技术创新",
        content:
          "开发可穿戴及便携式生物传感器，实现唾液葡萄糖及蛋白标志物的无创检测。",
      },
      {
        item: "成果转化",
        content: "推动技术产业化，深化企业合作，孵化初创公司，加速市场应用。",
      },
      {
        item: "平台建设",
        content:
          "构建高水平科研与服务体系，提升生物传感器的研发效能、转化能力及社会服务价值。",
      },
    ],
    img: centerImageList01,
  },
  {
    id: 3,
    name: "医用超声成像与传感器研发中心",
    intro:
      "医用超声成像与传感研发中心将围绕超声换能器、超声成像算法与超声成像系统三条主线开展协同攻关：在换能器方面聚焦高性能、便携化探头的材料与制造技术；在成像算法方面面向新型阵列与应用场景，发展高分辨率、低噪声的超声成像方法；在系统方面推进超声模拟前端、FPGA/SoC信号处理及与移动终端的融合，形成从核心器件到整机的完整技术链。研发中心将依托合港优势资源，服务医疗超声设备国产化与精准医疗应用，推动高端超声可视化医疗器械在临床各科及基层的落地。",
    direction: [
      "高频超声阵列换能器：基于高性能压电单晶以及低衰减声学功能材料，研发并制备高性能的高频阵列换能器。",
      "高性能超声成像系统：致力于研发高带宽激励信号，高采样率的超声成像系统。",
      "超快超声算法研究：基于研发系统，开展关于高时空分辨率和高成像速度的算法研究工作。",
    ],
    video: center2Video || "",
    teamPhoto: centerTeam2 || "",
    developPlan: [
      {
        item: "深化产学研合作",
        content:
          "基于中心在医用超声换能器和成像系统方面的优势，深化和合肥地区企业和高校研发力量的合作。",
      },
      {
        item: "孵化初创企业",
        content: "转化中心的研究成果，孵化初创企业，提高创新文化。",
      },
      {
        item: "建立服务中心",
        content:
          "充分利用中心研究成果的优势，为合肥地区研究机构提供更多的科研支持。",
      },
    ],
    img: centerImageList05,
  },
  {
    id: 4,
    name: "超声神经调控和超声诊疗中心",
    intro:
      "本中心致力于突破传统医学影像与神经调控技术局限，聚焦两大前沿方向：无创功能超声成像系统与超声神经调控系统。在功能成像方面，研发超高频声波及多模态融合技术，结合AI算法，实现组织功能参数的动态定量评估，推动超声诊断从形态学向功能学跨越。在神经调控方面，利用超声精准无创特性，开发新型神经干预工具，为帕金森病、抑郁症等神经系统疾病提供安全、可逆的治疗方案，并助力脑科学基础研究。通过医工交叉与临床转化，本中心旨在成为国际领先的超声诊疗创新平台，为疾病诊疗和脑机接口等领域提供变革性技术支撑。",
    direction: [
      "无创功能成像领域：研发超高频声波与多模态融合技术，结合AI算法，实现组织氧代谢、弹性模量等功能参数的动态定量评估，推动超声诊断从形态学向功能学的跨越。",
      "超声神经调控领域：利用超声波的精准无创特性，开发新型神经干预工具，为帕金森病、抑郁症等难治性神经系统疾病提供安全、可逆的治疗方案，同时助力脑科学基础研究。",
    ],
    video: center3Video || "",
    teamPhoto: centerTeam3 || "",
    developPlan: [
      {
        item: "深化产学研合作，打造核心技术研发平台",
        content: "联合高校、科研院所和企业，推动超声技术在医疗领域的创新应用。",
      },
      {
        item: "推动成果转化，孵化创新企业",
        content: "加速技术产业化，培育超声医疗领域的高科技初创企业。",
      },
      {
        item: "建立科研服务中心，赋能区域创新",
        content: "为中心技术成果提供开放共享平台，服务本地科研和医疗需求。",
      },
    ],
    img: "",
  },
  {
    id: 5,
    name: "行星遥感与机器视觉研发中心",
    intro:
      "香港理工大学合肥技术创新研究院行星遥感与机器视觉研发中心聚焦两大核心方向：一是产学研协同创新，依托香港理工大学在行星遥感领域的国际领先技术，与合肥及周边科研机构共建联合实验室，推动航天领域的科研合作。二是航天科普教育，通过打造沉浸式航天科普教育平台、开发「AI+航天」互动式教育产品，将香港理工大学的航天资源转化为科普教育内容，与合肥及周边企业合作，推动航天科普教育发展。",
    direction: [
      "“月球 / 火星着陆区虚拟实境”VR 产品",
      "“AI + 航天” 互动教育产品",
    ],
    teamPhoto: centerTeam4,
    developPlan: [
      {
        item: "产学研结合",
        content:
          "与深空探测实验室共建联合实验平台，协同开展行星遥感算法与智能视觉技术攻关。",
      },
      {
        item: "科技产业发展",
        content:
          '开发"AI+航天"互动教育产品，培育商业航天与智能视觉新业态，助力空天信息产业集群发展。',
      },
    ],
    img: centerImageList04,
  },
  {
    id: 6,
    name: "飞行器与低空导航研发中心",
    intro:
      "研究中心将聚焦无人机安全飞行技术与低空监控系统的创新研发，联合当地产业领军企业，针对城市复杂环境开展高精度定位、智能避障及多源感知融合技术攻关。通过政产学研协同创新，推动无人机在物流配送、安全巡检、应急救援等场景的规模化应用，同时构建‘5G-A+雷达+光电’一体化低空监控平台，实现城市低空态势智能感知与风险预警，为智慧城市建设和低空经济发展提供核心技术支撑，培育高端无人机与低空经济领域专业人才。",
    direction: [
      "空基平台与多无人机协作系统：研发多无人机在无GPS环境下的快速现场部署，开发一种时空轨迹优化算法。",
      "具身理疗机器人：致力于实现人体姿态识别与力反馈的精准控制。",
      "智能双轮腿机器人：致力于开发一套紧凑型双轮腿机器人硬件和软件系统，使机器人能够在城市环境中实现自主导航。",
    ],
    teamPhoto: centerTeam5,
    developPlan: [
      {
        item: "深化产学研合作",
        content:
          "基于中心在无人机和机器人方面的研究，深化和合肥地区企业和高校研发力量的合作。",
      },

      {
        item: "成果转化",
        content: "针对市场痛点提供实质性解决方案，推动技术产业化。",
      },
      {
        item: "平台建设",
        content: "为应急与民生领域的技术落地提供可复用、可拓展的支撑。",
      },
    ],
    img: centerImageList02,
  },
  {
    id: 7,
    name: "肿瘤放疗疗效管理辅助机器人研发中心",
    intro:
      "肿瘤放疗疗效管理辅助机器人研发中心专注于放疗疗效管理领域，致力于开发基于人工智能与多模态感知的放疗疗效管理机器人技术。研发团队在医疗机器人、医学影像分析及放射治疗领域具备深厚积累，依托产学研医协同创新模式，与医疗机构及企业深度合作，提供高精度、高一致性的智能评估解决方案，推动肿瘤放疗疗效管理进入客观化与智能化的新纪元。",
    direction: [
      "本项目的核心产业转化路径为研发具备医疗器械资证的智能评估机器人系统。通过与顶级医疗机构的临床合作，我们将建立覆盖图像采集、定量分析与疗效追踪的一体化解决方案。未来计划拓展至多癌种的放疗疗效管理，并探索与智慧医院系统、远程医疗平台的数据对接，构建肿瘤放疗疗效管理的行业新标准。",
    ],
    teamPhoto: centerTeam7,
    developPlan: [
      {
        item: "技术创新",
        content:
          "开发可便携式图像采集设备，开发多模态数据融合技术，整合可见光和热成像数据，建立跨癌种的放疗疗效评估模型。计划引入新的模型架构提升模型泛化能力，并开发增量学习系统实现模型的持续优化。",
      },
      {
        item: "成果转化",
        content:
          "率先推进放射性皮炎评估模块的产品化，通过与多家顶级肿瘤医院建立临床示范中心，验证技术可靠性，并逐步拓展至口腔黏膜炎、放射性肺炎等并发症的评估模块。",
      },
    ],
    img: "",
  },
]);

// 根据 id 动态匹配研究中心信息
const showInfo = computed(() => {
  return centerInfo.value.find((item) => item.id === id) || {};
});
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
  console.log("Current Center Images:", centerImg);
  return centerImg.map((img, index) => ({
    id: index,
    large: img,
    thumb: img,
  }));
});

// 当前显示的图片 - 初始化为第一张图片
const currentImage = ref(currentCenterImages.value[0] || null);
console.log("Current Image:", currentImage.value);
const currentIndex = ref(0);

// 设置当前显示图片
const setCurrentImage = (image) => {
  currentImage.value = image;
  currentIndex.value = currentCenterImages.value.findIndex(
    (img) => img.id === image.id
  );
};

// 缩略图分页
const thumbStartIndex = ref(0);
const thumbsPerPage = 4;

// 左右按钮状态
const canPrev = computed(() => currentIndex.value > 0);
const canNext = computed(
  () => currentIndex.value < currentCenterImages.value.length - 1
);

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
    Math.min(
      thumbStartIndex.value + thumbsPerPage,
      currentCenterImages.value.length
    )
  );
});

// 跳转到指定id的页面
const navigateToCenter = (centerId) => {
  router.push(`/research/center/${centerId}`);
};
</script>

<template>
  <!-- <div class="crumbs">
    <RouterLink to="/research">研究中心</RouterLink>
    <span> > {{ showInfo.name }}</span>
  </div> -->
  <div class="center_info">
    <div class="center_text">
      <!-- 中心介绍 -->
      <div class="center_title">
        <h3>{{ showInfo.name }}</h3>
        <p>{{ showInfo.intro }}</p>
      </div>

      <div class="center_pic_box">
        <div class="center_pic">
          <!-- 主图 -->
          <div class="main-image-container" v-if="currentImage">
            <img
              :src="currentImage.large"
              alt="Main display"
              class="main-image"
            />
          </div>

          <!-- 缩略图导航 -->
          <div
            class="thumbnail-navigation"
            v-if="currentCenterImages.length > 0"
          >
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
      </div>

      <!-- 视频 -->
      <div v-if="showInfo.video" class="center-video">
        <video controls width="100%" height="300">
          <source :src="showInfo.video" type="video/mp4" />
          您的浏览器不支持 HTML5 video 标签。
        </video>
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
      <!-- 团队照片 -->
      <div v-if="showInfo.teamPhoto" class="center-teamPhoto">
        <img :src="showInfo.teamPhoto" width="500px" alt="" />
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
  margin: 20px 0 40px 0;
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
  width: 625px;
  height: 468px;
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
  /* width: calc(100% - 120px); */
  display: flex;
  padding: 0 30px;
  flex-direction: column;
}
.center_info .center_text .center_pic_box {
  display: flex;
  justify-content: center;
}
.center_info .center_text .center_pic_box,
.center_info .center_text .center-video,
.center_info .center_text .center-teamPhoto {
  width: 100%;
  margin: 10px 0;
}
.center_info .center_text .center-teamPhoto {
  display: flex;
  justify-content: center;
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