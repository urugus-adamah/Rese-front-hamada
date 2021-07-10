<template>
  <div class="nav__card">
    <p class="card__label">場所</p>
    <MySelect 
      :values="areas"
      @selectedValue="selectedArea"
    />
    
    <p class="card__label">ジャンル</p>
    <MySelect
      :values="genres"
      @selectedValue="selectedGenre"
    />
    <MyButton class="button--search" caption="検索" @myButton-cliked="clickHandler" />
  </div>
</template>
<script>
import MySelect from  '../atoms/MySelect';
import MyButton from  '../atoms/MyButton';
export default {
  components:{
    MySelect,
    MyButton,
  },
  props:{
    areasData:Array,
    genresData:Array,
  },
  computed:{
    areas(){
      return this.areasData;
    },
    genres(){
      return this.genresData;
    },
  },
  methods:{
    clickHandler(){
      this.$emit('button-clicked');
    },
    selectedArea(value){
      this.$emit("selectedArea",value);
    },
    selectedGenre(value){
      this.$emit("selectedGenre",value);
    }
  }
}
</script>
<style scoped>
  .nav__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 20px 0;
    padding: 15px;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .card__label{
    padding-bottom: 5px;
  }
</style>