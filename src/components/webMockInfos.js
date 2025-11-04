const professorsInfo = [
  {
    title:'陈武 教授',
    info: '院长',
    img: '../assets/images/coreteam/people_RC03_01.jpg',
    imgAlt:'Prof. Wu CHEN',
    jumpTo: '/professor/1'
  },
    {
    title:'严锋 教授',
    info: '副院长 生物医疗精密传感器研究所主任',
    img: '../assets/images/coreteam/people_RC01_01.jpg',
    imgAlt:'Prof. Feng YAN',
    jumpTo: '/professor/2'
  },
    {
    title:'吴波 教授',
    info: '行星遥感与机器视觉研发中心',
    img: '../assets/images/coreteam/people_RC04_01.jpg',
    imgAlt:'Prof. Bo WU',
    jumpTo: '/professor/3'
  },
    {
    title:'黄海龙 教授',
    info: '飞行器与低空导航研发中心主任',
    img: '../assets/images/coreteam/people_RC02_02.jpg',
    imgAlt:'Prof. HaiLong HUANG',
    jumpTo: '/professor/4'
  },
    {
    title:'杨扬 博士',
    info: '北斗应用技术研发中心主任',
    img: '../assets/images/coreteam/people_RC03_02.jpg',
    imgAlt:'Prof. Yang YANG',
    jumpTo: '/professor/5'
  },
    {
    title:'戴吉岩 教授',
    info: '',
    img: '../assets/images/coreteam/people_RC01_02.jpg',
    imgAlt:'Prof. Jiyan DAI',
    jumpTo: '/professor/6'
  },
    {
    title:'孙雷 教授',
    info: '',
    img: '../assets/images/coreteam/people_RC01_03.jpg',
    imgAlt:'Prof. Lei SUN',
    jumpTo: '/professor/7'
  },
    {
    title:'陈文华 教授',
    info: '',
    img: '../assets/images/coreteam/people_RC02_01.jpg',
    imgAlt:'Prof. WenHua CHEN',
    jumpTo: '/professor/8'
  },
    {
    title:'蒋一平 教授',
    info: '',
    img: '../assets/images/coreteam/people_RC02_03.jpg',
    imgAlt:'Prof. YiPing JIANG',
    jumpTo: '/professor/9'
  },
]

const stationInfo = [
  {
    id:'2',
    name:'生物医疗精密传感器研发中心',
    icon: '../assets/images/polyHfri/dep01.png',
    img: '../assets/images/researchcenter/RC01.png',
  }, 
  

{
  id:'3',
  icon: '../assets/images/polyHfri/dep07.png',
  name:'医用超声成像与传感器研发中心',
  img: '../assets/images/researchcenter/RC01.png',
}, 
{
  id:'4',
  icon: '../assets/images/polyHfri/dep06.png',
  name:'超声神经调控和超声诊疗中心',
  img: '../assets/images/researchcenter/RC01.png',
}, 
 {
    id:'7',
  icon: '../assets/images/polyHfri/dep05.png',
    name:'肿瘤放疗疗效管理辅助机器人研发中心',
  img: '../assets/images/researchcenter/RC03.png'
},
  {
  id:'1',
  name:'北斗应用技术研发中心',
  icon: '../assets/images/polyHfri/dep03.png',
  img: '../assets/images/researchcenter/RC01.png',
}, 
{
  id:'5',
  icon: '../assets/images/polyHfri/dep04.png',
  name:'行星遥感与机器视觉研发中心',
  img: '../assets/images/researchcenter/RC01.png',
}, {
    id:'6',
  icon: '../assets/images/polyHfri/dep02.png',
    name:'飞行器与低空导航研发中心',
  img: '../assets/images/researchcenter/RC02.png',

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
    department: "生物医疗精密传感器研究所",
    name: "刘红 博士",
    //position: "智能机器人与机电一体化研究中心副主任",
    email: "hhhong.liu@polyu.edu.hk",
  },
  {
    department: "行星遥感与机器视觉研发中心",
    name: "陈龙 博士",
    //position: "科研助理",
    email: "brandon-long.chen@polyu.edu.hk",
  },
];

// 2.采购招标信息
const tenderingInfo = [
  {
    title: "光刻机-HFRI2510003",
    serialNO: "HFRI2510003",
    start: "2025年10月29日星期三",
    end: "2025年11月12日星期三下午3时整",
    contact: "张小姐",
    contactNumber: "0755-22673848",
    contactEmail: ["qi.q.zhang@polyu.edu.hk"],
    backUp:
      "如有兴趣应标，请发送营业执照副本及相应资质文件至联系邮箱中，谢谢！",
  },
  // {
  //   title: "智能传感器测试设备",
  //   serialNO: "NJRI2501002",
  //   start: "2023-01-01",
  //   end: "2023-12-31",
  //   contact: "王先生/李小姐",
  //   contactNumber: "13922222222",
  //   contactEmail: ["wang先生@polyu.edu.hk", "li小姐@polyu.edu.hk"],
  // },
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
];

export { professorsInfo, stationInfo,contactList,tenderingInfo,recruitmentInfo }