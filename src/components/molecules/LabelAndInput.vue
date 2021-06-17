<template>
  <div class="my-input">
    <label for="input" class="my-input__label">{{label}}</label>
     <input class="my-input__input" id="input" :type="type" :value="value" @input="$emit('input',$event.target.value)" />
  </div>
</template>
<script>
export default {
  props:{
    label:String,
    type:{
      type:String,
      default:"text",
    }
  },
  data(){
    return {
      value:"",
    }
  },
}
</script>
<style scoped>
  .my-input{
    display: flex;
    height: 30px;
    list-style: none;
    margin: 10px 0;
    width: 100%;
  }
  .my-input__label{
    line-height: 30px;
    width: 35%;
  }
  .my-input__input{
    height: 100%;
    width: 65%;
  }
</style>