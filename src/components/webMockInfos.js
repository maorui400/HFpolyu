// import { getImgSrc } from "@/utils/common.js";

import { ref,computed } from "vue";

// 导入图片
import new_details_1_01_video from "../assets/images/news/newsitem/details_1_01.mp4";

const newCover = ref([]);
const newImages = ref([]);

// 导入封面
const newsCovers01 = import.meta.glob(
  "../assets/images/news/new_*.{png,jpg}",
  { eager: true }
);

// 导入 newsitem 文件夹中的图片
const newsModules01 = import.meta.glob(
  "../assets/images/news/newsitem/details_*.{png,jpg}",
  { eager: true }
);

console.log('newsCovers01',newsCovers01);

Object.values(newsCovers01).forEach((module, index) => {
  newCover.value.push(module.default);
});
Object.values(newsModules01).forEach((module, index) => {
  newImages.value.push(module.default);
});
// const newsImageList01 = newImages01.map(()=> item => item.value );
const newsImageList = computed(() => newImages.value);
// 按静态新闻文件名，创建一个'new + id'的图片对象
let _newsImageObj = {}
newsImageList.value.map( item => {
  // 开头符号
 let _startIndex = item.lastIndexOf('_')+1
 let _endIndex = item.indexOf('-', _startIndex)
 let _substr = item.substring(_startIndex, _endIndex);
  // 结尾符号
  !!_newsImageObj[`new`+ _substr] ? _newsImageObj[`new`+ _substr].push(item) : _newsImageObj[`new`+ _substr] = [item]  
})
console.log('_newsImageObj',_newsImageObj);

const newsCoverList = computed(() => newCover.value);
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
    info: '副院长 生物医疗传感器研发实验室负责人',
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
    info: '行星遥感与机器视觉研发实验室负责人',
    img: new URL(`../assets/images/coreteam/people_RC04_01.jpg`, import.meta.url).href,

    imgAlt:'Prof. Bo WU',
    jumpTo: '/professor/3'
  },
    {
    title:'蔡璟 教授',
    info: '肿瘤放疗疗效管理辅助机器人研发实验室负责人',
    img: new URL(`../assets/images/coreteam/people_RC10_01.png`, import.meta.url).href,

    imgAlt:'Prof. Jing CAI',
    jumpTo: '/professor/10'
  },
    {
    title:'黄海龙 教授',
    info: '飞行器与低空导航研发实验室负责人',
    img: new URL(`../assets/images/coreteam/people_RC02_02.jpg`, import.meta.url).href,
    imgAlt:'Prof. HaiLong HUANG',
    jumpTo: '/professor/4'
  },
    {
    title:'杨扬 博士',
    info: '北斗应用技术研发实验室负责人',
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
    info: '香港理工大学低空经济研发实验室负责人',
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
    name:'生物传感器研发实验室',
    icon: new URL(`../assets/images/polyHfri/dep01.png`, import.meta.url).href,
    // img: new URL(`../assets/images/researchcenter/RC01.png`, import.meta.url).href,
  }, 
  

{
  id:'3',
  name:'医用超声成像与传感研发实验室',
      icon: new URL(`../assets/images/polyHfri/dep07.png`, import.meta.url).href},
{
  id:'4',
  name:'超声神经调控和超声诊疗实验室',
  icon: new URL(`../assets/images/polyHfri/dep06.png`, import.meta.url).href,
}, 
 {
    id:'7',
    name:'肿瘤放疗疗效管理辅助机器人研发实验室',
  icon: new URL(`../assets/images/polyHfri/dep05.png`, import.meta.url).href,
},
  {
  id:'1',
  name:'北斗应用技术研发实验室',
  icon: new URL(`../assets/images/polyHfri/dep03.png`, import.meta.url).href,

}, 
{
  id:'5',
  name:'行星遥感与机器视觉研发实验室',
  icon: new URL(`../assets/images/polyHfri/dep04.png`, import.meta.url).href,
}, {
    id:'6',
    name:'飞行器与低空导航研发实验室',
  icon: new URL(`../assets/images/polyHfri/dep02.png`, import.meta.url).href,

}
]

