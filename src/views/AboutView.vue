<template>
  <div class="about">
    <div class="abouttop">
      <AboutIntro />
      <div class="abouttopdown">
        <img class="cloudimg1" src="@/assets/img/cloudabout1.png" alt="">
        <img class="cloudimg2" src="@/assets/img/cloudabout2.png" alt="">
        <img class="cloudimg3" src="@/assets/img/cloudabout2.png" alt="">
        <img class="cloudimg4" src="@/assets/img/cloudabout2.png" alt="">
      </div>
      <div class="container">
        
      </div>
    </div>  
  </div>
</template>
<style scoped>
.abouttop{
  margin-top: 5%;
  /* background: url(@/assets/img/cloudabout1.png) no-repeat left top/50%,
              url(@/assets/img/cloudabout2.png) no-repeat right top/50%; */
}
.cloudimg1{
  position: relative;
  width: 50%;
}
.cloudimg2{
  width: 50%;
  padding-right: 5%;
}
.cloudimg3{
  width: 50%;
}
.cloudimg4{
  width: 50%;
}
</style>

<script>
import AboutIntro from '../components/AboutIntro.vue'
export default {
  name:'AboutView',
  components:{
    AboutIntro
  }
}
</script>
