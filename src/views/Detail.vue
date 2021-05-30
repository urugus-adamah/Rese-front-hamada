<template>
  <div>
    <Header />
    <div class="main">
      <div class="shops__item">
        <img :src="shop.img_url" alt="shop-image">
        <p class="item__shop-name">{{shop.name}}</p>
        <p>{{area.name}} / {{genre.name}}</p>
        <FavoriteButton class="item__button-favorite" />
      </div>
      <p class="shops__description">{{shop.description}}</p>
      <div class="form-reservation">
        <form class="form__items">
          <input type="text" name="" placeholder="日付を選択">
          <select name="num-of-users" id="num-of-users" >
            <option value="0" selected>人数を選択</option>
            <option v-for="n in 30" :value="n" :key="n">{{n}}名</option>
          </select>
          <select name="time">
            <option value="0">時間を選択</option>
            <option v-for="h in 11" :value="h" :key="h">{{h+9}}:00</option>
          </select>
        </form>
        <button @click="reservation" class="button-reservate">予約する</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import FavoriteButton from '../components/FavoriteButton';
import axios from 'axios';
export default {
  props:[
    "id",
  ],
  data(){
    return{
      shop:"",
      area:"",
      genre:"",
    };
  },
  components:{
    Header,
    FavoriteButton,
  },
  async created(){
    //methodsへ記述、並列処理
    const url = `http://localhost:3000/shops/${this.id}`;
    const item = await axios.get(url);
    this.shop = item.data;
    const url_area = `http://localhost:3000/areas/${this.shop.area_id}`;
    const area = await axios.get(url_area);
    this.area = area.data;
    const url_genre = `http://localhost:3000/genres/${this.shop.genre_id}`;
    const genre = await axios.get(url_genre);
    this.genre = genre.data;
  },
  methods:{
    reservation(){
      //予約前の確認メッセージ表示
      //Done.vueへ遷移
    }
  }
};
</script>
<style scoped>
  .main{
    background-color: #FDFDFD;
    height: 100vh;
    padding-top: 30px ;
  }
  .shops__item{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 0 auto;
    padding: 15px;
    position: relative;
    text-align: left;
    width: 580px;
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
    width: 580px;
  }
  .form-reservation{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 30px auto;
    padding: 15px;
    width: 580px;
  }
  .form__items{
    display: flex;
    height: 40%;
    justify-content: space-between;
  }
  .form-reservation input{
    font-size: 24px;
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