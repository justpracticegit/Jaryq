<template>
  <div class="home">
      <Introduction />
      <AboutIntro />
      <Course />
      <Review />
      <Rate />
      <Apply />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'
import AboutIntro from '@/components/AboutIntro.vue'
import Course from '@/components/Course.vue'
import Review from '@/components/Review.vue'
import Rate from '@/components/Rate.vue'
import Apply from '@/components/Apply.vue'
import FooterPage from '@/components/FooterPage.vue'
export default {
  name: 'HomeView',
  components: {
      Introduction,
      AboutIntro,
      Course,
      Review,
      Rate,
      Apply
  }
}
</script>

