<template>
    <div class="relative">
        <div class="polaroid relative -rotate-3 bg-gray-200 p-4 pb-24">
            <img src="@/assets/audrey.jpg" alt="" />
            <div class="absolute inset-x-0 top-0 -translate-y-1/2">
                <div
                    class="mx-auto h-20 w-32 bg-red-300/30 backdrop-blur-sm"
                ></div>
            </div>
        </div>
        <div
            class="polaroid absolute inset-0 -z-10 w-full rotate-3 bg-gray-200"
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
