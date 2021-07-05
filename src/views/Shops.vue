<template>
  <div>
    <Header />
    <div class="main">
      <nav class="main__nav">
        <AreaAndGenreSearcher 
          :areas-data="areas" 
          :genres-data="genres"
          @button-clicked="searchByAreaGenre"
          @selectedArea="getArea"
          @selectedGenre="getGenre"
        />

        <ShopsSearcher 
          :value="filter_shop_name"
          @input="filter_shop_name = $event"
          @button-clicked="searchByShopName"
          />
      </nav>
      

      <div class="main__shops-page">
          <button
            v-for="(item,id) in filter_list"
            :key="id"
            class="unfilter-button"
            @click="unfilter(item)">
            {{item}} ×
          </button>

        <div v-for="(shop,id) in shops" :key="id" >
          <div @click="moveShop(shop.id)" class="shops__item">
            <img :src="shop.img_url" alt="shop-image">
            <p class="item__shop-name">{{shop.name}}</p>
            <p>{{shop.area.name}} / {{shop.genre.name}}</p>
            <OnFavoriteButton class="item__button-favorite" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import OnFavoriteButton from '../components/molecules/OnFavorite';
import AreaAndGenreSearcher from '../components/molecules/AreaAndGenreSearcher';
import ShopsSearcher from '../components/molecules/ShopsSearcher';
import axios from 'axios';
export default {
  data(){
    return{
      shops:"",
      areas:[],
      genres:[],
      filter_list:[],
      selected_area:"",
      selected_genre:"",
      filter_shop_name:"",
      user_id:1
    };
  },
  components:{
    Header,
    OnFavoriteButton,
    AreaAndGenreSearcher,
    ShopsSearcher,
  },
  created(){
    this.getShopsData();
  },
  computed:{
    filteringAreaGenre(){
      return function(){
        if(!this.selected_area && !this.selected_genre){
          this.getShopsData();
          return this.shops;
        }else{
          const shops=[];
          this.shops.forEach(shop => {
            if(shop.area.name.indexOf(this.selected_area)!== -1
               && shop.genre.name.indexOf(this.selected_genre)!== -1){
              shops.push(shop);
              this.setFilterList(this.selected_area,this.selected_genre,this.filter_shop_name);
            }
          });
          return shops;
        }
      }
    },
    filteringShop(){
      return function(){
        if(!this.filter_shop_name){
          this.getShopsData();
          return this.shops;
        }else{
          const shops=[];
          this.shops.forEach(shop => {
            if(shop.name.indexOf(this.filter_shop_name)!== -1){
              shops.push(shop);
              this.setFilterList(this.selected_area,this.selected_genre,this.filter_shop_name);
            }
          });
          return shops;
        }
      }
    }
  },
  methods:{
    unfilter(item){
      const index = this.filter_list.indexOf(item);
      this.filter_list.splice(index,1);
    },
    setFilterList(area,genre,shop){
      const array = [area,genre,shop];
      this.filter_list = array.filter(v => v)
    },
    searchByShopName(){
      this.shops = this.filteringShop();
      
      if(this.shops.length == 0){
        alert("該当するお店がありませんでした。");
        this.filter_list={};
        this.getShopsData();
      }
      console.log(this.shops);
    },
    searchByAreaGenre(){
      this.shops = this.filteringAreaGenre();
      if(this.shops.length == 0){
        alert("該当するお店がありませんでした。");
        this.filter_list={};
        this.getShopsData();
      }
      console.log(this.shops);
    },
    getArea(value){
      this.selected_area = value;
    },
    getGenre(value){
      this.selected_genre = value;
    },
    async getShopsData(){
      const url_shop = 'http://127.0.0.1:8000/api/v1/shops';
      const shop_items = axios.get(url_shop);
      const data_shops = await shop_items;
      this.shops = data_shops.data.data;
      this.shops.forEach(item => {
        this.createTableFromKeyword(this.areas, item.area.name);       
        this.createTableFromKeyword(this.genres, item.genre.name);
      });
    },
    createTableFromKeyword(target_table, keyword){
      if(target_table.indexOf(keyword) == -1){
        target_table.push(keyword);
      }
    },
    moveShop(shop_id){
      this.$router.push({
        path:'/detail/' + shop_id,
        params:{id:shop_id},
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
  .main__shops-page__filter{
    display: flex;
  }
  .unfilter-button{
    background-color:transparent;
    border-color: transparent;
    font-size: 14px;
    height: 20px;
    line-height: 14px;
    margin: 10px 0 10px 10px;

  }
  .unfilter-button:hover{
    background-color: #ccc;
    border-radius: 5px;
    color: #fefefe;
    cursor: pointer;
    transition-duration: 0.2s;
  }
</style>