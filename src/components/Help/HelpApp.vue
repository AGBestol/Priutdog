<template>
    <div class="help-latest">
        <p class="help-latest__text">Some <br>
            ways you can <span>Help</span>
        </p>
        <img class="help-latest__dot" src="@/assets/fondog/dot.svg">
    </div>
    <div class="content-1">
            <img src="@/assets/help/1.png">
            <div class="content-1__info" >
                <div class="content-1__info_plashka">
                    <p>One</p>
                </div>
                <p class="content-1__info_title">Volunteer your time</p>
                <p class="content-1__info_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    <br>
                    <br>
                    Ullamcorper primis lacinia enim vulputate rutrum convallis sociosqu felis senectus habitasse curae, vivamus gravida lectus mi platea suspendisse ultricies augue magnis arcu imperdiet nulla, dis eros habitant sed maecenas facilisis hendrerit tortor scelerisque nam.
                    <br>
                    <br>
                    Vestibulum non integer libero felis interdum eget etiam montes arcu, penatibus facilisi a egestas cursus quis accumsan ridiculus, pharetra curae donec scelerisque bibendum senectus nec viverra.
                </p>
            </div>
    </div>
    <div  class="volunteer-cards">
        <div v-for="card in cards" class="volunteer-cards__card">
            <div class="volunteer-cards__card_circle">
                <img :src="card.img">
            </div>
            <p class="volunteer-cards__card_title">{{ card.title }}</p>
            <p class="volunteer-cards__card_text">{{ card.text }} </p>
        </div>
        
    </div>
    <p class="text">If you have these <span>skills</span>  we’d love to meet you!</p>
    <div class="plashka-volunteer">
        <p class="plashka-volunteer__text">Become a volunteer</p>
    </div>

    <div class="content-2">
        <div class="content-2__info" >
            <div class="content-2__info_plashka">
                <p>One</p>
            </div>
            <p class="content-2__info_title">Foster an animal in need</p>
            <p class="content-2__info_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                <br>
                <br>
                Ullamcorper primis lacinia enim vulputate rutrum convallis sociosqu felis senectus habitasse curae, vivamus gravida lectus mi platea suspendisse ultricies augue magnis arcu imperdiet nulla, dis eros habitant sed maecenas facilisis hendrerit tortor scelerisque nam.
                <br>
                <br>
                Vestibulum non integer libero felis interdum eget etiam montes arcu, penatibus facilisi a egestas cursus quis accumsan ridiculus, pharetra curae donec scelerisque bibendum senectus nec viverra.
            </p>
        </div>
        <img src="@/assets/help/2.png">
    </div>
    <div  class="carer-cards">
        <div v-for="card in carercards" class="carer-cards__card">
            <div class="carer-cards__card_circle">
                <img :src="card.img">
            </div>
            <p class="carer-cards__card_title">{{ card.title }}</p>
            <p class="carer-cards__card_text">{{ card.text }} </p>
        </div>
        
    </div>
    <div class="plashka-carer">
        <p class="plashka-carer__text">Become a foster Carer</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cards:[
                {
                    text: 'Provide general care to our rescue animals including, feeding, washing and grooming',
                    img: require ('@/assets/help/volunteer-cards/1.svg'),
                    title: 'care',
                },
                {
                    text: 'Take our dogs for daily walks and help socialise them',
                    img: require ('@/assets/help/volunteer-cards/2.svg'),
                    title: 'Daily Walks',
                },
                {
                    text: 'Write creative bios and content for our website and social channels',
                    img: require ('@/assets/help/volunteer-cards/3.svg'),
                    title: 'Content',
                },
                {
                    text: 'Photograph our new dogs to share them with prospective owners',
                    img: require ('@/assets/help/volunteer-cards/4.svg'),
                    title: 'Shooting',
                },

            ],
            carercards:[
                {
                    text: 'Contact us to apply for the Foster Care program',
                    img: require ('@/assets/help/carer-cards/1.svg'),
                    title: 'Contact',
                },
                {
                    text: 'Attend an information session and complete your application form',
                    img: require ('@/assets/help/carer-cards/2.svg'),
                    title: 'Form',
                },
                {
                    text: 'Have your property inspected for suitability',
                    img: require ('@/assets/help/carer-cards/3.svg'),
                    title: 'Property',
                },
                {
                    text: 'Become a foster carer and make a difference to animals in need',
                    img: require ('@/assets/help/carer-cards/4.svg'),
                    title: 'Carer',
                },

            ]
            
        }
    },
}

</script>