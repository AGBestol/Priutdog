<template>
    <div class="blog-latest">
        <p class="blog-latest__text">Blog <br>
            <span>Latest</span>
        </p>
        <img class="blog-latest__dot" src="@/assets/fondog/dot.svg">
    </div>
    
    <div class="blogs">
        <div v-for="card in cards" class="blogs__blog">
            <div class="blogs__blog_info">
                <div class="blogs__blog_info-toprow">

                    <div class="blogs__blog_info-toprow-plashka" :style="`background: ${card.color}`">
                        <p>{{card.plashkaText}}</p>
                    </div>
                    <p class="blogs__blog_info-toprow-date">
                        {{ card.date }}
                    </p>
                </div>
                <p class="blogs__blog_info-title">
                    {{ card.title }}
                </p>
                <p class="blogs__blog_info-text" v-html="card.text"></p>
                <div class="blogs__blog_info-rowbottom">
                    <p class="blogs__blog_info-rowbottom-adoptmore">
                        Adopt more
                    </p>
                    <div class="blogs__blog_info-rowbottom-line"></div>
                </div>
            </div>
            <img :src="card.img">
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            cards: [
                {
                    color: '#ED705B',
                    plashkaText: 'Adopt',
                    date: 'March 20, 2022',
                    title: 'Starting your new Friendship off on the right paw',
                    text: 'Lorem ipsum dolor sit amet consectetur. Sit ac nisi imperdiet ut. Sed nunc placerat nunc eu fusce volutpat tincidunt adipiscing non.',
                    img: require('@/assets/cards/1.png'),
                },
                {
                    color: '#8C97CA',
                    plashkaText: 'Adopt',
                    date: 'March 19, 2022',
                    title: 'All the things to consider when choosing child friendly pets',
                    text: 'Lorem ipsum dolor sit amet consectetur. Sit ac nisi imperdiet ut. Sed nunc placerat nunc eu fusce volutpat tincidunt adipiscing non.',
                    img: require('@/assets/cards/2.png'),
                },
                {
                    color: '#DCCCBB',
                    plashkaText: 'Adopt',
                    date: 'March 19, 2022',
                    title: '12 reason to adopt, don’t shop!',
                    text: 'Lorem ipsum dolor sit amet consectetur. Sit ac nisi imperdiet ut. Sed nunc placerat nunc eu fusce volutpat tincidunt adipiscing non.',
                    img: require('@/assets/cards/3.png'),
                },
            ]
        }
    },
}
</script>
