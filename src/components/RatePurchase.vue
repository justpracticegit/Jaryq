<template>
    <div class="ratepurchase">
        <div class="container purchasecloud">
            <div class="course">
                <h1>Курсы</h1>
                <p>Выберите  один курс по тарифу Premium</p>
                <div class="finance">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Финансы</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="finance">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Финансы</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="finance">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Финансы</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="finance">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Финансы</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="finance">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Финансы</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <button class="purchase">Приобрести</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ratepurchase{
    padding-top:103px ;
}
.purchasecloud{
    background: url(http://localhost:8080/img/purchuasecloud.d6c85f4c.png) no-repeat center -14%/108%;
    height: 100vh;
}
.course{
    display: flex;
    flex-direction: column;
    padding-left: 30%;
    padding-top: 8%;
    padding-right: 30%;
}
.course h1{
    text-align: center;
}
.course p{
    text-align: center;
}
.finance{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #FFCC64;
  background-color: #FFCC64;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
}
.true{
    height: 5%;
    padding-top: 4%;
}
.financetext-p{
    color: #fff;
    border-bottom: 2px solid #f96a38;
    padding-top: 24%;
}
.description{
    width: 29%;
    height: 70%;
    color: #fff;
    background: #f96a38;
    border-radius: 44px;
    margin-top: 4%;
}
.purchase{
    width: 29%;
    height: 70%;
    color: #fff;
    background: #f96a38;
    border-radius: 44px;
    margin-top: 4%;
    margin-left: 35%; 
}
</style>

<script>
import RatePurchase from '@/components/RatePurchase.vue'
export default {
    name:'ratepurchase'
}
</script>