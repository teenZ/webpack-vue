<template>
    <div id="app">
        <router-view name="header" class="view header">dddd</router-view>
        <div class="main">
            <router-view name="sidebar" class="view sidebar"></router-view>
            <router-view name="content" class="view content"></router-view>
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
        font-size: 14px;
        display: flex;
        flex-direction: column;
        .view {
            box-sizing: border-box;
            border: 1px solid pink;
        }
        .header {
            flex: 0 0 80px;
        }
        .main {
            flex: 1;
            display: flex;
            .sidebar {
                flex: 0 0 120px;
            }
            .content {
                flex: 1;
            }
        }
    }
    
</style>


