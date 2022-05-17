<template>
    <div class="group relative aspect-square">
        <div
            class="polaroid absolute inset-0 -mt-4 bg-red-400 transition group-hover:rotate-0 lg:mt-0 lg:rotate-3"
        ></div>
        <div
            class="polaroid absolute inset-0 -mt-2 bg-blue-200 transition group-hover:rotate-1 lg:mt-0 lg:-rotate-2"
        ></div>
        <div
            class="polaroid relative inset-0 bg-gray-200 p-4 transition group-hover:rotate-2"
        >
            <img src="@/assets/audrey.jpg" alt="" />
            <p class="flex w-full justify-center py-12 text-3xl text-gray-600">
                Audrey Mainguy
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
