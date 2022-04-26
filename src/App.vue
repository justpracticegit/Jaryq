<template>
  <header class="header">
        <div class="container fluid">
            <div class="header_wrapper">
                <a class="header_logo" href="/"></a>
                <nav class="header_nav">
                    <ul class="header_list">
                        <li class="header_item">
                            <router-link to="/about">
                                <a href class="header_link">О нас</a>
                            </router-link>
                        </li>
                        <li class="header_item">
                            <router-link to="/proftest">
                                <a href="#!" class="header_link">Проф Тест</a>
                            </router-link>
                        </li>
                        <li class="header_item">
                            <router-link to="/courses">
                            <a href="#!" class="header_link">Курсы</a>
                            </router-link>
                        </li>
                        <li class="header_item">
                            <router-link to="/rates">
                            <a href="#!" class="header_link">Тарифы</a>
                            </router-link>
                        </li>
                        <li class="header_item">
                            <router-link to="/articles">
                            <a href="#!" class="header_link">Статьи</a>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <select class="language">
                    <option style="background-image:url(@/assets/img/russiaflag.png);">ru</option>
                    <option style="background-image:url(@/assets/img/kz.svg);">kz</option>
                    <option style="background-image:url(@/assets/img/us.svg);">en</option>
                </select> 
                <button class="button" type="button">Войти</button>
            </div>
        </div>
    </header>
    <router-view/>
    <!-- <Footer class="footerpage" /> -->
</template>
<script>
 import Footer from './components/FooterPage.vue'
 export default {
   name:'App',
   components:{
     Footer
   }
 }
</script>

<style scoped>
  @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      src: local();
  }

  *{
    font-family: 'Montserrat', sans-serif !important;
  }

  html{
      box-sizing: border-box;
  }
  body{
      font-style: normal;
      font-size: 16px;
      line-height: 1.2;
      font-weight: normal;
      padding: 0;
      margin: 0;
  }
  /* @media (min-width:1400px){
    .container{
        max-width:1663px;
    }
} */
  .header{
      position: absolute;
      left: 0;
      top: 20px;
      width: 100%;
      z-index: 10;
  }
  .header_wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .header_logo{
      height: 61px;
      width: 210px;
      border-radius: 0px;
      background: url(./assets/img/logo.png);
  }
  .header_nav{
      font-family: 'Montserrat';
      text-transform: uppercase;
      font-size: 16px;
      font-style: SemiBold;
      font-weight: 600; 
  }
  .header_list{
      display: flex;
      flex-wrap: wrap;
      list-style: none;
  }
  .header_item{
      margin-right: 82px;
  }
  .language{
      margin-right: -15%;
  }
  .button{
      background: linear-gradient(275.68deg, #89D5FF 6.44%, #C4E9FF 54.62%, rgba(255, 255, 255, 0.52) 100.74%);
      width: 105px;
      height: 46px;
      border-radius: 44px;
      border-color: #062060 ;
      color: #062060;
      padding: 8px 26px 8px 26px;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
      font-weight: Medium;
  }
  .footerpage{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
