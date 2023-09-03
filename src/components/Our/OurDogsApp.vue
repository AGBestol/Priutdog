<template>
    <div class="zag">
        <p class="zag__text">Our<br>
           <span class="zag__text_dogs">Dogs</span>  
        </p>
        <img src="@/assets/fondog/dot.svg">
    </div>
    <div class="zag__dogs">
        <div class="zag__dogs_card" v-for="card in cards">
            
            <img :src="card.img">
            <div class="zag__dogs_card-line">
                <p class="zag__dogs_card-line--text">{{card.name}}</p>
                <div class="zag__dogs_card-line--age">
                    <p class="zag__dogs_card-line--age-text">
                        {{ card.age }}
                    </p>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            names: ['Ben', 'Wodan', 'Alex', 'Felix'],

            cards:[
                {
                    name: "Ben",
                    img: require("@/assets/ourdogs/1.png"),
                    age: "Puppy",
                },
                {
                    name: "Wodan",
                    img: require("@/assets/ourdogs/2.png"),
                    age: "Adult",
                },
                {
                    name: "Lassie",
                    img: require("@/assets/ourdogs/3.png"),
                    age: "Puppy",
                },
                {
                    name: "Bartney",
                    img: require("@/assets/ourdogs/4.png"),
                    age: "Puppy",
                },
                {
                    name: "Bailey",
                    img: require("@/assets/ourdogs/5.png"),
                    age: "Adult",
                },
                {
                    name: "Junior",
                    img: require("@/assets/ourdogs/6.png"),
                    age: "Senior",
                },
            ],

            age: 21,
        }
    },
}
</script>
