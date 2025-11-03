<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

// 路由id匹配数据信息
const route = useRoute(); // 获取当前路由信息
const id = Number(route.params.id); // 将参数转为数字（因为你的 id 是数字）

// 1.各中心联系方式信息
const contactList = ref([
  {
    department: "生物医疗精密传感器研究所",
    name: "刘红 博士",
    //position: "智能机器人与机电一体化研究中心副主任",
    email: "hhhong.liu@polyu.edu.hk",
  },
  {
    department: "飞行器与低空导航研发中心",
    name: "黄海龙 博士",
    //position: "飞行器与低空导航研发中心主任",
    email: "hailong.huang@polyu.edu.hk",
  },
  {
    department: "北斗应用技术研发中心",
    name: "杨扬 博士",
    //position: "北斗应用技术研发中心主任",
    email: "yangyang@polyu.edu.hk",
  },
  {
    department: "行星遥感与机器视觉研发中心",
    name: "陈龙 博士",
    //position: "科研助理",
    email: "brandon-long.chen@polyu.edu.hk",
  },
]);

// 2.采购招标信息
const tenderingInfo = ref([
  // {
  //   title: "暂无",
  //   serialNO: "",
  //   start: "",
  //   end: "",
  //   contact: "",
  //   contactNumber: "",
  //   contactEmail: [""],
  // },
  // {
  //   title: "智能传感器测试设备",
  //   serialNO: "NJRI2501002",
  //   start: "2023-01-01",
  //   end: "2023-12-31",
  //   contact: "王先生/李小姐",
  //   contactNumber: "13922222222",
  //   contactEmail: ["wang先生@polyu.edu.hk", "li小姐@polyu.edu.hk"],
  // },
]);

// 3.人才招聘信息
const recruitmentInfo = ref([
  // {
  //   title: "研究员（智能机器人与机电一体化研究中心）",
  //   requirements: "南京-鼓楼区  |  无需经验  |  博士  |  英语精通    1.5-3万",
  //   position_link: "https://jobs.51job.com/nanjing-glq/157059876.html?s=gsxq_zwlb_gsxqlb&t=0_0×tamp__1258=n4%2BxnDgDuD0DcG7QqGNKpDU27D9iYDmrhDD55qx&alichlgref=https%3A%2F%2Fwww.polyu-njri.com%2F",
  // },
  // {
  //   title: "机械工程师(人工智能物联网中心）",
  //   requirements: "南京-鼓楼区  |  3年及以上  |  本科  |  英语精通    1-2万",
  //   position_link: "https://jobs.51job.com/nanjing-glq/159348368.html?s=gsxq_zwlb_gsxqlb&t=0_0×tamp__1258=n4RxnDRD2Du0DtYKGNDQTPBK9KWwx0I3Pi0tx",
  // },
  // {
  //   title: "软件工程师(人工智能物联网中心）",
  //   requirements: "南京-鼓楼区  |  1年及以上  |  本科  |  英语精通    1-1.5万",
  //   position_link: "https://jobs.51job.com/nanjing-glq/159348015.html?s=gsxq_zwlb_gsxqlb&t=0_0×tamp__1258=n4Ax9D2Go4cDRDBqDTexUxQwU1DBiAGYD&ali",
  // },
  // {
  //   title: "高级物联网开发工程师",
  //   requirements: "南京-鼓楼区  |  5年及以上  |  本科  |  英语精通    2-3.5万",
  //   position_link: "https://jobs.51job.com/nanjing-glq/162141123.html?s=gsxq_zwlb_gsxqlb&t=0_0×tamp__1258=n4jxciGQ0%3DoeqY50QD%2FD0i1dD%3Dk%2BuohDDvN4x&alichlgref=https%3A%2F%2Fwww.polyu-njri.com%2F",
  // },
  // {
  //   title: "高级开发工程师/架构师/技术组长",
  //   requirements: "南京-鼓楼区  |  五年以上  |  本科  |  英语精通    1.5-3万",
  //   position_link: "https://jobs.51job.com/nanjing-glq/156264781.html?s=gsxq_zwlb_gsxqlb&t=0_0×tamp__1258=WqmxyD2GitdQq0KDsD7mYqGKeOQReDBjeboD&",
  // },
]);
</script>

<template>
  <div class="container">
    <div class="content">
      <!-- 项目合作 -->
      <div class="contact_content" v-if="id === 1">
        <h2>联系我们</h2>
        <div class="little_title"><span></span><p>联系方式</p><span></span></div>
        <div class="contact_list">
          <div class="contact_item" v-for="item in contactList" :key="item.name">
            <h3>{{ item.department }}</h3>
            <p>联络人：{{ item.name }}</p>
            <!-- <p>职务：{{ item.position }}</p> -->
            <p>电邮：{{ item.email }}</p>
          </div>
        </div>
      </div>
      <!-- 采购招标 -->
      <div class="contact_content" v-if="id === 2" id="tendering">
        <h2>采购招标</h2>
        <div class="little_title"><span></span><p>信息公示</p><span></span></div>
        <div class="tendering_info" v-for="item in tenderingInfo" :key="item.serialNO">
          <h3><b>【招标】</b>{{ item.title }}_{{ item.serialNO }}</h3>
          <p>招标编号：{{ item.serialNO }}</p>
          <p>招标日期：{{ item.start }}</p>
          <p>招标截止日期：{{ item.end }}</p>
          <p>联系人：{{ item.contact }}</p>
          <p>联系电话：{{ item.contactNumber }}</p>
          <p v-for="email in item.contactEmail" :key="email">联系邮箱：{{ email }}</p>
        </div>
      </div>
      <!-- 人才招聘 -->
      <div class="contact_content" v-if="id === 3">
        <h2>人才招聘</h2>
        <div class="little_title"><span></span><p>加入我们</p><span></span></div>
        <div class="recruitment_positions">
          <div class="position_item" v-for="(item, index) in recruitmentInfo" :key="index">
            <div class="position_info">
              <div class="position_title">{{ item.title }}</div>
              <div class="position_requirements">{{ item.requirements }}</div>
            </div>
            <div class="position_link">
              <a :href="item.position_link" target="_blank">查看更多</a>
              <span><i class="iconfont icon-right1"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.2);
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
}
.contact_content .tendering_info h3 {
  font-size: 25px;
  font-weight: bold;
  color: #666666;
  margin-bottom: 50px;
}
.contact_content .tendering_info h3 b {
  font-weight: 500;
}
.contact_content .tendering_info p {
  margin: 0 0 10px;
  font-size: 18px;
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
  margin: 0 0 50px;
}
.contact_content .recruitment_positions .position_title {
  font-weight: bold;
  font-size: 25px;
  color: #666;
}
.contact_content .recruitment_positions .position_requirements {
  margin: 10px 0 0;
  font-size: 18px;
  color: #666666;
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
  background: #A02337;
  text-align: center;
  font-size: 17px;
  color: #fff;
  line-height: 40px;
}
.contact_content .recruitment_positions .position_link span {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #2D3235;
  text-align: center;
  cursor: pointer;
}
.contact_content .recruitment_positions .position_link span .iconfont {
  font-size: 20px;
  color: #fff;
  line-height: 40px;
}
</style>