import { createApp } from 'vue'
import { setupRouter } from './router/index'
import './style.css'
import App from './App.vue'
const app = createApp(App);
setupRouter(app);


app.mount('#app')
