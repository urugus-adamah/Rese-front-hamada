<template>
  <div class="nav__wrap">
    <input
     :value="shop_name"
     @input="$emit('input', $event.target.value)"
     class="input--shop-name"
     type="text"
     placeholder="店名で探す"
    >

    <MyButton
      class="button--search"
      caption="検索"
      @myButton-cliked="clickHandler"
    />
  </div>
</template>
<script>
import MyButton from '../atoms/MyButton';
export default {
  data(){
    return {
      shop_name:""
    }
  },
  components:{
    MyButton,
  },
  methods:{
    clickHandler(){
      this.$emit('button-clicked');
    },
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