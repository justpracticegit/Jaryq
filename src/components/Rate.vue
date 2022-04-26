<template>
     <div class="rates">
      <div class="container">
      <div class="rates__container">
        <div class="title">Тарифы</div>
        <div class="rates__list">
          <div class="rates__list-item">
            <div class="rates__name">Light</div>
            <p class="rates__course">1 курс</p>
            <div class="rates__content">
              <ul class="rates__content-list">
                <p class="whatinclude">Что входит:</p>
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />

                  Бесплатные материалы
                </li>
                <li class="rates__content-list-item">
                  <div class="rates__content-list-check-container">
                    <img
                      class="rates__content-list-check"
                      src="@/assets/img/check.svg"
                      alt="Check"
                    />
                  </div>
                  Психологический тест
                </li>
              </ul>
              <div class="rates__sales">
                <div class="rates__sales-prices">
                  <div class="rates__cur-price">47 500₸</div>
                  <div class="rates__prev-price">50 000₸</div>
                </div>
                <div class="rates__sales-desc">
                  -5% за покупку первые две недели
                </div>
              </div>
              <button class="btn">Выбрать курс</button>
            </div>
          </div>
          <div class="rates__list-item rates__list__item--active">
            <div class="rates__name">Standard</div>
            <p class="rates__course">2 курс</p>
            <div class="rates__content">
              <p class="whatinclude">Что входит:</p>
              <ul class="rates__content-list">
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check rates__content-list-check--active"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />

                  Бесплатные материалы
                </li>
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check rates__content-list-check--active"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />
                  Психологический тест
                </li>
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check rates__content-list-check--active"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />
                  Чат
                </li>
              </ul>
            </div>
            <div class="rates__sales">
              <div class="rates__sales-prices">
                <div class="rates__cur-price">63 000₸</div>
                <div class="rates__prev-price">70 000₸</div>
              </div>
              <div class="rates__sales-desc">
                -10% за покупку первые две недели
              </div>
            </div>
            <button class="btn">Выбрать курс</button>
          </div>
          <div class="rates__list-item">
            <div class="rates__name">Light</div>
            <p class="rates__course">1 курс</p>
            <div class="rates__content">
              <p class="whatinclude">Что входит:</p>
              <ul class="rates__content-list">
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />

                  Бесплатные материалы
                </li>
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />
                  Психологический тест
                </li>
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />
                  Чат
                </li>
                <li class="rates__content-list-item">
                  <img
                    class="rates__content-list-check"
                    src="@/assets/img/check.svg"
                    alt="Check"
                  />
                  Консультация
                </li>
              </ul>
            </div>
            <div class="rates__sales">
              <div class="rates__sales-prices">
                <div class="rates__cur-price">72 250₸</div>
                <div class="rates__prev-price">85 000₸</div>
              </div>
              <div class="rates__sales-desc">
                -15% за покупку первые две недели
              </div>
            </div>
            <button class="btn">Выбрать курс</button>
          </div>
        </div>
      </div>
     </div>
    </div>
</template>

<style scoped>
.rates {
  background: 
  url(@/assets/img/cloud-rate.png) no-repeat left top,
  url(@/assets/img/stair-rate.png) no-repeat right top,
  url(@/assets/img/gradient.svg) no-repeat left top/100%;
}

.rates__list {
  display: flex;
  justify-content: space-evenly;
  margin-top: 120px;
}
.title{
  text-align: center;
  margin-top: 200px;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 700;
  line-height: 59px;
  letter-spacing: 0em;
}
.rates__list-item {
  width: 335px;
  height: 546px;
  background-color: #fff;
  box-shadow: 0px 0px 54px rgba(9, 76, 201, 0.5);
  border-radius: 26px;
  /*padding: 32px;*/
}

.rates__list__item--active {
  background-color: #00e191;
}

.rates__name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
}

.rates__course {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
}

.rates__content {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.rates__content-list {
  text-align: start;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  list-style-type: none;
  letter-spacing: 0.5px;
}

.rates__content-list > p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

.rates__content-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.rates__content-list-check {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 7px;
  padding: 2px;
  background-color: lightgray;
}

.rates__content-list-check--active {
  background-color: #00cf87;
}
.rates__sales{
    margin-left: 35px;
}

.rates__sales-prices {
  display: flex;
  align-items: center;
}

.rates__cur-price {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  margin-right: 10px;
}

.rates__prev-price {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: line-through;
}

.rates__sales-desc {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 46px;
  background-color: #f96a38;
  border-radius: 44px;
  border: none;
  height: 50px;
  width: 200px;
  color: #fff;
  margin: 0 auto;
}
.whatinclude{
    text-align: center;
}
</style>