/*
 * @Author: zhangpenghua
 * @Date: 2022-08-08 09:53:24
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-12-13 11:05:46
 */
import { createApp } from 'vue'
import { setupRouter } from './router/index'
import { setupStore } from './store/index'
import { Uploader, Button } from "vant";
import 'vant/lib/index.css';
import './style.css'
import App from './App.vue'
const app = createApp(App);
app.use(Uploader);
app.use(Button);
app.provide('zph', '张鹏华真帅！')
setupRouter(app);
setupStore(app);
app.mount('#app')
