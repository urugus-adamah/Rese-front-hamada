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
          <button class="card__button__search">検索</button>
        </div>
        <div class="nav__wrap">
          <input class="nav__input--shop-name" type="text" placeholder="店名で探す">
          <button class="wrap__button__search">検索</button>
        </div>
      </nav>
      <div class="main__shops-page">
        <div class="shops__item">
          <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="">
          <p class="item__shop-name">仙人</p>
          <div class="item__area-genre">
            <p class="item__area">東京都</p>
            <p>/</p>
            <p class="item__genre">寿司</p>
          </div>
          <div class="item__favorite-icon">
            <img class="favorite-icon--off" src="../assets/img/favorite_on.png" alt="">
          </div>
        </div>
        <div class="shops__item">
          <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/yakiniku.jpg" alt="">
          <p class="item__shop-name">牛助</p>
          <div class="item__area-genre">
            <p class="item__area">大阪府</p>
            <p>/</p>
            <p class="item__genre">焼肉</p>
          </div>
          <div class="item__favorite-icon">
            <img class="favorite-icon--off" src="../assets/img/favorite_off.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/HeaderWithNav';
export default {
  components:{
    Header
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

  .shops__item > img{
    margin-bottom: 15px;
    height: 360px;
    width: 550px;
  }
  .shops__item, .nav__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin: 30px 0;
    padding: 30px;
  }
  .shops__item{
    position: relative;
  }
  .item__favorite-icon{
    position: absolute;
    right: 35px;
    top: 35px;
    width: 10%;
  }
  .item__favorite-icon img{
    width: 100%;
  }
  .item__shop-name{
    font-family: 'Meiryo';
    font-size: 36px;
    margin-bottom: 15px;
  }
  .item__area-genre{
    display: flex;
  }
  .nav__card, .nav__wrap{
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .nav__card{
    text-align: left;
    padding: 15px;
  }
  .nav__card p{
    padding-bottom: 5px;
  }
  .card__select--area, .card__select--genre {
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CCC ;
    margin-bottom: 15px;
    padding: 10px;
  }
  
</style>