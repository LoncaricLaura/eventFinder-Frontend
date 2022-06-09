<template>
    <div class="flex">
        >
        <div
            class="flex flex-col cursor-pointer m-12 p-12 h-[350px] w-[350px] sm:[430px] md:w-[500px] lg:w-[550px] bg-gray-700 bg-opacity-60 transition-all duration-500 ease-out hover:scale-[1.05] shadow-[0_35px_77px_-15px_rgba(0,0,0,0.44)] hover:shadow-[0_35px_77px_-17px_rgba(0,0,0,0.64)]"
        >
            <div
                class="flex justify-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
                {{ name }}
            </div>
            <div class="mt-4 text-white text-lg italic sm:text-lg md:text-xl">
                {{ category }}
            </div>
            <div class="my-12 text-xl text-white">{{ desc }}</div>
            <div
                class="flex flex-row justify-start items-end mt-4 text-gray-300 font-bold"
            >
                <p class="mr-4">{{ date }}</p>
                <p>{{ time }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'eventCard',
    props: ['name', 'category', 'desc', 'location', 'date', 'time'],
}
</script>
