<template>
  <div class="card">
    <!-- header -->
    <div class="card-header">
      <div class="card__company">
        <img :src="user.brand.logoLink" :alt="user.brand.name" class="card__company-img">
        <span class="card__company-title">{{ user.brand.name }}</span>
      </div>
      <span class="card-state">{{ user.status }}</span>
    </div>

    <!-- card image -->
    <picture v-if="user.productImg.length" class="card-image-wrapper">
      <source
        class="card-image-wrapper__img"
        :srcset="extension ? extension : user.productImg[0]"
        type="image/webp"
      >
      <img class="card-image-wrapper__img" :src="user.productImg[0]">
      <img class="card-image-wrapper__fon" :src="user.productImg[0]">
    </picture>

    <!-- card filling: sms, bid, .. -->
    <div class="card-filling">
      <!-- card titile -->
      <h2 class="card-filling__title">
        {{ user.title }}
      </h2>
      <!-- card description - GIFT / OFFER -->
      <p class="card-offer">
        {{ user.gift }}
      </p>
      <!-- card sms -->
      <div class="card-info card-info--action">
        <span class="card-info__content">Новые сообщения</span>
        <div class="card-info__sms-wrapper">
          <span class="card-info__sms card-info--sms">{{ user.newSms.length }}</span>
        </div>
      </div>
      <!-- card bid -->
      <div class="card-info card-info--action card-info--bid">
        <span class="card-info__content">Новые заявки</span>
        <div class="card-info__sms-wrapper">
          <!-- users img -->
          <user-img-app
            v-for="n of this.user.newBid.slice(0,3)"
            :key="n*5 + n.name"
            :img-data="n"
            class="card-info__sms--bid card-info__img--bid"
          />
          <!-- :imgData="this.user.newBid[n]" -->
          <!-- users img amount -->
          <span class="card-info__sms card-info__sms--bid">{{ +user.newBid.length - 3 > 0 ? '+' + (user.newBid.length - 3) : 0 }}</span>
        </div>
      </div>
      <!-- card timer -->
      <div class="card-info">
        <span class="card-info__content">До завершения</span>
        <time class="card-timer" :datetime="this.user.dropDate" v-if="this.realDate && this.realDate > 0">
          <div class="card-timer__block"><span id="week">
            {{ Math.floor((Math.floor((this.timeLeft / (1000 * 60 * 60 * 24 * 7))))) }}н
          </span> :&#160;</div>
          <div class="card-timer__block"><span id="days">
            {{ Math.floor((this.timeLeft / (1000 * 60 * 60 * 24))) }}д
          </span> :&#160;</div>
          <div class="card-timer__block"><span id="hours">
            {{ Math.floor((this.timeLeft / (1000 * 60 * 60) % 24)) }}ч
          </span> :&#160;</div>
          <div class="card-timer__block"><span id="minutes">
            {{ Math.floor((this.timeLeft / 1000 / 60) % 60) }}м
          </span> :&#160;</div>
          <div class="card-timer__block"><span id="seconds">
            {{ Math.floor((this.timeLeft / 1000) % 60) }}с
          </span></div>
        </time>
        <time class="card-timer" :datetime="this.user.dropDate" v-else>
          <div class="card-timer__block">released</div>
        </time>
      </div>
      <!-- ignorance - я правда не понял о чем этот блок -->
      <div class="card-info">
        <span class="card-info__content">Выполнено</span>
        <span class="card-info__completed">{{ user.numDone }} / 3000</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserImgApp from './UserImg'

export default {
  name: 'ProductCard',
  components: {
    UserImgApp
  },
  props: ['userData'],
  data: () => ({
    realDate: null
  }),
  computed: {
    ...mapState('user', ['timeLeft']),
    user () {
      return this.userData
    },
    extension () {
      return this.user.productImg.filter(url => url.split('.')[1] === 'webp')
    }
  },
  methods: {
    ...mapActions('user', ['timer'])
  },
  async mounted () {
    await this.timer(this.user.dropDate)
    this.realDate = Date.parse(this.user.dropDate) - Date.parse(new Date())
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
  min-width: 250px;
  max-width: 322px;
  margin-bottom: 20px;
  padding: 5px 7px;

  &:not(:nth-child(2n)) {
    @media (min-width:810px) {
      margin-right: 15px;
    }
  }

  @media (min-width:410px) {
    padding: 14px;
  }

  @media (min-width:810px) {
    max-width: 322px;
    min-width: 300px;
  }

  @media (min-width: 1428px) {
    margin-right: 0;
    margin-bottom: 0;
  }
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
      filter: blur(10px);
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
    margin: 10px 0 14px;
    min-height: 32px;

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
      min-width: 30px;

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
      width: 16px;
      text-align: center;

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
    min-width: 140px;
    text-align: center;

    &__block {
      @include stateFontsLitle(var(--orange), 700);
      margin: 0 auto;
    }
  }
}

// other
.card-info.card-info--bid {
  padding: 7px 20px 7px 0;
}
</style>
