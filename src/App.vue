<template>
    <AppHeader />
    <router-view />
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'

export default {
    components: {
        AppHeader,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
