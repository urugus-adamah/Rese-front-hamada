<template>
  <div>
    <Header />
    <div class="main">
      <nav class="main__nav">
        <ul>
          <li>予約状況</li>
          <li>お気に入り</li>
          <li>登録内容</li>
        </ul>
      </nav>
      <div class="main__my-page">
        <h1 class="my-page__title">マイページ</h1>
        <ListCard 
          :tables="reservation_table"
          :button-caption="cancel"
        >
        </ListCard>
        <div class="my-page__card">
          <h2 class="card__title">お気に入り</h2>
          <table class="card__table">
            <tr class="table__header">
              <th>店名</th>
              <th>場所</th>
              <th>ジャンル</th>
              <th></th>
            </tr>
            <tr>
              <td>THE TOOL</td>
              <td>福岡県</td>
              <td>イタリアン</td>
              <td class="table__delete">
                <!-- <button class="button--erase">削除</button> -->
                <MyButton class="button--erase" :caption="erase"></MyButton>
              </td>
            </tr>
          </table>
        </div>
        <div class="my-page__card">
          <h2 class="card__title">登録内容</h2>
          <form class="card__form">
            <ul>
              <li>
                <label>氏名</label>
                <p>浜田 英</p>
              </li>
              <li>
                <label for="new-name">変更後</label>
                <input id="new-name" type="text" />
              </li>
              <li>
                <label >メールアドレス</label>
                <p>hogehoge@hoge.com</p>
              </li>
              <li>
                <label for="new-email">変更後</label>
                <input id="new-email" type="email" >
              </li>
              <li>
                <label>パスワード</label>
                <p>******</p>
              </li>
              <li>
                <label for="password">新しいパスワード</label>
                <input id="password" type="password" >
              </li>
              <li>
                <label for="re-enter-password">再入力</label>
                <input id="re-enter-password" type="password" >
              </li>
              <li>
                <MyButton class="button--renew" :caption="renew" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import MyButton from '../components/MyButton';
import ListCard from '../components/ListCard';
import axios from 'axios';
export default {
  components:{
    Header,
    MyButton,
    ListCard,
  },
  created(){
    this.getReservationData();
    this.getFavoritesData();
  },
  mounted(){

    // this.getReservationData();
    // this.getFavoritesData();
  },
  data(){
    return{
      cancel:"キャンセル",
      erase:"削除",
      renew:"更新",
      reservations:"",
      favorites:"",
      reservation_table:{
        title:"予約状況",
        th1:"日時",
        th2:"店名",
        th3:"人数",
        data:"",
      },
    };
  },
  methods:{
    async getReservationData(){
      const url_reservation = 'http://localhost:3000/api/v1/reservations';
      const reservation_items = axios.get(url_reservation);
      const reservations = await reservation_items;
      this.reservation_table.data = reservations.data;
    },
    async getFavoritesData(){
      const url_favorite = 'http://localhost:3000/api/v1/favorites';
      const favorite_items = axios.get(url_favorite);
      const data_favorites = await favorite_items;
      this.favorites = data_favorites.data;
    },
    convertReservationData(){
      this.reservation_table.data
    }
  },
  
};
</script>
<style scoped>
  .main{
    background-color: #FDFDFD;
    min-height: 100vh;
    display: flex;
  }
  .main__nav{
    border-right: 2px solid #A69159; 
    text-align: right;
    width: 30%;
  }
  .main__nav ul{
    display: inline-block;  
    margin-top: 70px;
  }
  .main__nav li{
    cursor: pointer;  
    margin: 20px;
  }
  .my-page__title{
    margin: 30px 0; 
  }
  .my-page__title, .card__title{
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .main__my-page{
    margin-left: 50px;
    width: 80%;
  }
  .button--cancel,
  .button--erase, 
  .button--renew{
    padding: 2px;
  }
  .button--renew{
    margin: 0 0 0 auto;
    width: 65%;
  }
  .my-page__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 30px;
    width: 500px;
  }
  .card__table{
    width: 100%;
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

  .table__cancel,
  .table__delete{
    padding: 0;
  }
  .table__num-of-users{
    padding-right: 30px;
    text-align: right;
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
  
</style>