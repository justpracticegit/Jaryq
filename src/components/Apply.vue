<template>
    <div class="apply">
        <div class="container">
            <div class="apply-content">
                <div class="apply-img">
                    <img src="@/assets/img/applybird.png" alt="">
            </div>
            <form class="request">
                <h1 class="apply-h1">Оставить заявку </h1>
                <h3 class="apply-h3">И мы свяжемся с вами в ближайшее время!</h3>
                <div class="personalinfo">
                    <input class="firstname" type="text" id="fname" name="Имя">
                    <input class="lastname" type="text" id="lname" name="lname">
                </div>
                
                <div class="contacts">
                    <input class="telephone" type="text" id="lname" name="lname">
                    <input class="email" type="textl" id="lname" name="lname">
                </div>
                <div class="selectAll">
                    <select class="age" name="age" id="">
                        <option value=""> <p>Возраст</p> </option>
                    </select>
                    <select class="city" name="" id="">
                        <option value=""><p class="pp">Город</p> </option>
                    </select>
                    <select class="school" name="" id="">
                        <option value=""><p class="pp">Школа</p> </option>
                    </select>
                </div>
                <button class="send" type="submit">Отправить</button>
                <p class="send-p"> Нажимая кнопку вы соглашаетесь <br>  
на обработку персональных данных</p>
            </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.apply{
    background: url(@/assets/img/cloudforapply.png) no-repeat  center/100% 100%;
}
.request{
    display: flex;
    flex-direction: column;
    margin-top: 450px;
}
.apply-h1{
    font-size: 48px;
    font-weight: 700,Bold;
    color: #062060;
    fill: #062060;
}
.apply-img{
    padding-top: 300px;
    padding-left: 100px;
}
.personalinfo{
    display: flex;
    justify-content: space-between;
}
.contacts{
    display: flex;
    justify-content: space-between;
}
.selectAll{
    display: flex;
    justify-content: space-between;
}
.apply-h3{
    color: #062060;
}
.send-p{
    color: #6E718F;
    margin-right: 65px;
}
.apply-content{
    display: flex;
    flex-direction: row;
    padding-bottom: 300px;
}
.firstname{
    width: 325px;
    height: 55px;
    border-radius: 83px;
    margin-bottom: 20px;
}
.lastname{
    width: 325px;
    height: 55px;
    border-radius: 83px;
    margin-left: 15px;
}
.telephone{
    width: 325px;
    height: 55px;
    border-radius: 83px;
}
.email{
    width: 325px;
    height: 55px;
    border-radius: 83px;
}
.selectAll{
    margin-top: 20px;
}
.age{
    width: 182px;
    height: 55px;
    border-radius: 83px;
    padding-left: 25px;
}
.city{
    width: 220px;
    height: 55px;
    border-radius: 83px;
    padding-left: 25px;
}
.school{
    width: 233px;
    height: 55px;
    border-radius: 83px;
    padding-left: 25px;
}
.pp{
    padding-left: 25px;
}
.send{
    width: 184px;
    height: 52px;
    border-radius: 44px;
    background-color: #F96A38;
    color: white;
    margin-left: 200px;
    margin-top: 39px;
}

.send-p{
    margin-top: 27px;
}

</style>