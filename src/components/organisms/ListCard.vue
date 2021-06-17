<template>
  <div class="card">
    <h2 class="card__title">{{title}}</h2>
    <MyTable
      class="my-table"
      :button-caption="buttonCaption"
      :table="table"
    ></MyTable>
  </div>
</template>
<script>
import MyTable from '../molecules/MyTable.vue';
export default {
  components:{
    MyTable,
  },
  props:{
    title:String,
    table:Object,
    buttonCaption:String,
  },
};
</script>
<style scoped>
  .card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 30px;
    width: 500px;
  }
  .card__title{
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .my-table {
    width: 100%;
  }
</style>