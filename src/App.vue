<template>
    <HeaderApp/>

    <RouterView>
    </RouterView>

    <FooterApp/>
    

</template>


<script>

import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
export default {
    components:{

        HeaderApp,
        FooterApp,
    },
    data() {
        return {
            name: "Агата",
            age: 21,


            
        }
    },
}
</script>



<style lang="scss">
@import '@/style/reset.scss';
@import '@/style/our.scss';
@import '@/style/style.scss';
@import '@/style/blog.scss';
@import '@/style/help.scss';
@import '@/style/selection.scss';

@font-face {
    font-family: "Quicksand";
    src: url('@/fonts/Quicksand.ttf');
}
</style>
