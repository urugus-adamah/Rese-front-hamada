<template>
  <div>
    <Header />
    <div class="main">
      <nav class="main__nav">
        <div class="nav__card">
          <p class="card__label">場所</p>
          <select name="area" class="card__select--area">
            <option value=""></option>
            <option v-for="(area,id) in areas" :key=id :value="area.name">{{area.name}}</option>
          </select>
          <p class="card__label">ジャンル</p>
          <select name="genre" class="card__select--genre">
            <option value=""></option>
            <option v-for="(genre,id) in genres" :key="id" :value="genre.name">{{genre.name}}</option>
          </select>
          <MyButton class="button--search" :caption="search" />
        </div>
        <div class="nav__wrap">
          <input class="input--shop-name" type="text" placeholder="店名で探す">
          <MyButton class="button--search" :caption="search" />
        </div>
      </nav>
      <div class="main__shops-page">
        <div v-for="(shop,index) in shops" :key="index" >
          <div @click="moveShop(shop.id)" class="shops__item">
            <img :src="shop.img_url" alt="shop-image">
            <p class="item__shop-name">{{shop.name}}</p>
            <!-- idからnameを取得する -->
            <p>{{areas[shop.area_id].name}} / {{genres[shop.genre_id-1].name}}</p>
            <FavoriteButton class="item__button-favorite" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import MyButton from '../components/MyButton';
import FavoriteButton from '../components/FavoriteButton';
import axios from 'axios';
export default {
  data(){
    return{
      search:"検索",
      shops:"",
      areas:"",
      genres:"",
    };
  },
  components:{
    Header,
    MyButton,
    FavoriteButton,
  },
  created(){
    this.getShopsData();
  },
  methods:{
    async getShopsData(){
      const url_shop = 'http://localhost:3000/shops';
      const url_area = 'http://localhost:3000/areas';
      const url_genre = 'http://localhost:3000/genres';
      const shop_items = axios.get(url_shop);
      const areas_items = axios.get(url_area);
      const genre_items = axios.get(url_genre);
      const data_shops = await shop_items;
      const data_areas = await areas_items;
      const data_genres = await genre_items;
      this.shops = data_shops.data;
      this.areas = data_areas.data;
      this.genres = data_genres.data;
    },
    moveShop(id){
      this.$router.push({
        path:'/detail/' + id,
        params:{id:id},
      });
    }
  },
};
</script>
<style scoped>
  .main{
    background-color: #FDFDFD;
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
  .main__shops-page{
    margin: 0 auto;
  }
  .main__shops-page a{
    display: block;   
  }

  .shops__item, .nav__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 30px 0;
    padding: 15px;
    text-align: left;
  }
  .nav__card, .nav__wrap{
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }

  .nav__card p{
    padding-bottom: 5px;
  }
  .shops__item{
    cursor: pointer;
    position: relative;
    height: 480px;
    width: 580px;
  }
  .shops__item:hover img{
    filter: brightness(80%);
    transition-duration: 0.2s;
  }
  .shops__item > img{
    display: block;
    margin:0 auto 15px auto;
    width: 100%;
  }
  .item__button-favorite{
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .item__shop-name{
    font-family: 'Meiryo';
    font-size: 36px;
    margin-bottom: 15px;
  }
  .item__area-genre{
    display: flex;
  }
  .card__select--area, .card__select--genre {
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CCC ;
    margin-bottom: 15px;
    padding: 10px;
  }
  
  .input--shop-name{
    margin-bottom: 15px;
  }
</style>