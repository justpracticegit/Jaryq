<template>
    <div class="proftest">
        <div class="container proftestcloud">
            <h1>Проф тест</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            <br> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" 
            <br>текстов на латинице с начала XVI века. В то время некий
            <br>безымянный печатник создал большую коллекцию размеров и
            <br>форм шрифтов, используя Lorem Ipsum для распечатки образцов.
            <br>Lorem Ipsum не только успешно пережил без заметных
                            <br> без заметных</p>
                        <button class="starttest">Начать тест</button>
        </div>
         <img src="@/assets/img/proftestintroimg.png" alt="">
    </div>
</template>
<style scoped>
.proftest{
   display: flex;
}
.proftest img{
    margin-left: 52%;
    margin-top: 11%;
}
.proftestcloud{
    background: url(@/assets/img/proftestintrocloud1.png) no-repeat ;
}
/* .proftestcloud h1{
   
}
.proftestcloud p{
   
} */
.starttest{
    /* width: 100px;
    position: absolute;
    top: 63%;
    height: 20px;
    background-color: #F96A38;
    border-radius: 44px;
    color: #fff;
    margin-left: 12%;
    margin-top: 5%;
    */
}
</style>