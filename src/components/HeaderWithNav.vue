<template>
  <div class="header flex">
      <h1 class="logo">Rese</h1>
      <nav>
        <ul class="flex">
          <li>マイページ</li>
          <li>ログアウト</li>
        </ul>
      </nav>
  </div>  
</template>
<style scoped>
  .flex{
    display: flex;
  }
  .header {
    height: 90px;
    width: 100%;
    justify-content: space-between;
    background-color: #FDFDFD;
    align-items: flex-end;
    border-bottom: 2px solid #A69159;
  }
  .logo {
    display: inline-block;
    cursor: pointer;
    font-size: 48px;
    color: #A69159;
    margin: 25px 0 25px 100px;
  }
  nav{
    margin: 25px 100px 25px 0;
    width: 165px;   
  }
  li{
    cursor: pointer;
    padding:0 10px;
    width: 100%;
    font-size: 12px;
  }
  li:first-child{
    border-right: 1px solid #A69159;
  }
  li:hover{
    transition-duration: 0.4s;
    color: hsl(200, 100%, 45%);
  }
</style>