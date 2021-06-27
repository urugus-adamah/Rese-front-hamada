<template>
  <div class="card">
    <h2 class="card__title">{{title}}</h2>
    <table class="card__table">
      <tr class="card__table__header">
        <th>{{table.th1}}</th>
        <th>{{table.th2}}</th>
        <th>{{table.th3}}</th>
        <th></th>
      </tr>
      <slot  name="data_table"></slot>
    </table>
  </div>
</template>
<script>
export default {
  props:{
    title:String,
    table:Object,
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
  .card__table{
    width: 100%;
  }
  .card__table__header{
    text-align: left;
  }
  .card__table tr{
    border-bottom: 1px solid #CCC;
  }
  .card__table td:nth-child(1){
    width: 30%;
  }
  .card__table td:nth-child(2){
    width: 30%;
  }
  .card__table td:nth-child(3){
    width: 20%;
  }
  .card__table td:nth-child(4){
    width: 20%;
  }
  .card__table  td{
    padding: 10px 10px 5px 0;
    vertical-align: middle;
  }
</style>