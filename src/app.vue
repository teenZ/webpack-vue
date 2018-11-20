<template>
    <div id="app">
        <router-view name="idol" class="header"></router-view>
        <router-view name="scene" class="view one"></router-view>
        <router-view name="experience" class="view two"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app' // 不要取和Html标签冲突的名字
}
</script>

<style scoped lang="less">
    #app{
        color: red;
    }
    .header {
        width: 100%;
        height: 200px;
        border: 1px solid thistle;
        box-sizing: border-box;
    }
    .view{
        border: 1px solid yellowgreen;
        height: 300px;
        float: left;
        box-sizing: border-box;
        width: 50%;
    }
    
</style>


