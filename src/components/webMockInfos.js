// import { getImgSrc } from "@/utils/common.js";
const getImgSrc = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};
const professorsInfo = [
  {
    title:'陈武 教授',
    info: '院长',
    img: new URL(`../assets/images/coreteam/people_RC03_01.jpg`, import.meta.url).href,
    imgAlt:'Prof. Wu CHEN',
    jumpTo: '/professor/1'
  },
    {
    title:'严锋 教授',
    info: '副院长 生物医疗传感器研发中心主任',
    img: new URL(`../assets/images/coreteam/people_RC01_01.jpg`, import.meta.url).href,
    imgAlt:'Prof. Feng YAN',
    jumpTo: '/professor/2'
  },
    {
    title:'戴吉岩 教授',
    info: '香港理工大学应用物理学系教授',
    img: new URL(`../assets/images/coreteam/people_RC01_02.jpg`, import.meta.url).href,
    imgAlt:'Prof. Jiyan DAI',
    jumpTo: '/professor/6'
  },
    {
    title:'吴波 教授',
    info: '行星遥感与机器视觉研发中心',
    img: new URL(`../assets/images/coreteam/people_RC04_01.jpg`, import.meta.url).href,

    imgAlt:'Prof. Bo WU',
    jumpTo: '/professor/3'
  },
    {
    title:'蔡璟 教授',
    info: '肿瘤放疗疗效管理辅助机器人研发中心主任',
    img: new URL(`../assets/images/coreteam/people_RC10_01.png`, import.meta.url).href,

    imgAlt:'Prof. Jing CAI',
    jumpTo: '/professor/10'
  },
    {
    title:'黄海龙 教授',
    info: '飞行器与低空导航研发中心主任',
    img: new URL(`../assets/images/coreteam/people_RC02_02.jpg`, import.meta.url).href,
    imgAlt:'Prof. HaiLong HUANG',
    jumpTo: '/professor/4'
  },
    {
    title:'杨扬 博士',
    info: '北斗应用技术研发中心主任',
    img: new URL(`../assets/images/coreteam/people_RC03_02.jpg`, import.meta.url).href,
    imgAlt:'Prof. Yang YANG',
    jumpTo: '/professor/5'
  },
    {
    title:'孙雷 教授',
    info: '香港理工大学生物医学工程学系教授',
    img: new URL(`../assets/images/coreteam/people_RC01_03.jpg`, import.meta.url).href,
    imgAlt:'Prof. Lei SUN',
    jumpTo: '/professor/7'
  },
    {
    title:'陈文华 教授',
    info: '香港理工大学低空经济研发中心主任',
    img: new URL(`../assets/images/coreteam/people_RC02_01.jpg`, import.meta.url).href,
    imgAlt:'Prof. WenHua CHEN',
    jumpTo: '/professor/8'
  },
    {
    title:'蒋一平 教授',
    info: '香港理工大学航空及民航工程学系助理教授',
    img: new URL(`../assets/images/coreteam/people_RC02_03.jpg`, import.meta.url).href,
    imgAlt:'Prof. YiPing JIANG',
    jumpTo: '/professor/9'
  },
]

const stationInfo = [
  {
    id:'2',
    name:'生物传感器研发中心',
    icon: new URL(`../assets/images/polyHfri/dep01.png`, import.meta.url).href,
    // img: new URL(`../assets/images/researchcenter/RC01.png`, import.meta.url).href,
  }, 
  

{
  id:'3',
  name:'医用超声成像与传感研发中心',
      icon: new URL(`../assets/images/polyHfri/dep07.png`, import.meta.url).href},
{
  id:'4',
  name:'超声神经调控和超声诊疗中心',
  icon: new URL(`../assets/images/polyHfri/dep06.png`, import.meta.url).href,
}, 
 {
    id:'7',
    name:'肿瘤放疗疗效管理辅助机器人研发中心',
  icon: new URL(`../assets/images/polyHfri/dep05.png`, import.meta.url).href,
},
  {
  id:'1',
  name:'北斗应用技术研发中心',
  icon: new URL(`../assets/images/polyHfri/dep03.png`, import.meta.url).href,

}, 
{
  id:'5',
  name:'行星遥感与机器视觉研发中心',
  icon: new URL(`../assets/images/polyHfri/dep04.png`, import.meta.url).href,
}, {
    id:'6',
    name:'飞行器与低空导航研发中心',
  icon: new URL(`../assets/images/polyHfri/dep02.png`, import.meta.url).href,

}
]

