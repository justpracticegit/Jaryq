<template>
    <footer>
        <div class="container footer-wrapper">
            <a href="#" class="logo"><img src="../assets/img/Group.png" alt="Логотип"></a>
            <ul class="contacts">
                <li class="contacts-item">
                    <a href="#" class="contacts-link map">Адрес: Lorem Ipsum - это<br>текст-"рыба", часто </a>
                </li>
                <li class="contacts-item"> 
                    <a href="#" class="contacts-link phone">+7 777 123 45 67</a>
                </li>
                <li class="contacts-item">
                    <a href="#" class="contacts-link letter">educatics.kz@mail.ru</a>
                </li>
            </ul>
            <ul class="footer-nav-left">
                <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">О нас</a>
                </li>
                <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Проф тест</a>
                </li>
                <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Курсы</a>
                </li>
            </ul>
            <ul class="footer-nav-right">
                <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Тарифы</a>
                </li>
                <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Статьи</a>
                </li>
                <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Оплата</a>
                </li>
            </ul>
            <ul class="social-network">
                <li class="social-network-item">
                    <a href="#" class="social-network-link">
                        <img src="../assets/img/Vector.svg" alt="">
                    </a>
                </li>
                <li class="social-network-item">
                    <a href="#" class="social-network-link">
                        <img src="../assets/img/facebook.svg" alt="">
                    </a>
                </li>
                <li class="social-network-item">
                    <a href="#" class="social-network-link">
                        <img src="../assets/img/telegram.svg" alt="">
                    </a>
                </li>
                <li class="social-network-item">
                    <a href="#" class="social-network-link">
                        <img src="../assets/img/whatsapp.svg" alt="">
                    </a>
                </li>
                <li>
                    <button class="footer-button">Войти</button>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
footer{
  background-color: #094CC9;
  padding: 87.5px 0;
}


footer a{
  text-decoration: none;
  color: #fff;
}

footer ul{
  list-style: none;
}

.footer-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.social-network{
  display: flex;
  justify-content: space-between;
}

.map{
  padding-left: 28.6px;
  background: url(@/assets/img/address.svg) no-repeat;
}
.phone{
  padding-left: 28.6px;
  background: url(@/assets/img/phone.svg) no-repeat;
}
.letter{
  padding-left: 28.6px;
  background: url(@/assets/img/letter.svg) no-repeat;
}

</style>