<template>
    <div class="fon">
        <div class="fon__left">
            <div class="afisha">
                <div>
                    <p class="afisha__name">Animal</p>
                    <p class="afisha__name">connected</p>
                </div>
                <p class="afisha__lorem">Lorem ipsum dolor sit amet consectetur. Donec habitant habitant <br> purus aliquet lacus feugiat ac. Praesent sed justo tortor amet. <br> Nunc vitae quis dictum et ultrices nisl.</p>
                <div class="afisha__buttons">
                    <button class="afisha__buttons__button__afisha">
                        <p class="afisha__buttons__button__afisha__text">Adopt, Don’t shop</p>
                    </button>
                    <img class="afisha__buttons_dot" src="@/assets/fondog/dot.svg">
                </div>
            </div>
        </div>
        <div class="fon__many-dog">
            <div class="fon__many-dog_fcolumn">
                <img src="@/assets/fondog/1-1.png">
                <img src="@/assets/fondog/1-2.png">
                <img src="@/assets/fondog/1-3.png">
                <img src="@/assets/fondog/1-4.png">
            </div>
            <div class="fon__many-dog_tcolumn">
                <img src="@/assets/fondog/2-1.png">
                <img src="@/assets/fondog/2-2.png">
                <img src="@/assets/fondog/2-3.png">
                <img src="@/assets/fondog/2-4.png">
            </div>
            <div class="fon__many-dog_frcolumn">
                <img src="@/assets/fondog/3-1.png">
                <img src="@/assets/fondog/3-2.png">
                <img src="@/assets/fondog/3-3.png">
                <img src="@/assets/fondog/3-4.png">
            </div>
        </div>
    </div>
    <div class="card">
            <div v-for="card in cards"  class="card__card">
                <p class="card__card_zag" v-html="card.zag"></p>
                <p class="card__card_lorem">Lorem ipsum dolor sit amet consectetur. <br> Sed amet egestas pellentesque <br> suspendisse feugiat.</p>
                <p class="card__card_link">view more</p>
                    
            </div>
    </div>
    <div class="paw_alert">
        <div class="paw_alert__zag_paw_alert">
            <p class="paw_alert__zag_paw_alert_text">Paw alert</p>
        </div>
        <div class="paw_alert__about_us">
            <div class="paw_alert__about_us_name">
                <p class="paw_alert__about_us_name-1">A little bit</p>
                <p class="paw_alert__about_us_name-2">about us.</p>
            </div>
            <p class="paw_alert__about_us_lorem">Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed Border Collie do eiusmod tempor incididunt ut labore et dolore <br> Dachshund magna aliqua. Tempor orci eu Shiba Inu lobortiselementum nibh. Consequat id Golden Retriever porta nibh <br> venenatis crassed. Tempor orci eu Abyssinian lobortis elementum nibh. Consequat id Ocicat porta nibh venenatis cras sed. <br> Vitae suscipit tellus mauris adiam. Vestibulum lectus Ragdoll mauris ultrices eros in Himalayan cursusturpis. Vestibulum lectus <br> Beagle mauris ultrices eros in Siberian Husky cursus turpis.</p>
            <button class="paw_alert__about_us_contact_us">
                <p class="paw_alert__about_us_contact_us-name_button">Contact us</p>
            </button>
        </div>
    </div>
    <div class="animal">
        <div class="animal__zag_animal">
            <p class="animal__zag_animal_text">animal</p>
        </div>
        <div class="animal__column">
            <div class="animal__column_1">
                <div class="animal__column_1-1">
                    <img src="@/assets/adopt_us/1-1.png">
                    <div class="animal__column_bottom">
                        <p class="animal__column_bottom-text1">Ben</p>
                        <div class="animal__column_bottom-text2">
                            <p>adult</p>
                        </div>
                    </div>
                </div>
                <div class="animal__column_1-2">
                    <img src="@/assets/adopt_us/1-2.png">
                    <div class="animal__column_bottom">
                        <p class="animal__column_bottom-text1">Hachiko</p>
                        <div class="animal__column_bottom-text2">
                            <p>adult</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="animal__column_2">
                <p class="animal__column_2-adopt_us">Adopt <span class="animal__column_2-adopt_us--us">us</span></p>
                <div class="animal__column_2-1">
                    <img src="@/assets/adopt_us/2-1.png">
                    <div class="animal__column_bottom">
                        <p class="animal__column_bottom-text1">Lassie</p>
                        <div class="animal__column_bottom-text2">
                            <p>adult</p>
                        </div>
                    </div>
                </div>
                <div class="animal__column_2-2">
                    <img src="@/assets/adopt_us/2-2.png">
                    <div class="animal__column_bottom">
                        <p class="animal__column_bottom-text1">Bailey</p>
                        <div class="animal__column_bottom-text2">
                            <p>kitten</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="animal__column_3">
                <div class="animal__column_3-1">
                    <img src="@/assets/adopt_us/3-1.png">
                    <div class="animal__column_bottom">
                        <p class="animal__column_bottom-text1">Diesel</p>
                        <div class="animal__column_bottom-text2">
                            <p>kitten</p>
                        </div>
                    </div>
                </div>
                <div class="animal__column_3-2">
                    <img src="@/assets/adopt_us/3-2.png">
                    <div class="animal__column_bottom">
                        <p class="animal__column_bottom-text1">Junior</p>
                        <div class="animal__column_bottom-text2">
                            <p>kitten</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="animal__all_dogs_text">View all dogs</p>
    </div>
    <div class="blog">
        <div class="blog__zag_blog">
            <p class="blog__zag_blog_blog">Blog</p>
        </div>
        <div class="blog__rasp">

            <p class="blog__rasp_latest">Latest <span class="blog_latest-posts">blog posts</span></p>
        </div>
        <div class="blog__cards">
            <div v-for="blog in blogs" class="blog__cards_card">
                <img class="blog__cards_card-img" :src="blog.img">
                <div class="blog__cards_card-adaptiv">
                    
                    <div class="blog__cards_card-adaptiv-row">
                        <div class="blog__cards_card-adaptiv-row--plashka">
                            <p>Blog post</p>
                        </div>
                        <p class="blog__cards_card-adaptiv-row--date">{{ blog.date }}</p>
                    </div>
                    <p class="blog__cards_card-adaptiv-text" v-html="blog.lorem"></p>
                    <div class="blog__cards_card-adaptiv-button">
                        <p>Read more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards:[
                {
                    zag:'I’d like to <br> adobt a dog.',
      

                },
                {
                    zag:'I’m interested in <br> volunteering.',
    

                },
                {
                    zag:'I’d like to <br> adobt a dog.',
                

                },
            ],
            blogs:[
                {
                    img: require('@/assets/blog/blog-thumbnail.png'),
                    date:'Februar 3, 2022',
                    lorem:'Starting your new Friendship <br> off on the right paw',
                },
                {
                    img: require('@/assets/blog/2.png'),
                    date:'March 20, 2022',
                    lorem:'Starting your new Friendship <br> off on the right paw',
                },
                {
                    img: require('@/assets/blog/3.png'),
                    date:'March 20, 2022',
                    lorem:'12 reason to adopt, don’t <br> shop!',
                },
            ],
        }
    },
}
</script>