// 1.各中心联系方式信息
const contactList = [
  {
    department: "北斗应用技术研发实验室",
    name: "杨扬 博士",
    //position: "北斗应用技术研发中心主任",
    email: "yangyang@polyu.edu.hk",
  },
  {
    department: "飞行器与低空导航研发实验室",
    name: "黄海龙 博士",
    //position: "飞行器与低空导航研发中心主任",
    email: "hailong.huang@polyu.edu.hk",
  },
  {
    department: "生物传感器研发实验室",
    name: "赵泽宇 博士",
    //position: "智能机器人与机电一体化研究中心副主任",
    email: "ze-yu.zhao@polyu.edu.hk ",
  },
  {
    department: "行星遥感与机器视觉研发实验室",
    name: "朱佳明 博士",
    //position: "科研助理",
    email: "jiaming11.zhu@polyu.edu.hk",
  },
    {
    department: "超声神经调控和超声诊疗研发实验室",
    name: "冼铨香 博士",
    //position: "科研助理",
    email: "quanxian@polyu.edu.hk",
  },
    {
    department: "医用超声成像与传感研发实验室",
    name: "侯诗霖 博士",
    //position: "科研助理",
    email: "23040698r@connect.polyu.hk",
  },
    {
    department: "肿瘤放疗疗效管理辅助机器人研发实验室",
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

// 新闻
const newsInfo = ref([
  {
    id: 1,
    title:
      "香港理工大学合肥技术创新研究院揭牌投运活动于12月4日正式举行",
    date: "2025-12-04 18:19:29",
    coverImg:  newsCoverList.value[0],
    contentDif: [
      {
        type: "text",
        content:
          "2025年12月4日，由中共合肥市委科学技术委员会办公室(市科学技术局)、合肥市庐阳区人民政府指导，香港理工大学、香港理工大学合肥技术创新研究院与庐阳区科学技术局共同主办，合肥庐阳国有资本控股集团有限公司支持的香港理工大学合肥技术创新研究院揭牌投运活动在合肥隆重举行。合肥市委副书记、市长罗云峰，安徽省科技厅厅长赵明，市政府副市长何逢阳，市政协副主席、市政府秘书长罗平，全国政协委员、香港理工大学校董会主席林大辉，香港理工大学高级副校长（研究及创新）赵汝恒，香港理工大学协理副校长（内地研究拓展）董澄，庐阳区和市直有关部门负责人，香港理工大学校友，以及中国科学技术大学、合肥工业大学、安徽大学、合肥理工学院、中科院合肥物质科学研究院等多个高校、科研院所和华米等科技型企业、中国建设银行等金融机构的嘉宾企业代表出席活动，见证香港理工大学合肥技术创新研究院（以下简称“研究院”）正式揭牌投运。",
      },
      { type: "video", content: new_details_1_01_video },
      {
        type: "text",
        content:
          "活动开始，合肥市委副书记、市长罗云峰开场致辞，“合肥是科创与产业名城，始终坚持以创新引领高质量发展，大力培养新质生产力。此次与香港理工大学共建研究院，是皖港科创协同新起点，我们将全力支持研究院建设，共同推动科技创新合作迈向新高度。” 罗云峰市长表示, “研究院肩负三大使命：打造技术转化的‘加速器’、搭建人才培养的‘立交桥’、构建国际合作的‘桥头堡’，相信研究院定能成果丰硕，为皖港合作与科技自立自强贡献力量。”",
      },
      { type: "image", content: _newsImageObj.new1[0]},
      {
        type: "text",
        content:
          "香港理工大学校董会主席、全国政协委员、金紫荆星章获得者 、太平绅士林大辉致辞，“香港理工大学合肥技术创新研究院的成立是香港理工大学融入国家发展大局的重要一步。我们将充分发挥理大的科研实力与国际化经验，与安徽的产业需求紧密结合，为区域创新体系建设贡献智慧与力量。",
      },
      { type: "image", content: _newsImageObj.new1[1] },
      {
        type: "text",
        content:
          "香港理工大学高级副校长(研究及创新)赵汝恒表示，“研究院将对接合肥重点产业发展的需求，重点聚焦空天信息与生物医疗精密传感器领域，依托已设七大研发中心，进一步推动科研成果转化为创新技术或产品并落地使用，联动政企构建‘研发-转化-创业’生态，助力合肥高质量发展与国家科技进步。”",
      },
      { type: "image",content:  _newsImageObj.new1[2] },
      {
        type: "text",
        content:
          "揭牌投运环节包括了研究院揭牌以及InnoHub创业中心揭牌，首先由合肥市委副书记、市长罗云峰，安徽省科技厅厅长赵明，香港理工大学校董会主席林大辉，香港理工大学高级副校长(研究及创新)赵汝恒上台为研究院揭牌，为研究院的正式投运注入了强劲动能。",
      },
      { type: "image",content:  _newsImageObj.new1[3] },
      {
        type: "text",
        content:
          "InnoHub创业中心揭牌环节，由合肥市政协副主席、市政府秘书长罗平、合肥市科技局局长范进、庐阳区委副书记张好启、香港理工大学高级副校长(研究及创新)赵汝恒、香港理工大学协理副校长（内地研究拓展）董澄、香港理工大学合肥技术创新研究院院长陈武登台共同揭牌，为InnoHub创业中心拉开序幕。",
      },
      { type: "image",content:  _newsImageObj.new1[4] },
            {
        type: "text",
        content:
          " 中国工程院院士、英国皇家工程院院士陈清泉，人工智能领域知名专家杨红霞等一批校内外专家受聘为研究院专家委员会委员，专家委员会聘任环节由合肥市副市长何逢阳、香港理工大学协理副校长（内地研究拓展）董澄上台为研究院专家委员会专家代表颁发聘书。专家名单为：陈清泉、杨红霞、陈翠芳、陈武、严锋、刘文、方明、徐蕾、张立野、黄叙新、裴晓辉、刘军、徐正安、章晓军、陈建新。",
      },
      { type: "image",content:  _newsImageObj.new1[5] },
      { type: "image",content:  _newsImageObj.new1[6] },
      {
        type: "text",
        content:
          "合作项目签约环节包含香港理工大学与合肥理工学院签约、香港理工大学与中国科大附属第一医院签约、香港理工大学合肥技术创新研究院战略合作签约、香港理工大学合肥技术创新研究院孵化企业介绍。首先, 由香港理工大学高级副校长(研究及创新)赵汝恒、合肥理工学院党委副书记、校长吴玉程作为双方学校代表, 上台为香港理工大学与合肥理工学院合作项目签约。",
      },
      { type: "image",content:  _newsImageObj.new1[7] },
      {
        type: "text",
        content:
          "接着, 由香港理工大学医疗科技与资讯学系系主任、研究院肿瘤放疗疗效管理辅助机器人研发中心主任蔡璟与中国科大附属第一医院(安徽省立医院)副院长、中国科大附属第一医院西区(安徽省肿瘤医院)院长袁双虎为双方代表, 上台为香港理工大学与中国科大附属第一医院合作进行签约。",
      },
      { type: "image",content:  _newsImageObj.new1[8] },
      {
        type: "text",
        content:
          "其次, 研究院与中国移动通信集团安徽有限公司、合肥理工学院、安徽中科太赫兹科技有限公司、科大硅谷服务平台(安徽)有限公司、兴泰控股(香港)有限公司、合肥市人才发展集团、江苏二十六度节能科技有限公司签署战略合作协议,由研究院陈武院长上台与各企业代表签署战略合作协议。",
      },
      { type: "image",content:  _newsImageObj.new1[9] },
      {
        type: "text",
        content:
          "最后, 由研究院副院长严锋上台与研究院InnoHub创业中心首批入驻企业代表合影留念, 首批入驻企业包含:香港知感科技有限公司、爱思美科技有限公司、北京微摩尔科技有限公司、星络科技有限公司、天驭创新有限公司。",
      },
      { type: "image",content:  _newsImageObj.new1[10] },
      {
        type: "text",
        content:
          " 此次香港理工大学合肥技术创新研究院揭牌投运活动顺利举办象征着研究院正式启航，研究院将整合港理大国际化科研资源与合肥产业优势，打造国际一流的产学研合作平台 ，并进一步深化皖港协同，汇聚创新力量，开启皖港创新合作新篇章。",
      },
    ],
  },
   {
    id: 2,
    title:
      "香港理工大学合肥技术创新研究院特邀陈清泉院士、杨红霞教授开展专题学术讲座",
    date: "2025-12-04 21:45:29",
    coverImg: newsCoverList.value[1],
    contentDif: [
      {
        type: "text",
        content:
          "12月4日，香港理工大学合肥技术创新研究院（以下简称“研究院”）成功举办专题学术讲座。本次活动聚焦人工智能与能源、汽车领域的交叉创新主题。研究院特邀专家委员会委员国际院士科创中心创始人陈清泉院士，以及AI首席专家、香港理工大学电子计算学系杨红霞教授担任主讲嘉宾。陈清泉院士是香港首位中国工程院院士，同时兼任英国皇家工程院院士、香港工程院院士暨高级顾问、香港理工大学杰出讲座教授及世界电动车协会创始暨轮值主席，在电动汽车与能源系统领域享有国际声誉，被誉为“亚洲电动汽车之父”。杨红霞教授现任香港理工大学电子计算学系教授、计算机及数学科学学院副院长（环球事务），是我国人工智能领域具有重要影响的科学家之一。杨教授团队在生成式人工智能（GenAI）领域成就卓著，其研究成果曾获世界人工智能大会SAIL奖、国家科学技术进步奖等顶级荣誉，她本人也屡获福布斯中国科技女性榜、AI 2000最具影响力学者等殊荣。讲座由香港理工大学有机电子学讲座教授、有机电子研究中心主任、研究院副院长严锋教授主持。活动现场吸引了来自香港理工大学、中国科学技术大学、合肥工业大学、安徽大学、合肥理工学院等多所高校的师生，以及相关科技型企业代表共计百余人参与讲座。",
      },
    { type: "image", content: _newsImageObj.new2[0]},
    ]}
    ]);

export { professorsInfo, stationInfo,contactList,tenderingInfo,recruitmentInfo,newsInfo }