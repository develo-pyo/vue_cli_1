<template>
  <div>
    <h1>Test Code</h1>
    <p>{{name}}</p>
    <DevPyo />
  </div>
</template>

<script>
//path 에서 @ 는 source를 가리킨다.
import DevPyo from '@/components/DevPyo.vue';
export default {
  components : {
    DevPyo
  },
  data(){
    return{
      name: 'devpyo'
    }
  }
}
</script>

// scoped 가 있을 경우 현재 html 에만 적용
<style scoped>  
h1 {
  color: red
}
</style>