<template>
  <div class="my-page__card">
    <h2 class="card__title">登録内容</h2>
    <!-- <form class="card__form">
      <ul>
        <li>
          <MyLabel :label="name.label" :p="name.p" :type="text"/>
        </li>
        <li>
          <MyInput
            :label="renew_name.label" 
            :value="renew_name.value" 
            @input="renew_name.value = $event"
          />
        </li>
        <li>
          <MyLabel :label="email.label" :p="email.p"/>
        </li>
        <li>
          <MyInput
            :label="renew_email.label" 
            :value="renew_email.value" 
            @input="renew_email.value = $event"
          />
        </li>
        <li>
          <MyLabel :label="password.label" :p="password.p"/>
        </li>
        <li>
          <MyInput
            :label="new_password.label" 
            :value="new_password.value" 
            type="password"
            @input="new_password.value = $event"
          />
        </li>
        <li>
          <MyInput
            :label="confirm_password.label" 
            :value="confirm_password.value" 
            type="password"
            @input="confirm_password.value = $event"
          />
        </li>
        <li>
          <MyButton class="button--renew" caption="更新" @myButton-cliked="renew"/>
        </li>
      </ul>
    </form> -->
    <slot />
  </div>
</template>
<script>
// import MyLabel from '../molecules/LabelAndP';
// import MyInput from '../molecules/LabelAndInput';
// import MyButton from '../atoms/MyButton';
export default {
  components:{
    // MyLabel,
    // MyButton,
    // MyInput,
  },
  data(){
    // 親から渡されるはずのデータ
    return{
      name:{
        label:"氏名",
        p:"浜田　英",
        changed:"",
      },
      renew_name:{
        label:"変更後",
        value:"",
      },
      email:{
        label:"メールアドレス",
        p:"hogehoge@hoge.com"
      },
      renew_email:{
        label:"変更後",
        value:"",
      },
      password:{
        label:"パスワード",
        p:"****"
      },
      new_password:{
        label:"新しいパスワード",
        value:"",
      },
      confirm_password:{
        label:"再入力",
        value:"",
      },
    }
  },
  methods:{
    renew(){
      if(confirm("登録内容を更新しますか?")){
        //登録内容更新処理
      }
    }
  }
}
</script>
<style scoped>
  .button--renew{
    padding: 2px;
    margin: 0 0 0 auto;
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