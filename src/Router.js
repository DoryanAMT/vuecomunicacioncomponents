import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import PadreDeportes from './components/PadreDeportes.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import SumaCheckbox from './components/SumaCheckbox.vue'
import MenuTablaMultiplicar from './components/MenuTablaMultiplicar.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'

//  CREAMOS UNA CONSTANTE ARRAY PARA LAS RUTAS
const myRoutes = [
    {
        path: "/", component: HomeComponent,
    },
    {
        path: "/sumacheckbox", component: SumaCheckbox,
    },
    {
        path: "/deportes/:id?", component: PadreDeportes,
    },
    {
        path: "/numerodoble/:numero?", component: NumeroDoble,
    },
    {
        path: "/menutablamultiplicar", component: MenuTablaMultiplicar,
    },
    {
        path: "/tablamultiplicar/:numero?", component: TablaMultiplicar, name: 'tablamultiplicar',
    },

]


//  CREAREMOS UNA COSNTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//  DICHO NOMBRE DE CONSTATE SERA EL QUE UTILIZAREMOS DENTRO DE Mani.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//  POR ULTIMO, EXPORTAMOS LA CONSTANTE router PARA SER UTILIZDA
//  EN App

export default router;