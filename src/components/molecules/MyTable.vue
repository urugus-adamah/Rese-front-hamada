<template>
  <table class="section">
    <tr class="section__header">
      <th>{{table.th1}}</th>
      <th>{{table.th2}}</th>
      <th>{{table.th3}}</th>
      <th></th>
    </tr>
    <tr v-for="(data, id) in table.data" :key="id">
      <td>{{data.td1}}</td>
      <td>{{data.td2}}</td>
      <td>{{data.td3}}</td>
      <td class="table__cancel">
        <MyButton class="my-button" :caption="buttonCaption">{{buttonCaption}}</MyButton>
      </td>
    </tr>
  </table>
</template>
<script>
import MyButton from '../atoms/MyButton';
export default {
  components:{
    MyButton,
  },
  props:{
    buttonCaption:String,
    table:Object,
  },
  data(){
    return{
      caption:this.buttonCaption,
      convert_data:this.table,
    };
  },
};
</script>
<style scoped>

  .section__header{
    text-align: left;
  }
  .section tr{
    border-bottom: 1px solid #CCC;
  }
  .section td:nth-child(1){
    width: 30%;
  }
  .section td:nth-child(2){
    width: 30%;
  }
  .section td:nth-child(3){
    width: 20%;
  }
  .section td:nth-child(4){
    width: 20%;
  }
  .section td{
    padding: 10px 10px 5px 0;
    vertical-align: middle;
  }
  .my-button{
    padding: 2px;
  }
</style>