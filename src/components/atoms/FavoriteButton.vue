<template>
<!-- ボタンの画像URLの渡し方要確認 -->
  <button><img :src="require(`@/assets/img/${imageUrl}`)" class="button-favorite" alt="お気に入りボタン"></button>
</template>
<script>
export default {
  props:{
    imageUrl:String,
  },
  computed:{
    backgroundUrl(){
      return this.imageUrl;
    }
  },
}
</script>
<style scoped>
  .button-favorite{
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