
<template>
    <div>
        <p><router-link to="/home/leo">vue-router</router-link></p>
        <p><router-link :to="{name: 'cycle'}">vue-cycle</router-link></p>   
    </div> 
</template>

<script>
export default {
    name: 'sidebar'
}
</script>
 <style lang="less" scoped>

</style>
