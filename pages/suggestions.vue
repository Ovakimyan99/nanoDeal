<template>
  <div>
    <div ref="tabs" class="tabs">
      <div v-for="tab of tabs" :key="tab.text" class="tabs-btn" @click="activeTab($event)">
        <img :src="`/img/icons/condition/suggestions/${tab.imgUrl}.svg`" :alt="tab.text" class="tabs-btn__img">
        <span class="tabs-btn__span">{{ tab.text }}</span>
      </div>
    </div>
    <search-app class="search-app" />
    <div class="products-wrapper">
      <product-card-app
        v-for="user of this.active"
        :key="user.title"
        :userData="user"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ProductCardApp from '../components/ProductCard'
import SearchApp from '../components/Search'

export default {
  name: 'AddNew',
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
  computed: {
    ...mapState('user', ['users']),
    ...mapGetters('user', ['active'])
  },
  components: {
    ProductCardApp,
    SearchApp
  }
}
</script>

<style lang="scss" scoped>
@import "static/css/mixins";

.tabs {
  display: flex;
  justify-content: flex-start;
  padding: 10px 0 30px;
  position: relative;
  overflow: auto;

  &:after {
    content: '';
    position: absolute;
    bottom: 15px;
    height: 1px;
    width: 100%;
    background: #D9C4B7;

    @media (min-width: 1148px) {
      bottom: 25px;
    }
  }

  &-btn {
    @include stateFontsMedium(var(--menu-words), 600);
    display: flex;
    align-items: center;
    padding: 10px 17px;
    border-radius: 10px;
    cursor: pointer;
    min-width: fit-content;

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

  @media (min-width: 694px) {
    overflow: visible;
  }

  @media (min-width: 1148px) {
    padding: 25px 0 50px;
  }
}

.products-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 830px) {
    justify-content: space-between;
  }

  @media (min-width: 1428px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas: ". . .";
    gap: 23px 43px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.search-app {
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 830px) {
    width: 350px;
  }

  @media (min-width: 1148px) {
    display: none;
  }
}
</style>
