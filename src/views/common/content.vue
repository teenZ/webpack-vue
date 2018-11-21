
<template>
    <div>
        hello, this is content
        <router-view class="real"></router-view>   
    </div> 
</template>

<script>
export default {
    name: 'content'
}
</script>
 <style lang="less" scoped>
.real{
    width: 100%;
    height: 400px;
}
</style>
