<template>
  <div class="card">

    <!-- header -->
    <div class="card-header">
      <div class="card__company">
        <img src="@/static/img/icons/companies/nike.png" alt="nike" class="card__company-img">
        <span class="card__company-title">Nike</span>
      </div>
      <span class="card-state">Активное</span>
    </div>

    <!-- card image -->
    <picture class="card-image-wrapper">
      <source class="card-image-wrapper__img" srcset="@/static/img/products/sneaker-1.jpg" type="image/webp">
      <img class="card-image-wrapper__img" src="@/static/img/products/sneaker-1.jpg">
      <img class="card-image-wrapper__fon" src="@/static/img/products/sneaker-1.jpg">
    </picture>

    <!-- card filling: sms, bid, .. -->
    <div class="card-filling">
      <!-- card titile -->
      <h2 class="card-filling__title">Записать сторис в кросcовках Nike Air Max 720</h2>
      <!-- card description - GIFT / OFFER -->
      <p class="card-offer">
        Репост строис в официальном аккаунте NikeRussia
      </p>
      <!-- card sms -->
      <div class="card-info card-info--action">
        <span class="card-info__content">Новые сообщения</span>
        <div class="card-info__sms-wrapper">
          <span class="card-info__sms card-info--sms">10</span>
        </div>
      </div>
      <!-- card bid -->
      <div class="card-info card-info--action card-info--bid">
        <span class="card-info__content">Новые заявки</span>
        <div class="card-info__sms-wrapper">
          <!-- users img -->
          <user-img-app
            v-for="n of 3"
            :key="n"
            class="card-info__sms--bid card-info__img--bid"
          />
          <!-- users img amount -->
          <span class="card-info__sms card-info__sms--bid">+3</span>
        </div>
      </div>
      <!-- card timer -->
      <div class="card-info">
        <span class="card-info__content">До завершения</span>
        <time class="card-timer" datetime="2001-05-15 19:00">
          <div class="card-timer__block"><span id="days">1 д</span> :&#160;</div>
          <div class="card-timer__block"><span id="hours">3 ч</span> :&#160;</div>
          <div class="card-timer__block"><span id="minutes">30 м</span> :&#160;</div>
          <div class="card-timer__block"><span id="seconds">10 с</span></div>
        </time>
      </div>
      <!-- ignorance - я правда не понял о чем этот блок -->
      <div class="card-info">
        <span class="card-info__content">Выполнено</span>
        <span class="card-info__completed">250 / 3000</span>
      </div>
    </div>
  </div>
</template>

<script>
import UserImgApp from './UserImg'
export default {
  name: 'ProductCard',
  components: {
    UserImgApp
  }
}
</script>

<style lang="scss" scoped>
@import "static/css/mixins";

// card
.card {
  background: var(--white);
  box-shadow: 0 10px 20px rgba(233, 216, 207, 0.3);
  border-radius: 4px 20px 20px 24px;
  max-width: 322px;
  padding: 14px;
}

// header
.card {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 13px;
  }

  &__company {
    display: flex;
    align-items: center;

    &-img {
      width: 36px;
      border-radius: 11px;
    }

    &-title {
      margin-left: 13px;
      text-transform: capitalize;
      @include stateFontsMedium(var(--cards-words), 700)
    }
  }

  &-state {
    padding: 8px 14px;
    background: var(--green-shade);
    font-feature-settings: 'pnum' on, 'lnum' on;
    @include stateFontsLitle(var(--green), 600);
    border-radius: 8px;
    text-transform: capitalize;
  }
}

// image
.card {
  &-image-wrapper {
    position: relative;
    display: block;
    height: 160px;
    margin-bottom: 20px;

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 4px 20px 20px 20px;
      z-index: 2;
    }

    &__fon {
      position: absolute;
      width: 78%;
      height: 87%;
      opacity: 0.7;
      filter: blur(30px);
      bottom: -5px;
      left: 50%;
      transform: translatex(-50%);
      z-index: 1;
    }
  }
}

// filling
.card {
  &-filling {
    padding: 0 6px;

    &__title {
      @include stateFontsBig(var(--cards-words), 700);
      font-feature-settings: 'pnum' on, 'lnum' on;
      position: relative;
      z-index: 2;
      margin: 0;
    }
  }

  &-offer {
    position: relative;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FC5A8B;
    padding-left: 28px;

    &:after {
      content: '';
      position: absolute;
      background: url("/img/icons/general/gift.svg");
      width: 18px;
      height: 18px;
      left: 1px;
      top: 1px;
    }
  }
}

// puncts
.card {
  &-info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0.5px solid #D4D8E3;
    padding: 10px 0;

    &__sms-wrapper {
      cursor: pointer;
      display: flex;
      position: relative;

      list-style: none;
      text-decoration: none;
      margin: 0;

      &:after {
        content: '';
        position: absolute;
        right: -19px;
        width: 7px;
        height: 7px;
        border-top: 3px solid #B8C1CC;
        border-left: 3px solid #B8C1CC;
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
        border-radius: 2px;
      }
    }

    &__sms {
      padding: 7px;
      border-radius: 50%;
      line-height: 1;

      &--bid {
        background: var(--white-shade);
        color: var(--dull-purple);
        border: 3px solid white;
        z-index: 2;
      }
    }

    &__img--bid {
      &:first-child {
        transform: translateX(120%);
      }

      &:nth-child(2) {
        transform: translateX(80%);
      }

      &:nth-child(3) {
        transform: translateX(40%);
      }
    }

    &--sms {
      background: var(--red);
      color: var(--white);
    }

    &--action {
      padding-right: 20px;
      cursor: pointer;
      transition: background 0.3s ease-out;

      &:hover {
        background: var(--white-shade);
      }
    }

    &__content {
      @include stateFontsMedium;
    }

    &__completed {
      background: var(--green);
      color: var(--white);
      padding: 7px 12px;
      border-radius: 8px;
      @include stateFontsMedium(var(--white));
    }
  }
}

// timer
.card {
  &-timer {
    display: flex;
    padding: 8px 15px;
    background: var(--orange-shade);
    border-radius: 8px;

    &__block {
      @include stateFontsLitle(var(--orange), 700);
    }
  }
}

// other
.card-info.card-info--bid {
  padding: 7px 20px 7px 0;
}
</style>
