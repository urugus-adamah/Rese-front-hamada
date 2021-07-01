<template>
  <div class="nav__wrap">
    <input class="input--shop-name" type="text" placeholder="店名で探す">
    <MyButton class="button--search" caption="検索" />
  </div>
</template>
<script>
import MyButton from '../atoms/MyButton';
export default {
  components:{
    MyButton,
  }
}
</script>
<style scoped>
  .nav__wrap{
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .input--shop-name{
    margin-bottom: 15px;
  }
</style>