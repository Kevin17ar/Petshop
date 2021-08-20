import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit'
import 'mdb-ui-kit/css/mdb.min.css'


createApp(App).use(router).mount('#app')
