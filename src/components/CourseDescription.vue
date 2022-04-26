<template>
<div class="coursedescription">
    <div class="coursedivision">
        <div class="coursedivisionleft">
            <h1>Финансы</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
             Lorem Ipsum  является <br> стандартной "рыбой" для текстов на <br>
             латинице с начала XVI века.  В то время некий безымянный печатник <br>
             создал большую коллекцию размеров и форм шрифтов, используя Lorem <br>
             Ipsum для распечатки образцов
            </p>
            <button class="buycourse">Приобрести курс</button>
        </div>
        <div class="coursedivisionright">
            <img class="logo" src="@/assets/img/logofinance.png" alt="">
        </div>

    </div>
    <div class="container descriptioncourse">
        <div class="desccourse">
            <h1 class="content-h1">Содержание курса </h1>
            <ol class="courselist">
            <li>Вводный модуль</li>
            <hr>
            <li>Синтаксис языка — часть 1</li>
            <hr>
            <li>Синтаксис языка — часть 1</li>
            <hr>
            <li>Синтаксис языка — часть 1</li>
            <hr>
            <li>Синтаксис языка — часть 1</li>
            </ol>
        </div>
        <div class="videotreiler">
        <h1> Видео-трейлер </h1>
        <p>Ознакомление День 1</p>
        <img src="@/assets/img/video.png" alt="">
    </div>
    </div>
    
</div>
</template>
<script>
export default {
    name:'Coursedescription'
}
</script>
<style scoped>
.coursedivision{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.coursedivisionleft{
    margin-top: 99px;       
}
.coursedivisionleft{
background: url(../assets/img/fcloud1.png) no-repeat left bottom;
}
.coursedivisionleft{
    background: url(../assets/img/fcloud2.png) no-repeat left top;
}
.coursedivisionleft h1{
    padding-top: 199px;
    padding-left: 361px;
}
.coursedivisionleft p{
    padding-top: 41px;
    padding-left: 176px;
}
.buycourse{
    width: 170px;
    height: 60px;
    margin-left: 37%;
    margin-top: 6%;
    background-color: #F96A38;
    border-color: 2px solid #062060;
    color: #fff;
    font-size: 16px;
    border-radius: 44px;
    border: none;
}
.coursedivisionright{
    margin-top: 199px;
    background: url(../assets/img/fcloud3.png) no-repeat right 0%;
}
.descriptioncourse{
    display: flex;
    flex-direction: column;
    background: url(@/assets/img/fcloud-4.png) no-repeat center;
    height: 100vh;
}
.videotreiler{
    margin-top: 20%;
    margin-bottom: 187px;
}
.videotreiler img{
   margin-bottom: 187px; 
}
.videotreiler h1{
    text-align: center;
}
.videotreiler p {
    text-align: center;
}
.desccourse{
    width: 30%;
    margin-left: 35%;
    margin-top: 20%;
}
</style>