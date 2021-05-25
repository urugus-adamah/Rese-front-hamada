<template>
  <div>
    <Header />
    <div class="main">
      <div class="shops__item">
        <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="">
        <p class="item__shop-name">仙人</p>
        <div class="item__area-genre">
          <p class="item__area">東京都</p>
          <p>/</p>
          <p class="item__genre">寿司</p>
        </div>
        <div class="item__button-favorite">
          <FavoriteButton />
        </div>
      </div>
      <p class="shops__description">
        料理長厳選の食材から作る寿司を用いたコースをぜひお楽しみください。
        食材・味・価格、お客様の満足度を徹底的に追及したお店です。
        特別な日のお食事、ビジネス接待まで気軽に使用することができます。
      </p>
      <div class="form-reservation">
        <div class="form__items">
          <input type="text" name="" placeholder="日付を選択">
          <select name="num-of-users" id="num-of-users" >
            <option value="0" selected>人数を選択</option>
            <option v-for="n in 30" :value="n" :key="n">{{n}}名</option>
          </select>
          <select name="time">
            <option value="0">時間を選択</option>
            <option v-for="h in 11" :value="h" :key="h">{{h+9}}:00</option>
          </select>
        </div>
        <button class="button-reservate">予約する</button>
      </div>
    </div>
  </div>
    
  
</template>
<script>
import Header from '../components/HeaderWithNav';
import FavoriteButton from '../components/FavoriteButton';
export default {
  props:[
    "id",
  ],
  components:{
    Header,
    FavoriteButton,
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
  .item__area-genre{
    display: flex;
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