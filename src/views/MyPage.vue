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

        <ListCard title="予約状況" :table="reservation_table">
          <template v-slot:data_table>
            <tr v-for="data in reservation_table.data" :key="data.id">
              <td >{{data.date_time | formYYMMDD_HHmm}}</td>
              <td>{{data.shop_id}}</td>
              <td class="td_users">{{data.num_of_users}}名</td>
              <td>
                <MyButton class="my-button" caption="キャンセル" @myButton-cliked="deleteReservation(data.id)"/>
              </td>
            </tr>
          </template>
        </ListCard>

        <ListCard title="お気に入り" :table="favorite_table">
          <template v-slot:data_table>
              <tr v-for="data in favorite_table.data" :key="data.id">
                <td>{{data.shop_id}}</td>
                <td>{{data.area_id}}</td>
                <td>{{data.genre_id}}</td>
                <td>
                  <MyButton class="my-button" caption="削除" @myButton-cliked="deleteFavorite(data.id)"/>
                </td>
              </tr>
            </template>
        </ListCard>

        <ResistrationInfo :user-data="user_data"/>

      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import MyButton from  '../components/atoms/MyButton';
import ListCard from '../components/organisms/ListCard';
import ResistrationInfo from '../components/organisms/ResistrationInfoCard';
import axios from 'axios';
import moment from 'moment';
export default {
  components:{
    Header,
    MyButton,
    ListCard,
    ResistrationInfo,
  },
  created(){
    this.getReservationData();
    this.getFavoritesData();
    this.getUserData();
  },
  filters:{
    formYYMMDD_HHmm(value){
        return moment(value).format("YY/MM/DD HH:mm");
      } 
    },
  data(){
    return{
      reservation_table:{
        th1:"日時",
        th2:"店名",
        th3:"人数",
        data:"",
      },
      favorite_table:{
        th1:"店名",
        th2:"場所",
        th3:"ジャンル",
        data:"",
      },
      user_data:"",
      id:1,
    };
  },
  methods:{
    async getReservationData(){
      const url = `http://localhost:3000/api/v1/users/${this.id}/reservations`;
      const reservation_items = axios.get(url);
      const reservations = await reservation_items;
      this.reservation_table.data = reservations.data;
    },
    async getFavoritesData(){
      const url = `http://localhost:3000/api/v1/users/${this.id}/favorites`;
      const favorite_items = axios.get(url);
      const favorites = await favorite_items;
      this.favorite_table.data = favorites.data;
    },
    async getUserData(){
      const url = `http://localhost:3000/api/v1/users/${this.id}`;
      const user_items = axios.get(url);
      const user = await user_items;
      this.user_data = user.data;
    },
    deleteReservation(){
      if(confirm("この予約をキャンセルしますか？")){
        const url = `http://localhost:3000/api/v1/reservations/${this.id}`;
        axios
          .delete(url)
          .then((response)=>{
            console.log(response);
            this.reload();
          });
      }
    },
    deleteFavorite(){
      if(confirm("このお店をお気に入りから外しますか？")){
        const url = `http://localhost:3000/api/v1/favorites/${this.id}`;
        axios
          .delete(url)
          .then((response)=>{
            console.log(response);
            this.reload();
          });
      }
    },
    reload(){
      this.$router.go({
        path:this.$router.currentRoute.path,
        force:true,
      });
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
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
  }
  .main__my-page{
    margin-left: 50px;
    width: 80%;
  }
  .my-button{
    padding: 4px;
  }
  .td_users{
    text-align: right;
    padding-right: 30px !important;
  }
</style>