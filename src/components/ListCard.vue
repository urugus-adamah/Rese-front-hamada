<template>
  <div class="my-page__card">
    <h2 class="card__title">{{tables.title}}</h2>
    <table class="card__table">
      <tr class="table__header">
        <th>{{tables.th1}}</th>
        <th>{{tables.th2}}</th>
        <th>{{tables.th3}}</th>
        <th></th>
      </tr>
      <tr v-for="(data, id) in tables.data" :key="id">
        <td>{{data.date_time}}</td>
        <td>{{data.shop_id}}</td>
        <td >{{data.num_of_users}}</td>
        <td class="table__cancel">
          <MyButton class="my-button" :caption="buttonCaption">{{buttonCaption}}</MyButton>
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
    // オブジェクトとして渡すとなお良い
    buttonCaption:String,
    tables:Object,
  },
  data(){
    return{
      caption:this.buttonCaption,
      convert_data:this.tables,
    };
  },
  created(){
    console.log(this.buttonCaption);
  
    console.log(this.convert_data);
  },
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