<template>
    <div class="touch-zag">
        <p class="touch-zag__text">
            Stay <br> 
            <span class="touch-zag__text_dop"> in touch</span>
        </p>
        <img src="@/assets/fondog/dot.svg">
    </div>
    <div class="donate-imputs">
        <div class="donate-imputs__content">
            <img src="@/assets/donate/1.png"> 
            <div class="donate-imputs__content_pole">
                <div class="donate-imputs__content_pole-plachka">
                    <p class="donate-imputs__content_pole-plachka-text">Contact</p>
                </div>
                <p class="donate-imputs__content_pole-get">
                    Get in touch
                </p>
                <form class="donate-imputs__content_pole-inputs" action="#" method="get">
                    <div v-for="input in inputs" >
                        <input :placeholder="input.placeholder" class="donate-imputs__content_pole-inputs-input" style="outline:none;" >
                    </div>
                    <textarea class="donate-imputs__content_pole-inputs-massage" placeholder="Write a message*"></textarea>
                </form>
                <button class="donate-imputs__content_pole-button-submit">
                    <p>submit</p>
                </button>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    data() {
        return {
            inputs: [
                {
                    placeholder: 'Name*',
                },
                {
                    placeholder: 'Company Name',
                    
                },
                {
                    placeholder: 'Email*',
                    
                },
                {
                    placeholder: 'Phone number*',
                },
            ],
        }
    },
}
</script>