// 1.各中心联系方式信息
const contactList = [
  {
    department: "北斗应用技术研发中心",
    name: "杨扬 博士",
    //position: "北斗应用技术研发中心主任",
    email: "yangyang@polyu.edu.hk",
  },
  {
    department: "飞行器与低空导航研发中心",
    name: "黄海龙 博士",
    //position: "飞行器与低空导航研发中心主任",
    email: "hailong.huang@polyu.edu.hk",
  },
  {
    department: "生物传感器研发中心",
    name: "赵泽宇 博士",
    //position: "智能机器人与机电一体化研究中心副主任",
    email: "ze-yu.zhao@polyu.edu.hk ",
  },
  {
    department: "行星遥感与机器视觉研发中心",
    name: "朱佳明 博士",
    //position: "科研助理",
    email: "jiaming11.zhu@polyu.edu.hk",
  },
    {
    department: "超声神经调控和超声诊疗中心",
    name: "冼铨香 博士",
    //position: "科研助理",
    email: "quanxian@polyu.edu.hk",
  },
    {
    department: "医用超声成像与传感研发中心",
    name: "侯诗霖 博士",
    //position: "科研助理",
    email: "23040698r@connect.polyu.hk",
  },
    {
    department: "肿瘤放疗疗效管理辅助机器人研发中心",
    name: "马宗锐 博士",
    //position: "科研助理",
    email: "zachary.ma@polyu.edu.hk",
  },

];

// 2.采购招标信息
const tenderingInfo = [
  {
    title: "光刻机",
    serialNO: "HFRI2510003",
    start: "2025年10月29日星期三",
    end: "2025年11月12日星期三下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
    backUp:
      "如有兴趣应标，请发送营业执照副本及相应资质文件至联系邮箱中，谢谢！",
  },
  {
    title: "镀膜仪等12种设备",
    serialNO: "HFRI2510004",
    start: "2025年10月31日星期五",
    end: "2025年11月14日星期五下午3时整",
    contact: "苍小姐",
    contactNumber: "0755-22673883",
    contactEmail: ["yahui.cang@polyu.edu.hk"],
  },
    {
    title: "混合信号示波器等12种设备",
    serialNO: "HFRI2510002",
    start: "2025年10月13日星期一",
    end: "2025年10月27日星期一下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
  },
    {
    title: "开放编程超声成像系统",
    serialNO: "HFRI2510001",
    start: "2025年10月10日星期五",
    end: "2025年10月24日星期五下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
  },
    {
    title: "GNSS信号回放仪",
    serialNO: "HFRI2509003",
    start: "2025年9月29日星期一",
    end: "2025年10月16日星期四下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
  },
    {
    title: "室内动作捕捉系统",
    serialNO: "HFRI2509002",
    start: "2025年9月26日星期五",
    end: "2025年10月17日星期五下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
  },
    {
    title: "3.6GHz频谱仪、矢量信号源和示波器",
    serialNO: "HFRI2509001",
    start: "2025年9月15日星期一",
    end: "2025年9月24日星期三下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
  },
];

// 3.人才招聘信息
const recruitmentInfo = [
  {
    title: "超声FPGA工程师",
    requirements: "合肥-庐阳区  |  无需经验  |  硕士  |   1.2-2.4万",
    position_link: "https://jobs.51job.com/hefei-lyq/167165401.html",
  },
  {
    title: "超声软件工程师",
    requirements: "合肥-庐阳区  |  无需经验  |  本科  |   1.2-2.4万",
    position_link: "https://jobs.51job.com/hefei-lyq/167165504.html",
  },
  {
    title: "超声硬件工程师",
    requirements: "合肥-庐阳区  |  无需经验  |  本科  |   1.2-2.4万",
    position_link: "https://jobs.51job.com/hefei-lyq/167165273.html",
  },
  {
    title: "超声算法工程师",
    requirements: "合肥-庐阳区  |  5年及以上  |  硕士  |   1.2-2.4万",
    position_link: "https://jobs.51job.com/hefei-lyq/167165645.html",
  },
  {
    title: "市场宣传推广助理主管（IT及新媒体运营主管）",
    requirements:
      "合肥-庐阳区  |  5年及以上  |  本科  |  英文读写熟练  |   7千-1.2万",
    position_link: "https://jobs.51job.com/hefei-lyq/168248691.html",
  },
    {
    title: "低空项目经理",
    requirements:
      "合肥-庐阳区  |  5年及以上  |  本科  |  英语读写熟练",
    position_link: "https://jobs.51job.com/hefei-lyq/168996822.html",
  },
      {
    title: "高级科研助理",
    requirements:
      "合肥-庐阳区  |  1年及以上  |  本科  |  英语读写熟练",
    position_link: "https://jobs.51job.com/hefei-lyq/168625187.html",
  },
        {
    title: "研究助理",
    requirements:
      "合肥-庐阳区  |  1年及以上  |  本科  |  英语简单沟通/读写",
    position_link: "https://jobs.51job.com/hefei-lyq/168995692.html",
  },
  
];

export { professorsInfo, stationInfo,contactList,tenderingInfo,recruitmentInfo }