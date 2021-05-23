<template>
  <div>
    <Header></Header>
    <div class="main">
      <nav class="main__nav">
        <div class="nav__card">
          <p class="card__label">場所</p>
          <select name="area" id="" class="card__select--area">
            <option value=""></option>
            <option value="tokyo">東京都</option>
            <option value="fukuoka">福岡県</option>
          </select>
          <p class="card__label">ジャンル</p>
          <select name="genre" id="" class="card__select--genre">
            <option value=""></option>
            <option value="genre1">イタリアン</option>
            <option value="genre1">ラーメン</option>
          </select>
          <!-- <button class="card__button__search">検索</button> -->
          <MyButton class="button--search" :caption="search"></MyButton>
        </div>
        <div class="nav__wrap">
          <input class="input--shop-name" type="text" placeholder="店名で探す">
          <MyButton class="button--search" :caption="search"></MyButton>
        </div>
      </nav>
      <div class="main__shops-page">
        <a href="/detail:1">
          <div class="shops__item">
            <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="">
            <p class="item__shop-name">仙人</p>
            <div class="item__area-genre">
              <p class="item__area">東京都</p>
              <p>/</p>
              <p class="item__genre">寿司</p>
            </div>
            <div class="item__button-favorite">
              <FavoriteButton></FavoriteButton>
            </div>
          </div>
        </a>
        <a href="/detail:2">
          <div class="shops__item">
            <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/yakiniku.jpg" alt="">
            <p class="item__shop-name">牛助</p>
            <div class="item__area-genre">
              <p class="item__area">大阪府</p>
              <p>/</p>
              <p class="item__genre">焼肉</p>
            </div>
            <div class="item__button-favorite">
              <FavoriteButton></FavoriteButton>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
import MyButton from '../components/MyButton';
import FavoriteButton from '../components/FavoriteButton';
export default {
  data(){
    return{
      search:"検索"
    };
  },
  components:{
    Header,
    MyButton,
    FavoriteButton,
  }
};
</script>
<style scoped>
  .main{
    background-color: #FEFEFE;
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