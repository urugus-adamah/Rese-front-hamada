<template>
  <div>
    <Header />
    <div class="main">
      <div class="main__container">
        <p class="container__titile">予約完了</p>
        <div class="container__content">
          <p>予約いただきありがとうございます。</p>
          <p>予約内容の確認メールを送信しましたので</p>
          <p>ご確認ください。</p>
        </div>
        <router-link :to="{path:'/'}">ホームへ</router-link>
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
  background-color: #E5E5E5;
  height: 100vh;
  text-align: center;
}

.main__container {
  background-color: #FDFDFD;
  border-radius: 20px;
  display: inline-block;
  margin: 180px auto;
  padding: 60px;
}

.container__titile {
  font-family: 'Meiryo';
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.container__content{
  line-height: 1.3em;
  text-align: left;
}

</style>