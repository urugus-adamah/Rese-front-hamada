<template>
  <div class="my-page__card">
    <h2 class="card__title">{{title}}</h2>
    <table class="card__table">
      <tr class="table__header">
        <th>{{th1}}</th>
        <th>{{th2}}</th>
        <th>{{th3}}</th>
        <th></th>
      </tr>
      <!-- <tr>
        <td>{{td1}}</td>
        <td>{{td2}}</td>
        <td class="table__num-of-users">{{td3}}</td>
        <td class="table__cancel">
          <MyButton class="my-button" :caption="button_caption">{{button_caption}}</MyButton>
        </td>
      </tr> -->
      <tr>
        <td>{{td1}}</td>
        <td>{{td2}}</td>
        <td class="table__num-of-users">{{td3}}</td>
        <td class="table__cancel">
          <MyButton class="my-button" :caption="button_caption">{{button_caption}}</MyButton>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import MyButton from './MyButton';
export default {
  components:{
    MyButton,
  },
  props:{
    button_caption:String,
    title:String,
    th1:String,
    th2:String,
    th3:String,
    // td1:String,
    td2:String,
    td3:String,
    tables:Object,
  },
  data(){
    return{
      caption:this.button_caption,
      tables_data:this.tables,
      td1:this.tables_data[0],
    };
  }
};
</script>
<style scoped>
  .my-page__card{
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

  .card__form{
    width: 100%;
  }
  .card__form li{
    display: flex;
    height: 30px;
    list-style: none;
    margin: 10px 0;
    width: 100%;
  }
  .card__form li p{
    line-height: 30px;
  }
  .card__form label{
    line-height: 30px;
    width: 35%;
  }
  .card__form input{
    height: 100%;
    width: 65%;
  }

  .table__header{
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
  .card__table td{
    padding: 10px 10px 5px 0;
    vertical-align: middle;
  }
  .my-button{
    padding: 2px;
  }
</style>