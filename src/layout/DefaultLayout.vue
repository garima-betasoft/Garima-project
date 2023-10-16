<template>
    <v-app>
        <NavigationComponent/>
        <router-view></router-view>        
    </v-app>
</template>
<script>
    import NavigationComponent from '../components/NavigationComponent.vue'
    export default{
        components:{
            NavigationComponent,
        }
    }
</script>