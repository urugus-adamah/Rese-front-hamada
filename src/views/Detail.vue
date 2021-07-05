<template>
  <div class="main">
    <Header />
    <div class="detail">
      <div class="shops__item">
        <img :src="shop.img_url" alt="shop-image">
        <p class="item__shop-name">{{shop.name}}</p>
        <p>{{shop.area.name}} / {{shop.genre.name}}</p>
        <OnFavorite class="item__button-favorite" />
      </div>

      <p class="shops__description">{{shop.description}}</p>

      <div class="form-reservation">
        <form class="form__items">
          <input type="date" name="calender" placeholder="日付を選択" v-model="date" >
          <select name="num-of-users" id="num-of-users" v-model="numOfUsers">
            <option value="0" selected>人数を選択</option>
            <option v-for="n in 30" :value="n" :key="n"  >{{n}}名</option>
          </select>
          <select name="time" v-model="time">
            <option value="" selected>時間を選択</option>
            <option v-for="item in timeList()" :value="item" :key="item.index">{{item}}</option>
          </select>
        </form>
        <button @click="reservation" class="button-reservate">予約する</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import OnFavorite from '../components/molecules/OnFavorite';
import axios from 'axios';
import moment from 'moment';
export default {
  props:{
    id:Number,
  },
  data(){
    return{
      shop:"",
      date:"",
      numOfUsers:0,
      time:"",
    };
  },
  components:{
    Header,
    OnFavorite,
  },
  computed:{
    shop_id(){
      return this.id;
    },
    timeList(){
      return function(){
        const list=[];
        for(let hour=10; hour <=19; hour++){
          list.push(`${hour}:00`);
          list.push(`${hour}:30`);    
        }
        return list;
      };
    }
  },
  created(){
    //methodsへ記述、並列処理
    this.getShopData();
    this.timeList();
  },
  methods:{
    async reservation(){
      if(confirm("予約しますか？")){
        //バリデーションを追加する
        const reservation_data={
          num_of_users:this.numOfUsers,
          date_time:`${this.date} ${this.time}`,
          user_id:1,
        }
        const url = `http://127.0.0.1:8000/api/v1/shops/${this.shop_id}/reservations/`;
        const item = await axios.post(url,reservation_data);
        console.log("reservation_data=",item);

        // Done.vueへ遷移
        this.$router.push({
          path:'/done/',
        });
        // alert("予約完了");
          
      }
    },
    async getShopData(){
      const url = `http://127.0.0.1:8000/api/v1/shops/${this.shop_id}`;
      const item = await axios.get(url);
      this.shop = item.data.data;
      // console.log(this.shop);
    },
  },
  filters:{
  formYYMMDD(value){
      return moment(value).format("YY/MM/DD");
    } 
  },
};
</script>
<style scoped>
  .main{
    background-color: #FDFDFD;
  }
  .detail{
    padding-top: 30px ;
    margin: 0 auto;
    width: 650px;
  }
  .shops__item{
    box-sizing: border-box;
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 0 auto;
    padding: 15px;
    position: relative;
    text-align: left;
    width: 100%;
  }

  .shops__item > img{
    margin:0 auto 15px auto;
    width: 100%;
  }
  .item__button-favorite{
    bottom: 20px;
    position: absolute;
    right: 20px;
  }
  .item__shop-name{
    font-family: 'Meiryo';
    font-size: 36px;
    margin-bottom: 15px;
  }
  .card__select--area, .card__select--genre {
    border: 1px solid #CCC ;
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
  }
  .shops__description{
    font-size: 14px;
    line-height: 1.3em;
    margin: 5px auto;
    width: 100%;
  }
  .form-reservation{
    box-sizing: border-box;
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 30px auto;
    padding: 15px;
    width: 100%;
  }
  .form__items{
    display: flex;
    height: 40%;
    justify-content: space-between;
  }
  .form-reservation input{
    font-size: 22px;
    height: 50px;
    width: 32%;
  }
  .form-reservation select{
    border: 1px solid #CCC ;
    border-radius: 5px;
    font-size: 24px;
    height: 50px;
    padding: 10px;
    width: 32%;
  }
  .button-reservate{
    background-color: hsl(352, 90%, 60%);
    border-radius: 5px;
    border: 0;
    color: #FDFDFD;
    cursor: pointer;
    display: block;
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    height: 50px;
    margin: 0 0 0 auto;
    width: 32%;
  }
  .button-reservate:hover{
    background-color: hsl(352, 90%, 70%);
    transition-duration: 0.2s;
  }
  
</style>