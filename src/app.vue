<template>
    <div id="app">
        <router-view name="header" class="header">dddd</router-view>
        <div class="main">
            <router-view name="sidebar" class="sidebar"></router-view>
            <router-view name="content" class="content"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app' // 不要取和Html标签冲突的名字
}
</script>

<style scoped lang="less">
    #app{
        width: 100%;
        height: 100%;
        color: red;
        display: flex;
        flex-direction: column;
        .header {
            background: pink;
            flex: 0 0 80px;
        }
        .main {
            flex: 1;
            display: flex;
            .sidebar {
                flex: 0 0 120px;
                background: plum;
            }
            .content {
                flex: 1;
                background: #ccffee;
            }
        }
    }
    
</style>


