<template>
  <div class="label-and-p">
    <label class="label-and-p__label">{{label}}</label>
    <p class="label-and-p__p">{{p}}</p>
  </div>
</template>
<script>
export default {
  props:{
    label:String,
    p:String,
  }
}
</script>
<style scoped>
  .label-and-p{
    display: flex;
    height: 30px;
    list-style: none;
    margin: 10px 0;
    width: 100%;
  }
  .label-and-p__label, 
  .label-and-p__p{
    line-height: 30px;
  }
  .label-and-p__label{
    width: 35%;
  }
</style>