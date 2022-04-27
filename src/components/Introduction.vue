<template>
    <div class="introduction">
        <div class="container intro-content">
            <div class="intro-paragraph position-relative">
                <h1 class="intro-paragraph-h1">Что такое Lorem Ipsum?</h1>
                <p class="intro-paragraph-p">Lorem Ipsum - это текст-"рыба", часто 
                    используемый <br> в печати и вэб-дизайне. </p>
                <button class="btn-start">Начать тест</button>
                <div class=" circle position-absolute top-100 start-0 translate-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                        <title>Red Hot Chilli Peppers Logo</title>
                          <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                              <animateTransform
                                      attributeName="transform"
                                      begin="0s"
                                      dur="30s"
                                      type="rotate"
                                      from="0 250 250"
                                      to="360 250 250"
                                      repeatCount="indefinite" 
                                />
                              <!-- SMIL animation: deprecated in Chrome, so eventually will have to be replaced with Web Animation API or alternative -->
                            </path>
                            <symbol>
                              <rect x="225" y="135" width="50" height="230" id="redstripe"/>
                            </symbol>
                          </defs>
                          <text dy="20" textLength="1220">
                            <!-- textLength (essentially the circumference of the circle) is used as an alternative to letter-spacing for Firefox, which currently doesn't support letter-spacing for SVG -->
                            <textPath xlink:href="#textcircle">Смотреть видео Смотреть видео</textPath>
                          </text>
                      </svg>
                </div>
            </div>
        <div class="img-intro">
          <img src="@/assets/img/resource.png" alt="">
        </div>
      </div>
    </div>
</template>

<style scoped>
.intro{
    width: auto;
    padding-top: 131px;
}
.intro-content{
    display: flex;
    justify-content: space-between;
}
.intro-paragraph{
    margin-top: 296px;
    margin-right: -3%;
}
.intro-paragraph-h1{
    font-style: Bold;
    font-size: 52px;
}
.intro-paragraph-p{
    height: 44px;
    width: 470px;
    font-size: 18px;
    color: #062060;
    padding-top: 23px;
}
.btn-start{
    color: #FFFFFF;
    margin-top: 107px;
    margin-right: 470px;
    height: 52px;
    width: 192px;
    border-radius: 44px;
    background-color:#F96A38 ;
}
@font-face {
    font-family: FranklinGothic-Heavy;
    src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/Franklin_Gothic_Heavy_Regular.woff);
  }
body { 
  margin: 0;
  text-align: center;
}
svg { width: 45%; padding-bottom: 155px; padding-left: 50px; }
text{ 
  font-size: 63px;
  font-family:Monteserrat;
  font-weight: 500,Medium; 
  text-transform: uppercase;
  letter-spacing: 21px;
  fill: #094CC9;
}
.img-intro{
  size: 50%;
  padding-top: 131px;
}
.circle{
  padding-left: 218px;
}




@media (min-width:1400px){
    .container{
        max-width:1663px;
    }
}
</style>

