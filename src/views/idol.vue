<template>
    <div>
        <header>
            <router-link to="/home/leo">Leo</router-link>
            <router-link to="/home/young">Yang</router-link>
            <router-link to="/home/leo/luoyu">罗玉</router-link>
            <router-link to="/home/leo/runyu">天帝</router-link>
        </header>
        <router-view class="intro"></router-view>
    </div>
</template>

<script>
export default {
    name: 'idol',
    data() {
        return {
            msg: '这是大哥Leo'
        }
    },
    mounted: function(){
    },
    methods: {
    
    }
}
</script>
 <style lang="less" scoped>
 .intro{
    width: 80%;
    height: 150px;
    margin: auto;
 }
 </style>
 