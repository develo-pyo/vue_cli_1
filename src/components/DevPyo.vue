<template>
    <div>
        <p>{{name}}</p><br>
        <button @click="updateName">updateButton</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name : 'devpyo'
        }
    } ,
    methods : {
        updateName(){
            this.name='devpyo updated';
        }
    }
}
</script>

<style scoped>

</style>