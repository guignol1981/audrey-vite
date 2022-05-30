<template>
    <div class="group relative mt-8 aspect-square lg:mt-0">
        <div
            class="polaroid relative inset-0 overflow-hidden bg-gray-200 p-4 transition duration-1000"
        >
            <img
                src="@/assets/audrey.jpg"
                alt=""
                class="transition group-hover:brightness-110"
            />
            <p class="flex w-full justify-center py-12 text-3xl text-gray-600">
                <!-- Audrey Mainguy -->
            </p>
        </div>
        <div
            class="absolute inset-x-0 -top-10 z-10 mx-auto h-20 w-36 bg-yellow-100/25 backdrop-blur-lg"
        ></div>
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>

<style scoped>
.polaroid {
    box-shadow: 4px 4px 4px 0px #80808082;
}
</style>
