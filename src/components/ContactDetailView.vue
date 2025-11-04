<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import pageBanner from "./banners/page-banner.vue";
import { contactList, tenderingInfo, recruitmentInfo } from "./webMockInfos";

// 路由id匹配数据信息
const route = useRoute(); // 获取当前路由信息
const id = Number(route.params.id); // 将参数转为数字（因为你的 id 是数字）

const jumpTo51 = (url) => {
  window.open(url);
};
</script>

<template>
  <div class="container">
    <div class="content">
      <!-- 项目合作 -->
      <div class="contact_content" v-if="id === 1">
        <pageBanner mainTitle="联系我们"></pageBanner>
        <!-- <div class="little_title"> -->
        <!-- <span></span> -->
        <!-- <p>联系方式</p> -->
        <!-- <span></span> -->
        <!-- </div> -->
        <div class="contact_list">
          <div
            class="contact_item"
            v-for="item in contactList"
            :key="item.name"
          >
            <h3>{{ item.department }}</h3>
            <p>联络人：{{ item.name }}</p>
            <!-- <p>职务：{{ item.position }}</p> -->
            <p>电邮：{{ item.email }}</p>
          </div>
        </div>
      </div>
      <!-- 采购招标 -->
      <div class="contact_content" v-if="id === 2" id="tendering">
        <pageBanner mainTitle="采购招标"></pageBanner>
        <div class="little_title">
          <span></span>
          <p>信息公示</p>
          <span></span>
        </div>
        <div
          class="tendering_info"
          v-for="item in tenderingInfo"
          :key="item.serialNO"
        >
          <h3><b>【招标】</b>{{ item.title }}_{{ item.serialNO }}</h3>
          <p>招标编号：{{ item.serialNO }}</p>
          <p>招标日期：{{ item.start }}</p>
          <p>招标截止日期：{{ item.end }}</p>
          <p>联系人：{{ item.contact }}</p>
          <p>联系电话：{{ item.contactNumber }}</p>
          <p v-for="email in item.contactEmail" :key="email">
            联系邮箱：{{ email }}
          </p>
          <p>{{ item.backUp }}</p>
        </div>
      </div>
      <!-- 人才招聘 -->
      <div class="contact_content" v-if="id === 3">
        <pageBanner mainTitle="加入我们"></pageBanner>
        <!-- <div class="little_title">
          <span></span>
          <p>加入我们</p>
          <span></span>
        </div> -->
        <div class="recruitment_positions">
          <div
            class="position_item"
            v-for="(item, index) in recruitmentInfo"
            :key="index"
          >
            <div @click="jumpTo51(item.position_link)" class="position_info">
              <div class="position_title">{{ item.title }}</div>
              <div class="position_requirements">{{ item.requirements }}</div>
              <div class="position_jumpIcon">></div>
            </div>
          </div>
        </div>
        <div class="intro_info">
          <div>
            <div class="title">香港理工大学合肥技术创新研究院：</div>
            <div class="content">
              <p>
                为进一步推动空天信息与生物医疗精密传感器等领域创新发展，促进科技成果产业化，推进合肥市科技创新与产业升级，香港理工大学（理大）与合肥市庐阳区人民政府达成协议，共同创建「香港理工大学合肥技术创新研究院」（研究院），旨在开展深度有效的产学研合作及培育优秀人才。研究院将开展多个项目，重点聚焦生物医学传感精密技术和航天资讯，促进相关领域的科研发展、学术交流、人才培养和知识转移。理大将发挥其科研实力和学术优势，透过是次合作在合肥建设顶尖的科技创新平台。
              </p>
              <p>
                签约仪式于 10 月 25
                日在合肥市举行。理大副校长（研究及创新）赵汝恒教授及合肥市庐阳区区政府副区长时坤先生代表双方签署协议，并由理大协理副校长（内地研究拓展）董澄教授、理大土地测量及地理资讯学系主任陈武教授、理大国家轨道交通电气化与自动化工程技术研究中心（香港分中心）主任倪一清教授，以及合肥市庐阳区区委书记高强先生、合肥市庐阳区区委办主任朱华军先生、合肥市庐阳区庐阳经济开发区管委会主任沉兵先生见证。
              </p>
            </div>
          </div>
          <div>
            <div class="title">香港理工大学：</div>
            <div class="content">
              <p>
                香港理工大学（港理大）创立于1972年，是一所科研实力强劲的综合性研究型大学，於2025年「QS世界大学排行榜」中位列全球第57位。港理大秉承校训「开物成务
                励学利民」的精神，矢志成为一所创新型世界级大学，并以肩负社会重任为宗旨。根据史丹佛大学最新发布的科学家排行榜，截至2023年10月，港理大有208名学者列入全球首2%科学家排行榜。其中，有6名科学家排行全球前20名，为全港大学之最。
              </p>
              <p>
                港理大为学生提供优质的全面教育，致力培育具良好国民意识、全球视野与社会责任感的「明日领袖」；同时推动具影响力的创新与跨学科研究，以应对全球最迫切的挑战。知识转移与创业文化亦是港理大的基石，大学着重研以致用——将所研发的科技转化为实际应用。港理大追求卓越，努力不懈，深得国际认可，持续位居全球百强学府之列。港理大将继续以其雄厚根基，与各界策略伙伴合作，力求造福香港、国家乃至全球。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
}
.intro_info .title {
  margin: 20px 0 10px 0;
  font-size: 22px;
  font-weight: 500;
}
.intro_info .content {
  margin: 0px 0 30px 0;
}
.position_info {
  position: relative;
  width: 100%;
  font-size: 15px;
  line-height: 28px;
  color: #333;
  background: #fff;
  padding: 9px 25px 9px 15px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  transition: 0.3s;
}
.position_info:hover {
  color: #fff;
  background: #aa0235;
}
.position_info .position_jumpIcon {
  position: absolute;
  right: 20px;
  top: 50%;
  font-size: 20px;
  margin-top: -10px;
}
.intro_info .content {
  text-indent: 2em;
}
.content h2 {
  font-size: 32px;
  font-weight: bold;
  color: #222;
  line-height: 1;
  margin-top: 50px;
  text-align: center;
}
.content .little_title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}
.content .little_title span {
  display: inline-block;
  width: 30px;
  height: 1.5px;
  background: rgb(156, 154, 154);
}
.content .little_title p {
  margin: 0 20px;
  font-size: 18px;
  color: #777;
}
.content .contact_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  max-width: 1200px;
}
.content .contact_item {
  width: 40%;
  padding: 20px;
  margin-bottom: 30px;
}
.content .contact_item h3 {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}
.content .contact_item p {
  font-size: 14px;
  color: rgb(89, 89, 89);
  margin-bottom: 5px;
}
.contact_content .tendering_info {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 0;
  border-radius: 8px !important;
  border: 1px solid;
  border-color: #dcdcdc;
  padding: 20px;
  margin: 20px 0 20px 0;
}
.contact_content .tendering_info h3 {
  font-size: 20px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 30px;
}
.contact_content .tendering_info h3 b {
  font-weight: 500;
}
.contact_content .tendering_info p {
  margin: 0 0 10px;
  font-size: 16px;
  color: #666666;
}
.contact_content .recruitment_positions {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
}
.contact_content .recruitment_positions .position_item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 0 0 25px;
}
.contact_content .recruitment_positions .position_title {
  font-weight: bold;
  font-size: 20px;
}
.contact_content .recruitment_positions .position_requirements {
  margin: 10px 0 0;
  font-size: 14px;
}
.contact_content .recruitment_positions .position_link {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.contact_content .recruitment_positions .position_link:hover a {
  background: #707171;
}
.contact_content .recruitment_positions .position_link a {
  display: inline-block;
  width: 140px;
  height: 40px;
  background: #a02337;
  text-align: center;
  font-size: 17px;
  color: #fff;
  line-height: 40px;
}
.contact_content .recruitment_positions .position_link span {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #2d3235;
  text-align: center;
  cursor: pointer;
}
.contact_content .recruitment_positions .position_link span .iconfont {
  font-size: 20px;
  color: #fff;
  line-height: 40px;
}
</style>