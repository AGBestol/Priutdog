<template>
    <header class="header">
        <div class="header__left">
             <img class="header__logo" src="@/assets/brand.svg">
        </div>
        <div class="header__right">
            <p class="header__text" v-for="title in titles">{{ title }}</p>
            <button class="header__donate">Donate Today</button>
        </div>
        
    </header>
</template>
<script>
export default {
    data(){
        return{
            titles: ["Adopt a Dog", "Ways to help", "Blog", "Contact us"]

        }
    }
    
}            
</script>
<style>

</style>