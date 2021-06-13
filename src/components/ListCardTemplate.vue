<template>
  <div class="main">
    <h2 class="main__title">{{title}}</h2>
    
  </div>
</template>
<script>
export default {
  props:{
    title:"",
  }
};
</script>
<style scoped>
  .main{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 30px;
    width: 500px;
  }
  .main__title{
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

</style>