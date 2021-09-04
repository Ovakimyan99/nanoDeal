<template>
  <div>
    <div class="tabs" ref="tabs">
      <div class="tabs-btn" v-for="tab of this.tabs" :key="tab.text" @click="activeTab($event)">
        <img :src="`/img/icons/condition/suggestions/${tab.imgUrl}.svg`" :alt="tab.text" class="tabs-btn__img">
        <span class="tabs-btn__span">{{ tab.text }}</span>
      </div>
    </div>
    <div class="products-wrapper">
      <product-card-app
        v-for="n of 3"
        :key="n"
      />
    </div>
  </div>
</template>

<script>
import ProductCardApp from '../components/ProductCard'

export default {
  name: 'addNew',
  data: () => {
    return {
      tabs: [
        {
          text: 'Активные',
          imgUrl: 'active'
        },
        {
          text: 'На модерации',
          imgUrl: 'moderation'
        },
        {
          text: 'Черновики',
          imgUrl: 'draft'
        },
        {
          text: 'Архив',
          imgUrl: 'archive'
        }
      ]
    }
  },
  methods: {
    activeTab (e) {
      const tabs = this.$refs.tabs.querySelectorAll('.tabs-btn')
      const target = e.target.closest('.tabs-btn')
      if (target) {
        tabs.forEach((item) => {
          item.classList.remove('active')
        })
        target.classList.add('active')
      }
    }
  },
  components: {
    ProductCardApp
  }
}
</script>

<style lang="scss" scoped>
@import "static/css/mixins";

.tabs {
  display: flex;
  justify-content: flex-start;
  padding: 25px 0 50px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 25px;
    height: 1px;
    width: 100%;
    background: #D9C4B7;
  }

  &-btn {
    @include stateFontsMedium(var(--menu-words), 600);
    display: flex;
    align-items: center;
    padding: 10px 17px;
    border-radius: 10px;
    cursor: pointer;

    &__img {
      margin-right: 8px;
    }

    &.active {
      background: var(--white);
    }

    &:not(:last-child) {
      margin-right: 14px;
    }
  }
}

.products-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px 20px;
  grid-template-areas: ". . .";
}
</style>
