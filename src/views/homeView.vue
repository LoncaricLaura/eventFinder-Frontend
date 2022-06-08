<template>
    <div
        class="bg-gradient-to-b from-slate-700 to-gray-900 h-[100vh] py-[150px] px-[30px] sm:px-[50px] md:px-[50px] lg:px-[100px]"
    >
        <div
            class="flex justify-start md:items-center flex-col lg:flex-row w-full"
        >
            <div
                class="flex flex-col gap-y-12 md:gap-y-32 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-left text-white w-[80%] lg:w-[50%]"
            >
                <div class="">Looking for a party ?</div>

                <div class="flex rounded-full bg-gray-700 py-1 md:py-2 px-4">
                    <button class="flex items-center justify-center">
                        <svg
                            class="w-6 h-6 text-white"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                            ></path>
                        </svg>
                    </button>
                    <input
                        type="text"
                        class="ml-2 px-4 py-2 w-full bg-inherit text-xl text-white"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div
                class="top-32 flex items-top justify-center md:justify-center w-full opacity-50 mt-12 ml-0 lg:ml-44"
            >
                <img
                    src="/src/assets/party.png"
                    class="h-[400px] md:h-[700px]"
                />
            </div>
            <div></div>
        </div>
    </div>
</template>
