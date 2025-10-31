import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 阿里字体图标 
import './assets/iconali/iconfont.css'; 
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入样式

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
