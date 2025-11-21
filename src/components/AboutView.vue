<script setup>
import { ref } from "vue";
import pageBanner from "./banners/page-banner.vue";
const mainTitle = ref("关于我们");

const timelineData = ref([
  {
    year: "2024年11月",
    content: "香港理工大学与合肥市庐阳区签署合作协议",
    position: "left",
  },
  {
    year: "2025年8月",
    content: "研究院正式落地合肥庐阳大数据产业园",
    position: "right",
  },
  // {
  //   year: "2024年9月",
  //   content: "首批科研团队入驻",
  //   position: "left"
  // },
  // {
  //   year: "2025年",
  //   content: "计划建成省级工程技术研究中心",
  //   position: "right"
  // },
]);
const HKRIIntroduction1 = ref(
  "香港理工大学(港理大)创立于1937年，是一所科研实力强劲的综合性研究型大学，于《2025年QS世界大学排行榜》中位列全球第57位。港理大秉承校训「开物成务　励学利民」的精神，矢志成为一所创新型世界级大学，并以肩负社会重任为宗旨。"
);
const HKRIIntroduction2 = ref(
  "港理大为学生提供优质的全面教育，致力培育具良好国民意识、全球视野与社会责任感的「明日领袖」；同时推动具影响力的创新与跨学科研究，以应对全球最迫切的挑战。知识转移与创业文化亦是港理大的基石，大学着重研以致用——将所研发的科技转化为实际应用。港理大追求卓越，努力不懈，深得国际认可，持续位居全球百强学府之列。港理大将继续以其雄厚根基，与各界策略伙伴合作，力求造福香港、国家乃至全球。"
);
const HFIntntroduction1 = ref(
  "为进一步推动空天信息与生物医疗精密传感等领域创新发展，促进科技成果产业化，推进合肥市科技创新与产业升级，香港理工大学（理大）与合肥市庐阳区人民政府达成协议，共同创建「香港理工大学合肥技术创新研究院」（研究院），旨在开展深度有效的产学研合作及培育优秀人才。研究院将开展多个项目，重点聚焦生物医学传感精密技术和航天资讯，促进相关领域的科研发展、学术交流、人才培养和知识转移。理大将发挥其科研实力和学术优势，透过是次合作在合肥建设顶尖的科技创新平台。"
);
const HFIntntroduction2 = ref(
  "签约仪式于 10 月 25 日在合肥市举行。理大副校长（研究及创新）赵汝恒教授及合肥市庐阳区区政府副区长时坤先生代表双方签署协议，并由理大协理副校长（内地研究拓展）董澄教授、理大土地测量及地理资讯学系主任陈武教授、理大国家轨道交通电气化与自动化工程技术研究中心（香港分中心）主任倪一清教授，以及合肥市庐阳区区委书记高强先生、合肥市庐阳区区委办主任朱华军先生、合肥市庐阳区庐阳经济开发区管委会主任沉兵先生见证。"
);
const HFIntntroduction3 = ref(
  "为进一步推动空天信息与生物医疗精密传感等领域创新发展，促进科技成果产业化，推进合肥市科技创新与产业升级，香港理工大学与合肥市政府，庐阳区政府合作共建港理大（合肥）技术创新研究院有限公司。"
);
const HFIntntroduction4 = ref(
  "将聚焦空天信息与生物医疗精密传感两大领域，开展技术研发、平台建设及成果转化，致力于打造国际一流的产学研合作转化基地。"
);
</script>

<template>
  <div class="container">
    <!-- banner组件 -->
    <pageBanner :mainTitle="mainTitle"></pageBanner>
    <div class="content">
      <!-- 港理工简介 -->
      <div class="introduction">
        <div class="title">
          <span class="name">香港理工大学简介</span>
        </div>
        <p>
          {{ HKRIIntroduction1 }}
        </p>
        <p>
          {{ HKRIIntroduction2 }}
        </p>
        <div class="college_pic"></div>
      </div>
      <!-- 合肥院简介 -->
      <div class="introduction">
        <div class="title">
          <span class="name">港理工(合肥)技术创新研究院简介</span>
        </div>
        <p>{{ HFIntntroduction1 }}</p>
        <p>{{ HFIntntroduction2 }}</p>
        <div class="sign_pic"></div>
        <!-- <p>
          {{ HFIntntroduction3 }}
        </p>
        <p>
          {{ HFIntntroduction4 }}
        </p>
        <div class="college_pic"></div> -->
      </div>
      <div class="development_history">
        <h2>研究院建设历程</h2>
        <span></span>
        <div class="timeline-container">
          <div
            v-for="(item, index) in timelineData"
            :key="index"
            class="timeline-item"
            :class="item.position"
          >
            <!-- 时间节点（圆形） -->
            <div class="timeline-node"></div>
            <!-- 时间内容 -->
            <div class="timeline-content">
              <h3>{{ item.year }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container .content .introduction {
  width: 1180px;
  text-align: center;
  margin-top: 50px;
}
.container .content .introduction .title {
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  color: #000;
  border-bottom: 1px solid #dadada;
}
.container .content .introduction .title .name {
  border-bottom: 2px solid #9f2843;
  position: relative;
  bottom: -2px;
}
.container .content .introduction p {
  text-indent: 4ch;
  text-align: left;
  color: #000;
  margin-top: 30px;
}
.container .content .introduction .college_pic {
  width: 100%;
  min-width: 1200px;
  min-height: 400px;
  background: url("../assets/images/about/HKDoor.jpg");
  background-size: cover;
  background-position: center;
  margin-top: 50px;
}
.container .content .introduction .sign_pic {
  width: 100%;
  min-width: 1200px;
  min-height: 400px;
  background: url("../assets/images/about/sign.jpg");
  background-size: cover;
  background-position: center;
  margin-top: 50px;
}

.container .content .development_history {
  text-align: center;
  margin: 50px 0 30px 0;
}
.container .content .development_history h2 {
  font-size: 40px;
  color: #000;
  line-height: 1;
}
.container .content .development_history span {
  display: inline-block;
  width: 60px;
  height: 1.5px;
  background: #9f2843;
  margin-top: 15px;
}
/* 时间线容器 */
.timeline-container {
  position: relative;
  width: 800px;
  margin: 50px auto;
  padding: 0 20px;
}

/* 时间线（中间的竖线） */
.timeline-container::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e4e4e4;
  transform: translateX(-50%);
}

/* 时间线项 */
.timeline-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
}

/* 圆形节点 */
.timeline-node {
  position: absolute;
  left: 50%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #9f2843; /* 红色节点 */
  transform: translateX(-50%);
  z-index: 1;
}

/* 左侧内容 */
.timeline-item.left .timeline-content {
  text-align: right;
  padding-right: 40px;
  width: 50%;
}

/* 右侧内容 */
.timeline-item.right .timeline-content {
  text-align: left;
  padding-left: 40px;
  width: 50%;
  margin-left: 50%;
}

/* 内容样式 */
.timeline-content h3 {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 0.5em;
  color: #333;
}

.timeline-content p {
  color: #000;
  font-size: 14px;
  line-height: 1.6;
}
</style>
