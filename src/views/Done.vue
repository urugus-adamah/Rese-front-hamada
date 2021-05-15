<template>
  <div>
    <div class="section">

      <Header></Header>
      <div class="container">
        <div class="wrap">
          <p>予約完了</p>
          <div class="content">
            <p>予約いただきありがとうございます。</p>
            <p>予約内容の確認メールを送信しましたので</p>
            <p>ご確認ください。</p>
          </div>
          <a href="/">ホームへ</a>
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
.section{
  background-color: #E5E5E5;
}

.container{
    text-align: center;
  }
  .wrap {
    display: inline-block;
    margin: 180px auto;
    background-color: #FDFDFD;
    border-radius: 20px;
    padding: 60px;
    text-align: left;
  }

  .wrap > p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #4D4D4D;
    font-family: 'Meiryo';
  }

  .content{
    line-height: 1.3em;
  }

  a{
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    text-align: center;
    color: hsl(200, 100%, 45%);
    text-decoration: none;
    font-size: 14px;
  }
  a:hover{
    transition-duration: 0.4s;
    color: hsl(200, 100%, 80%);
  }
</style>