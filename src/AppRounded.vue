<template>
    <div class="background">
        <div class="p-2">
            <div class="flex items-center justify-between bg-green-200 rounded-tr-xl">
                <div>
                    <img class="h-14" alt="nice" src="./assets/nice.png" />
                </div>
                <div class="flex flex-row space-x-10">
                    <div>menu 1</div>
                    <div>menu 2</div>
                    <div>menu 3</div>
                </div>
                <div class="py-1 mr-10 bg-black text-white px-8 rounded-xl">option</div>
            </div>
            <div class="flex items-center justify-evenly bg-green-200 pt-10 rounded-tl-xl rounded-bl-xl rounded-br-xl">
                <div>
                    <img alt="goose" src="./assets/images/goose.png" />
                </div>
                <div>
                    <div class="title text-9xl">Fall guys</div>
                    <div>
                        <div>Subtitles</div>
                        <div>Buttons</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-flow-col justify-stretch mt-2">
                <div class="grid justify-items-center bg-gray-500 rounded-xl mr-2 text-white title text-6xl py-8">
                    <div class="">
                        <img class="h-32" alt="nice" src="./assets/images/diamonds.webp" />
                    </div>
                    <div class="">Don't be afraid</div>
                </div>
                <div class="grid justify-items-center bg-indigo-400 rounded-xl text-white title text-6xl py-8">
                    <div class="">Have fun</div>
                    <div class="">
                        <img class="h-32" alt="nice" src="./assets/images/diamond.png" />
                    </div>
                </div>
            </div>
            <div class="flex">
                <ButtonRounded link="/app-glass" name="Home rounded" />
                <ButtonRounded link="/app-text-animation" name="Text animation" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonRounded from "./components/ButtonRounded.vue";
export default {
    name: "AppRounded",
    components: {
        ButtonRounded,
    },
    methods: {},
};
</script>

<style>
#app {
    text-align: center;
}

.background {
    background-color: black;
}
</style>
