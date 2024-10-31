import { createApp } from 'vue'
import App from './App.vue'

import router from './Router.js'
//  COMENZAMOS CREANDO NUESTRA CREACION DE APLICAION EN UNA
//  VARIABLE
var app = createApp(App)

//  SE UTILIZAR .use(router)
app.use(router).mount('#app')