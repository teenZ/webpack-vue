
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
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
</style>
