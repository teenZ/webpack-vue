<template>
    <div>
        <h1>哦还是被你发现了</h1>
        <p>{{msg}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'leo',
    data() {
        return {
            msg: '这是大哥Leo'
        }
    },
    mounted: function(){
       this.test(); 
    },
    methods: {
        test(){
            console.log(this.$route);
        }
    }
}
</script>
