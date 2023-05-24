import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(({store})=>{
    store.author='shine'
    store.useName= function(){
        console.log("function is global")
    }
})
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')