<template>
    <header class="header">
        <div class="header__left">
            <router-link :to="'/'">
                <img class="header__logo" src="@/assets/brand.svg">                   
            </router-link>
        </div>
        <div class="header__right">
            <p class="header__text" v-for="icon in icons"> 
                <router-link :to=" icon.path ">
                    {{ icon.title}}                   
                </router-link>
            </p>
            <button class="header__donate" >
                <router-link :to="'donate'">
                    Donate Today               
                </router-link>
            </button>
            
        </div>
        
    </header>
</template>
<script>
export default {
    data(){
        return{
            icons :[
                {
                    path:'/our-dogs',
                    title:'Adopt a Dog',
                },
                {
                    path:'/help',
                    title:'Ways to help',
                },
                {
                    path:'/blog',
                    title:'Blog',
                },
                {
                    path:'/Selection',
                    title:'Contact us',
                },

            ]
            

        }
    }
    
}           
</script>
<style>

</style>
