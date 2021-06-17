<template>
  <button class="button-favorite"></button>
</template>
<script>
export default {

}
</script>
<style scoped>
  .button-favorite{
    background: url(../../assets/img/favorite_off.png) center center no-repeat;
    background-size: contain;
    border: 0;
    border-radius: 70px;
    cursor: pointer;
    height: 70px;
    width: 70px;
  }
  .button-favorite:hover{
    filter: brightness(120%);
  }
</style>