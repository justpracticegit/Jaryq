<template>
    <div class="courseintro">
        <div class="container introflex">
            <div class="introflexleft">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый
                 в печати и -дизайне.<br>Lorem Ipsum является
                 стандартной "рыбой" для текстов на латинице<br> 
                 с начала XVI века.</p>
            </div>
            <div class="introflexright">
                <img src="@/assets/img/Illustration.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.introflex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.introflexleft{
    background: url(@/assets/img/courseintrocloud1.png) no-repeat left 70%;
    padding-top: 20%;
    padding-left: 14%;
}
.introflexleft h1{
    padding-left: 20%;
}
.introflexright{
    background: url(@/assets/img/courseintrocloud2.png) no-repeat right 15%;
}
.introflexright img{
    margin-top: 187px;
}
</style>