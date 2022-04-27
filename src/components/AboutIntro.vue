<template>
<div class="aboutintro">
    <div class="container aboutintro-inner">
        <div class="aboutparagraph">
            <h1>О нас</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб <br>
            -дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на <br>
            латинице с начала XVI века. В то время некий безымянный печатник<br>
            создал большую коллекцию размеров и форм шрифтов, используя <br>
            Lorem Ipsum для распечатки образцов. Lorem Ipsum <br>
            не только успешно пережил без заметных изменений пять веков <br>, 
            но и перешагнул в электронный дизайн. </p>
        </div>
        <div class="aboutintro-img">
            <img src="@/assets/img/OurTeam.png" alt="">
        </div>
        <div class="stairs"><img src="@/assets/img/stairs.png" alt=""></div>
    </div>
</div>
</template>
<style scoped>
.aboutintro{
  position: relative;
  background: url(@/assets/img/cloud.png) no-repeat left top/48% 78%
}
.aboutintro-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.aboutintro-img{
    max-width: 842px;
}

.aboutintro-img img{
    width: 100%;
}
.aboutparagraph{
    padding-bottom: 9%;
}
.aboutparagraph h1{
    text-align: center;
}

.stairs{
    position: absolute;
    left: 25%;
    bottom: -28%;
}
</style>