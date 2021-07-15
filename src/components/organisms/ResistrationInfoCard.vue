<template>
  <div class="my-page__card">
    <h2 class="card__title">登録内容</h2>
    <form class="card__form">
      <ul>
        <li>
          <LabelAndP
            label="氏名"
            :p="user.name"
          />
        </li>
        <li>
          <LabelAndP
            label="メールアドレス"
            :p="user.email"
          />
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
import LabelAndP from '../molecules/LabelAndP';
export default {
  components:{
    LabelAndP,
  },
  props:{
    userData:Object
  },
  computed:{
    user(){
      return this.userData;
    },
  },
  methods:{
    changeButtonState(){
      this.is_disabled_button = this.isBlankInput;
    },
    reload(){
      this.$router.go({
        path:this.$router.currentRoute.path,
        force:true
      });
    }
  },
}
</script>
<style scoped>
  .button--renew{
    padding: 2px;
    margin: 10px 0 0 auto;
    height: 100%;
    width: 65%;
  }
  .my-page__card{
    background-color: #EDE2D6;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 30px;
    width: 500px;
  }
  .card__title{
    font-family: 'Meiryo';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
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
</style>