<template>
    <section
        class="relative mx-auto max-w-full px-2 py-12 md:max-w-2xl lg:max-w-5xl"
    >
        <ul role="list" class="space-y-6">
            <li
                v-for="(service, i) in services"
                :key="i"
                class="border-b-2 odd:border-r-2 even:border-l-2 md:flex"
            >
                <div class="relative h-full">
                    <img
                        class="aspect-[3/2] w-full object-cover md:h-full"
                        :src="service.src"
                        alt="famille"
                    />
                    <div class="absolute inset-0 grid place-content-center">
                        <h2
                            class="bg-gradient-to-tr from-sky-100/60 to-sky-300/60 p-12 text-3xl font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm backdrop-sepia"
                        >
                            {{ service.name }}
                        </h2>
                    </div>
                    <secondary-button-vue class="absolute top-2 right-2"
                        >tarifs</secondary-button-vue
                    >
                </div>
                <p class="mt-2 p-2 leading-7 text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus ali4uam, quod reiciendis facere perspiciatis
                    neque maxime, quo placeat quia autem eaque reprehenderit
                    nesciunt dicta adipisci error ipsum nobis sapiente aut.
                </p>
            </li>
        </ul>
        <button
            class="fixed bottom-3 right-3 rounded-md bg-white px-3 py-2 ring-2 ring-black"
        >
            contactez-moi
        </button>
    </section>
</template>

<script>
import SecondaryButtonVue from '../components/buttons/SecondaryButton.vue';
export default {
    components: {
        SecondaryButtonVue,
    },
    setup() {
        const services = [
            {
                name: 'corpo',
                src: 'https://images.unsplash.com/photo-1508161250369-a7ecbdfb67fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                name: 'famille',
                src: 'https://media.istockphoto.com/photos/colorful-garden-picture-id1362513839?b=1&k=20&m=1362513839&s=170667a&w=0&h=QvcYwQ1D_e-YZJ2U6cG-KYd3qYv-lMCTbcZCMCzrTho=',
            },
            {
                name: 'mariage',
                src: 'https://media.istockphoto.com/photos/happy-parents-having-fun-while-piggybacking-their-small-kids-in-picture-id1324653833?b=1&k=20&m=1324653833&s=170667a&w=0&h=N9FgUJXykSyI_Mc1bOm_h7lAuTRSCmIKSVt1S0q-H3k=',
            },
        ];

        return {
            services,
        };
    },
};
</script>
