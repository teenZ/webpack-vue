<template>
    <div id="app">
        <header>
            <router-link to="/leo">Leo</router-link>
            <router-link to="/young">Yang</router-link>
            <router-link to="/leo/luoyu">罗玉</router-link>
            <router-link to="/leo/runyu">天帝</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style scoped lang="less">
    #app{
        color: red;
    }
</style>


