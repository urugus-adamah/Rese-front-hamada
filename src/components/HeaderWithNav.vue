<template>
  <div class="header">
      <h1 class="header__logo">Rese</h1>
      <nav class="header__nav">
        <ul class="nav__list">
          <li>
            <a href="/mypage">マイページ</a>
          </li>
          <li>
            <a href="/login">ログアウト</a>
          </li>
        </ul>
      </nav>
  </div>  
</template>
<style scoped>
  .header {
    align-items: flex-end;
    background-color: #FDFDFD;
    border-bottom: 2px solid #A69159;
    display: flex;
    height: 90px;
    justify-content: space-between;
    width: 100%;
  }
  .header__logo {
    color: #A69159;
    cursor: pointer;
    display: inline-block;
    font-size: 48px;
    margin: 25px 0 25px 100px;
  }
  .header__nav{
    margin: 25px 100px 25px 0;
    text-align: center;
    width: 250px;   
  }
  .nav__list{
    display: flex;
  }
  .nav__list a{
    color: #333;
    cursor: pointer;
    display: inline;
    font-size: 14px;
  }
  .nav__list a:hover{
    color: hsl(200, 100%, 45%);
    transition-duration: 0.4s;
  }
  .nav__list > li{
    width: 100%;
  }
  .nav__list li:first-child{
    border-right: 1px solid #A69159;
  }
</style>