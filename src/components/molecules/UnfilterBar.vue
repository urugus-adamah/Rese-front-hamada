<template>
  <div class="unfilter">
    <button
      class="unfilter-button"
      v-for="(item,id) in list"
      :key="id"
      @click="clickedItem(item)"
      v-show="item !== ''"
    >
      {{item}} ×
    </button>
  </div>
</template>
<script>
export default {
  props:{
    filteringList:Object,
  },
  computed:{
    list(){
      return this.filteringList;
    }
  },
  methods:{
    clickedItem(item){
      this.$emit("clickedItem", item);
    }
  }
}
</script>
<style scoped>
  .unfilter{
    display: flex;
    background-color: #eee;
    border-radius: 5px;
    margin: 20px 0;
  }
  .unfilter-button{
    background-color:transparent;
    border-color: transparent;
    font-size: 14px;
    height: 20px;
    line-height: 14px;
    margin: 5px 0 5px 10px;

  }
  .unfilter-button:hover{
    background-color: #aaa;
    border-radius: 5px;
    color: #fefefe;
    cursor: pointer;
    transition-duration: 0.2s;
  }
</style>