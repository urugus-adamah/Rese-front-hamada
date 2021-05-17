<template>
  <div>
    <Header></Header>
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
        <div class="my-page__card">
          <p class="card__title">予約状況</p>
          <table class="card__table">
            <tr class="table__header">
              <th>日時</th>
              <th>店名</th>
              <th>人数</th>
              <th></th>
            </tr>
            <tr>
              <td>21/04/01 18:00</td>
              <td>ラーメン極み</td>
              <td class="table__num-of-users">1名</td>
              <td class="table__cancel">
                <button class="cancel__button">キャンセル</button>
              </td>
            </tr>
            <tr>
              <td>21/04/12 17:00</td>
              <td>ルーク</td>
              <td class="table__num-of-users">10名</td>
              <td class="table__cancel">
                <button class="cancel__button">キャンセル</button>
              </td>
            </tr>

          </table>
        </div>
        <div class="my-page__card">
          <p class="card__title">お気に入り</p>
          <table class="card__table">
            <tr class="table__header">
              <th>店名</th>
              <th>場所</th>
              <th>ジャンル</th>
              <th></th>
            </tr>
            <tr>
              <td>THE TOOL</td>
              <td>福岡県</td>
              <td>イタリアン</td>
              <td class="table__delete">
                <button class="cancel__delete">削除</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="my-page__card">
          <p class="card__title">登録内容</p>
          <form class="card__form">
            <ul>
              <li>
                <label>氏名</label>
                <p>浜田 英</p>
              </li>
              <li>
                <label for="new-name">変更後</label>
                <input id="new-name" type="text" />
              </li>
              <li>
                <label >メールアドレス</label>
                <p>hogehoge@hoge.com</p>
              </li>
              <li>
                <label for="new-email">変更後</label>
                <input id="new-email" type="email" >
              </li>
              <li>
                <label>パスワード</label>
                <p>******</p>
              </li>
              <li>
                <label for="password">新しいパスワード</label>
                <input id="password" type="password" >
              </li>
              <li>
                <label for="re-enter-password">再入力</label>
                <input id="re-enter-password" type="password" >
              </li>
              <li>
                <button class="renew__button">更新</button>
              </li>
            </ul>
          </form>
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
  .main__nav li{
    cursor: pointer;  
    margin: 20px;
  }
  .my-page__title{
    margin: 30px 0; 
  }
  .my-page__title, .card__title{
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .main__my-page{
    margin-left: 50px;
    width: 80%;
  }
  .cancel__button ,.cancel__delete{
    padding: 2px;
  }
  .renew__button{
    margin: 0 0 0 auto;
    padding: 2px;
    width: 65%;
  }
  .my-page__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 30px;
    width: 50%;
  }
  .card__table{
    width: 100%;
  }
  .table__header{
    text-align: left;
  }
  .card__table tr{
    border-bottom: 1px solid #CCC;
  }
  .card__table td:nth-child(1){
    width: 30%;
  }
  .card__table td:nth-child(2){
    width: 30%;
  }
  .card__table td:nth-child(3){
    width: 20%;
  }
  .card__table td:nth-child(4){
    width: 20%;
  }
  .card__table td{
    padding: 10px 10px 5px 0;
    vertical-align: middle;
  }

  .table__cancel, .table__delete{
    padding: 0;
  }
  .table__num-of-users{
    padding-right: 30px;
    text-align: right;
  }
  .card__form{
    width: 100%;
  }
  .card__form li{
    display: flex;
    height: 30px;
    list-style: none;
    margin: 10px 0;
    width: 100%;
  }
  .card__form li p{
    line-height: 30px;
  }
  .card__form label{
    line-height: 30px;
    width: 35%;
  }
  .card__form input{
    height: 100%;
    width: 65%;
  }
  
</style>