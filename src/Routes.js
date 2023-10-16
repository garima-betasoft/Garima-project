import HomeComponent from './components/HomeComponent.vue'
import VueRouter from "vue-router";
import AboutusComponent from '@/components/AboutusComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegistrationComponent from './components/RegistrationComponent.vue'
const routes=[
    {
        name:'HomeComponent',
        path:'/',
        component:HomeComponent
    },
    {
        name:'AboutusComponent',
        path:'/AboutusComponent',
        component:AboutusComponent
    },
    {
        name:'LoginComponent',
        path:'/LoginComponent',
        component:LoginComponent
    },
    {
        name:'RegistrationComponent',
        path:'/RegistrationComponent',
        component:RegistrationComponent
    },
]

const router=new VueRouter({
    routes
})

export default router;