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

        <!-- tableの渡し方要検討 -->
        <!-- <ListCard 
          title="予約状況"
          button-caption="キャンセル"
          :table="reservation_table"

        /> -->

          <!-- <ListCard 
            title="予約状況"
            button-caption="キャンセル"
            :table="reservation_table"
            v-for="data in reservation_table.data" :key="data.id" 
          > -->
          <ListCard 
            title="予約状況"
            button-caption="キャンセル"
            :table="reservation_table"
          >
            <template v-slot:data_table>
              <tr v-for="data in reservation_table.data" :key="data.id">
                <td >{{data.date_time|formYYMMDD_HHmm}}</td>
                <td>{{data.shop_id}}</td>
                <td class="td_users">{{data.num_of_users}}名</td>
                <td>
                  <MyButton class="my-button" caption="キャンセル"/>
                </td>
              </tr>
            </template>
           </ListCard>

        <!-- tableの渡し方要検討 -->
        <ListCard 
          title="お気に入り"
          button-caption="削除"
          :table="favorite_table"
        >
          <template v-slot:data_table>
              <tr v-for="data in favorite_table.data" :key="data.id">
                <td>{{data.shop_id}}</td>
                <td>{{data.area_id}}</td>
                <td>{{data.genre_id}}</td>
                <td>
                  <MyButton class="my-button" caption="削除"/>
                </td>
              </tr>
            </template>
        </ListCard>

        <!-- 各種データを親から渡すように要改良 -->
        <ResistrationInfo :user="user_data"/>

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
    console.log("MyPage created");
    this.getReservationData();
    this.getFavoritesData();
    this.getUserData();
    console.log("API read");
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
    };
  },
  methods:{
    async getReservationData(){
      const url = 'http://localhost:3000/api/v1/reservations';
      const reservation_items = axios.get(url);
      const reservations = await reservation_items;
      this.reservation_table.data = reservations.data;
    },
    async getFavoritesData(){
      const url = 'http://localhost:3000/api/v1/favorites';
      const favorite_items = axios.get(url);
      const favorites = await favorite_items;
      this.favorite_table.data = favorites.data;
      console.log("favorite_table:", this.favorite_table.data);
    },
    async getUserData(){
      const url = 'http://localhost:3000/api/v1/users/1';
      const user_items = axios.get(url);
      const user = await user_items;
      // this.$set(this.user_data,'data',user);
      this.user_data = user.data;
      console.log("user_data",this.user_data);
    },
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