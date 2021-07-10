<template>
  <div>
    <Header />
    <div class="main">
      <nav class="main__nav">
        <AreaAndGenreSearcher 
          :areas-data="areas" 
          :genres-data="genres"
          @button-clicked="search"
          @selectedArea="getArea"
          @selectedGenre="getGenre"
        />

        <ShopsSearcher 
          :value="search_word_list.shop"
          @input="search_word_list.shop = $event"
          @button-clicked="search"
        />
      </nav>

      <div class="main__shops-page">
        <UnfilterBar :filtering-list="filtering_list" @clickedItem="unfilter" />

        <div v-for="(shop,id) in filtered_shops" :key="id" >
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
import UnfilterBar from '../components/molecules/UnfilterBar'
import axios from 'axios';
export default {
  data(){
    return{
      all_shops:"",
      filtered_shops:"",
      areas:[],
      genres:[],
      search_word_list:{
        area:"",
        genre:"",
        shop:"",
      },
      filtering_list:{},
      user_id:1,
    };
  },
  components:{
    Header,
    OnFavoriteButton,
    AreaAndGenreSearcher,
    ShopsSearcher,
    UnfilterBar,
  },
  created(){
    this.getShopsData();
  },
  computed:{
    getFilteredShops(){
      return function(filter){
        const shops=[];
        this.all_shops.forEach(shop => {
          if(shop.area.name.indexOf(filter.area)!== -1
              && shop.genre.name.indexOf(filter.genre)!== -1
              && shop.name.indexOf(filter.shop)!== -1){
              shops.push(shop);
            }
        });
        return shops;
      }
    },
  },
  methods:{
    unfilter(item){
      for(let i in this.filtering_list){
        if(this.filtering_list[i] === item){
          this.filtering_list[i] = "";
        }
      }
      this.filtered_shops = this.getFilteredShops(this.filtering_list);
    },
    search(){
      this.filtering_list = Object.assign({},this.search_word_list);
      this.filtered_shops = this.getFilteredShops(this.search_word_list);
      if(this.filtered_shops.length == 0){
        alert("該当するお店がありませんでした。");
        this.resetFilter();
      }
    },
    getArea(value){
      this.search_word_list.area = value;
    },
    getGenre(value){
      this.search_word_list.genre = value;
    },
    async getShopsData(){
      const url_shop = 'http://127.0.0.1:8000/api/v1/shops';
      const shop_items = axios.get(url_shop);
      const data_shops = await shop_items;
      this.all_shops = data_shops.data.data;
      this.all_shops.forEach(item => {
        this.createTableFromKeyword(this.areas, item.area.name);       
        this.createTableFromKeyword(this.genres, item.genre.name);
      });
      this.resetFilter();
    },
    createTableFromKeyword(target_table, keyword){
      if(target_table.indexOf(keyword) == -1){
        target_table.push(keyword);
      }
    },
    resetFilter(){
      this.filtering_list={};
      this.filtered_shops = Object.assign({},this.all_shops);
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

  .main__shops-page{
    margin: 0 auto;
  }
  .main__shops-page a{
    display: block;   
  }

  .shops__item{
    background-color: #EDE2D6;
    border-radius: 10px;
    /* margin: 20px 0; */
    margin-bottom: 20px;
    padding: 15px;
    text-align: left;
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
  .input--shop-name{
    margin-bottom: 15px;
  }
</style>