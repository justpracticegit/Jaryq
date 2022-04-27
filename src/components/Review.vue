<template>
    <div class="stair"></div>
    <div class="reviews">
        <div class="container reviews-inner">
        <div class="title">Отзывы</div>
        <div class="reviews__tabs">
          <button class="reviews__tab reviews__tab--active">От учеников</button>
          <button class="reviews__tab">От родителей</button>
        </div>
        <div class="reviews__items">
          <div class="reviews__item">
            <div class="reviews__item-title">Курс ИТ Фронтенд разработчик</div>
            <p class="reviews__item-text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
              латинице с начала XVI века. В то время некий безымянный печатник
              создал большую коллекцию размеров и форм шрифтов, используя Lorem
              Ipsum для распечатки образцов.
            </p>
            <div class="reviews__user">
              <img
                class="reviews__user-img"
                src="@/assets/img/avatar.png"
                alt="Avatar"
              />
              <div class="reviews__user-info">
                <div class="reviews__user-name">Самир Амиров</div>
                <div class="reviews__user-desc">Ученик 10-го класса</div>
              </div>
            </div>
          </div>
          <div class="reviews__item">
            <div class="reviews__item-title">Курс ИТ Фронтенд разработчик</div>
            <p class="reviews__item-text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
              латинице с начала XVI века. В то время некий безымянный печатник
              создал большую коллекцию размеров и форм шрифтов, используя Lorem
              Ipsum для распечатки образцов.
            </p>
            <div class="reviews__user">
              <img
                class="reviews__user-img"
                src="@/assets/img/avatar.png"
                alt="Avatar"
              />
              <div class="reviews__user-info">
                <div class="reviews__user-name">Самир Амиров</div>
                <div class="reviews__user-desc">Ученик 10-го класса</div>
              </div>
            </div>
          </div>
          <div class="reviews__item">
            <div class="reviews__item-title">Курс ИТ Фронтенд разработчик</div>
            <p class="reviews__item-text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
              латинице с начала XVI века. В то время некий безымянный печатник
              создал большую коллекцию размеров и форм шрифтов, используя Lorem
              Ipsum для распечатки образцов.
            </p>
            <div class="reviews__user">
              <img
                class="reviews__user-img"
                src="@/assets/img/avatar.png"
                alt="Avatar"
              />
              <div class="reviews__user-info">
                <div class="reviews__user-name">Самир Амиров</div>
                <div class="reviews__user-desc">Ученик 10-го класса</div>
              </div>
            </div>
          </div>
          <div class="reviews__item">
            <div class="reviews__item-title">Курс ИТ Фронтенд разработчик</div>
            <p class="reviews__item-text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
              латинице с начала XVI века. В то время некий безымянный печатник
              создал большую коллекцию размеров и форм шрифтов, используя Lorem
              Ipsum для распечатки образцов.
            </p>
            <div class="reviews__user">
              <img
                class="reviews__user-img"
                src="@/assets/img/avatar.png"
                alt="Avatar"
              />
              <div class="reviews__user-info">
                <div class="reviews__user-name">Самир Амиров</div>
                <div class="reviews__user-desc">Ученик 10-го класса</div>
              </div>
            </div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrows__item arrows__item-left"></div>
          <div class="arrows__item arrows__item-right arrows__item--active"></div>
        </div>
        </div>
    </div>
</template>
<style scoped>

* {
  box-sizing: border-box;
}
.stair {
  background: url(@/assets/img/stair-review.png) no-repeat;
  height: 50vh;
  margin-top: -329px;
  margin-left: 100px;
}
.reviews{
  background: 
  url(@/assets/img/rate-cloud.png) no-repeat right top,
  url(@/assets/img/half-cloud.png) no-repeat left 200px,
  url(@/assets/img/cloud-rate2.png) no-repeat right 550px;
  /* url(@/assets/img/stair-review.png) no-repeat left 100%; */
}
.reviews-inner{
  /* padding-top: 90px; */
  margin-top: -400px;
}

.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  margin-top: 300px;
}

.reviews__tabs {
  border-radius: 22px;
  background-color: #fff;
  max-width: 350px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 50px auto 75px auto;
}

.reviews__tab {
  border-radius: 22px;
  flex: 1 1 50%;
  border: none;
  background-color: #fff;
  color: #6e718f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.reviews__tab--active {
  background-color: #00e191;
  color: #fff;
}

.reviews__items {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 0px 110px;
  margin-bottom: 50px;
}

.reviews__item {
  flex: 1 0 450px;
  padding: 50px;
  background-color: #fff;
  border-radius: 48px;
}

.reviews__item:not(:last-child) {
  margin-right: 20px;
}

.reviews__item-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

.reviews__item-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}

.reviews__user {
  display: flex;
  justify-content: flex-start;
}

.reviews__user-img {
  margin-right: 10px;
}

.reviews__user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}

.reviews__user-name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

.reviews__user-desc {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
}

.arrows {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 0 auto;
}

.arrows__item {
  height: 20px;
  width: 20px;
  border-left: 5px solid black;
  border-top: 5px solid black;
}

.arrows__item-left {
  transform: rotate(-45deg);
}

.arrows__item-right {
  transform: rotate(135deg);
}

.arrows__item--active {
  border-color: #00e191;
}
</style>