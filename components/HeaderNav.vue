<template>
  <header class="header">
    <!-- logo -->
    <div class="header-logo-wrapper">
      <img class="header-logo__btn" src="@/static/img/icons/general/menu.svg" alt="burger" title="тык">
      <img class="header-logo__img" src="@/static/img/icons/general/logo.svg" alt="nanodeal" title="компания nanodeal">
      <user-img-app :img-data="this.userData ? this.userData : null" class="header-logo__user" />
    </div>
    <!-- logo -->

    <!-- header link -->
    <nav class="header-list">
      <router-link
        v-for="link of links"
        :key="link.text"
        class="header-list__link"
        :to="link.page ? link.page : ''"
        exact
        @click.native="newPage(link)"
      >
        <img
          class="header-list__icon"
          :src="`/img/icons/pages/${link.icon}.svg`"
          :alt="link.text"
        >
        {{ link.text }}
      </router-link>
    </nav>
    <!-- header link -->
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import userImgApp from './UserImg'

export default {
  name: 'HeaderNav',
  data: () => {
    return {
      links: [
        {
          page: 'dashboard',
          text: 'Dashboard',
          icon: 'home'
        },
        {
          page: 'suggestions',
          text: 'Предложения',
          icon: 'suggestions'
        },
        {
          page: 'addnew',
          text: 'Добавить новое',
          icon: 'addNew'
        },
        {
          page: 'statistics',
          text: 'Статистика',
          icon: 'statistics'
        },
        {
          page: 'profile',
          text: 'Профиль',
          icon: 'profile'
        },
        {
          page: 'support',
          text: 'Поддержка',
          icon: 'support'
        },
        {
          page: 'list',
          text: 'Billing',
          icon: 'list'
        }
      ]
    }
  },
  computed: {
    ...mapState('user', ['userData'])
  },
  components: {
    userImgApp
  },
  methods: {
    ...mapMutations('pages', {
      CHANGE_PAGE_TITLE: 'CHANGE_PAGE_TITLE'
    }),
    newPage (linkPage) {
      const res = this.definePage(linkPage)
      this.CHANGE_PAGE_TITLE(res)
    },
    definePage (linkPage) {
      if (!linkPage.length) {
        return this.links.filter(page => page.page === linkPage.page)[0].text
      } else {
        return linkPage.filter(page => page.page === [...this.$route.fullPath].slice(1).join(''))[0].text
      }
    }
  },
  mounted () {
    this.newPage(this.links)
  }
}
</script>

<style lang="scss" scoped>
@import "static/css/mixins";

.header {
  width: 200px;
  padding: 10px 20px;

  &-logo-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto 50px;

    @media (min-width: 1440px) {
      &-logo-wrapper {
        justify-content: space-between;
      }
    }
  }

  &-logo {
    &__btn {
      display: inline-block;
      cursor: pointer;
    }

    &__img {
      max-width: 150px;
    }

    &__user {
      position: relative;
      border-radius: 50%;
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    @media (min-width: 1440px) {
      &__btn, &__user {
        display: none;
      }
    }
  }

  &-list {
    &__link {
      position: relative;
      padding: 17px 0 17px 63px;
      display: inline-block;
      border-radius: 16px;
      max-width: calc(100% - 63px);
      width: 100%;
      opacity: 0.8;

      @include stateFontsLitle(var(----menu-words), 600);
      text-decoration: none;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &.nuxt-link-active {
        background: var(--orange);
        color: var(--white);
      }
    }

    &__icon {
      position: absolute;
      left: 23px;
      top: 15px;
    }
  }
}
</style>
