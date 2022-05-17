<template>
    <div class="group relative mt-8 aspect-square lg:mt-0">
        <div class="absolute inset-0">
            <div
                class="-top-12 left-12 h-full rounded-full bg-yellow-logo/50 blur-3xl"
            ></div>
        </div>
        <div
            class="polaroid absolute inset-0 -mt-6 bg-yellow-logo p-4 transition duration-700 group-hover:-rotate-6 lg:mt-0 lg:rotate-3"
        >
            <img src="@/assets/audrey.jpg" alt="" />
            <p class="flex w-full justify-center py-12 text-3xl text-gray-600">
                <!-- Audrey Mainguy -->
            </p>
        </div>
        <div
            class="polaroid absolute inset-0 -mt-4 bg-green-logo p-4 transition duration-1000 group-hover:rotate-0 lg:mt-0 lg:-rotate-6"
        >
            <img src="@/assets/audrey.jpg" alt="" />
            <p class="flex w-full justify-center py-12 text-3xl text-gray-600">
                <!-- Audrey Mainguy -->
            </p>
        </div>
        <div
            class="polaroid absolute inset-0 -mt-2 bg-blue-logo p-4 transition duration-500 group-hover:rotate-6 lg:mt-0 lg:rotate-12"
        >
            <img src="@/assets/audrey.jpg" alt="" />
            <p class="flex w-full justify-center py-12 text-3xl text-gray-600">
                <!-- Audrey Mainguy -->
            </p>
        </div>
        <div
            class="polaroid relative inset-0 overflow-hidden bg-gray-200 p-4 transition duration-1000 group-hover:rotate-12"
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
