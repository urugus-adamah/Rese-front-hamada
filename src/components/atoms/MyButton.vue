<template>
  <button  @click.prevent="clickHandler" class="main-button" >{{caption}}</button>
</template>
<script>
export default {
  props:{
    caption:String,
  },
  methods:{
    clickHandler(){
      this.$emit('myButton-cliked');
    },
  },
};
</script>

<style scoped>
  .main-button {
    background-color:hsl(44, 30%, 50%);
    border:0;
    border-radius: 5px;
    color: #FDFDFD;
    cursor: pointer;
    padding: 10px 0;
    text-align: center;
    width: 100%;
  }
  .main-button:hover{
    background-color:hsl(44, 30%, 48%);
  } 
  .main-button:disabled{
    background-color:hsl(44, 30%, 70%);
    cursor: auto;
  }
</style>