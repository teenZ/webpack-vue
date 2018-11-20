<template>
    <div class="young">
        <h1>那这个我就不遮遮掩掩了</h1>
        <p>{{msg}}</p>
        <img src="../assets/images/yy.jpg" alt="young" class="image">
    </div>
</template>

<script>
export default {
    name: 'young',
    data() {
        return {
            msg: '这是小弟Yang'
        }
    }
}
</script>

<style lang="less" scoped>
.image{
    width: 100px;
    height: auto;
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>
