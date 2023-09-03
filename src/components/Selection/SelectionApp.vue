<template>
    <div class="choice">
        <p class="choice__text">
            All the things to consider when <br>
            choosing child friendly pets
        </p> 
        <img class="choice__dot" src="@/assets/fondog/dot.svg">
    </div>
    <div class="parting-word">
        <img src="@/assets/selection/1.png">
        <div v-for='content in contents' class="parting-word__text">
            <p class="parting-word__text_title">
                {{ content.title }}
            </p>
            <p class="parting-word__text_content">
                {{ content.text }}
            </p>
        </div>
    </div>
    <div class="related">
        <div class="related__plashka">
            <p class="related__plashka_text">from Blog</p>
        </div>
        <p class="related__post">Related Post</p>
        <p class="related__view">view all post</p>
        <div  class="publications">
            <div v-for="publication in publications" class="publications__card" >
                <img class="publications__card_img" :src="publication.img">
                <div class="publications__card_info">
                    <div class="publications__card_info-plashka" :style="`background: ${publication.color}`" >
                        <p class="publications__card_info-plashka-text">{{publication.plashka}}</p>
                    </div>
                    <h2 class="publications__card_info-text">{{ publication.text }}</h2>
                    <p class="publications__card_info-read">Read more</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            contents:[
                {
                    title: 'Iste aspernatur dolorem consequatur consectetur labore et iste et.',
                    text: 'Dolores quia qui impedit soluta perferendis commodi vitae. Vitae tenetur occaecati quaerat eligendi et perspiciatis harum est doloribus. Et cum est similique earum saepe et. Dolorum sequi aperiam voluptates quam facere a ducimus atque quibusdam.',
                },
                {
                    title: 'Iste sunt corporis blanditiis voluptas eaque quis quia sapiente sapiente.',
                    text: 'Itaque sequi aliquam laudantium. Ut perferendis voluptatem sit officia atque officiis ad autem. Voluptates eaque possimus velit. Unde omnis vero molestiae quaerat iusto nam provident exercitationem commodi. In minus assumenda est similique qui voluptatem consequuntur consequatur. Ipsam cumque aliquam. Accusamus porro quae impedit aliquam ullam alias. Ut dolor sit omnis voluptatem in ut qui.',
                },
                {
                    title: 'Error eos iste amet.',
                    text: 'Explicabo aut quos est et sed distinctio. Alias quasi enim perspiciatis quidem placeat beatae ullam assumenda alias. Consequatur quidem deserunt. Tempora quis dolores qui provident est corrupti sint.At est doloribus laborum rerum quidem aspernatur voluptatem aperiam. Nisi enim est optio. Qui nihil debitis qui sunt ad. Dolorum ipsum natus ratione omnis sed. Aut voluptatum eligendi labore dolorem saepe. Omnis dolorem accusamus odit similique dolorem cupiditate.',
                },

            ],
            publications:[
                {
                    img: require('@/assets/selection/2.png'),
                    plashka: 'Adopt',
                    text: 'Starting your new friendship off on he right paw',
                    color: '#ED705B',
                    
                },
                {
                    img: require('@/assets/selection/3.png'),
                    plashka: 'Reasons',
                    text: '12 reason to adopt, don’t shop!',
                    color: '#DCCCBB',
                }
            ]
            
        }
    },
}

</script>