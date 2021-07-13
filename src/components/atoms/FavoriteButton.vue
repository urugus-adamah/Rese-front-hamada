<template>
  <button class="favorite-button common-style" @click="clicked">
    <img 
      class="button__image common-style"
      :src="require(`@/assets/img/${imageUrl}`)"
      alt="お気に入りボタン"
    >
  </button>
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
  methods:{
    clicked(){
      this.$emit("switchImages");
    }
  },
}
</script>
<style scoped>
  .button__image{
    background-size: contain;    
    cursor: pointer;
  }
  .button__image:hover{
    filter: brightness(120%);
  }
  .favorite-button{
    padding: 0;
    background-color: transparent;
  }
  .common-style{
    border: 0;
    height: 70px;
    width: 70px;
    border-radius: 70px;

  }
</style>