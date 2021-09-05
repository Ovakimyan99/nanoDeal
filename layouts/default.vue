<template>
  <div class="container">
    <header-nav-app />
    <div class="page">
      <div class="page-start">
        <h1 class="page-title">{{ this.pageTitle }}</h1>

        <span class="page-right-block">
          <!-- search -->
          <search-app class="page--search" />
          <!-- user img -->
          <user-img-app :img-data="this.userData" />
        </span>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderNavApp from '../components/HeaderNav'
import SearchApp from '../components/Search'
import UserImgApp from '../components/UserImg'

export default {
  data: () => {
    return {}
  },
  components: {
    HeaderNavApp,
    SearchApp,
    UserImgApp
  },
  computed: {
    ...mapState('pages', ['pageTitle']),
    ...mapState('user', ['userData'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 5px;
  background: var(--back-color);
  flex-direction: column;

  @media (min-width:410px) {
    padding: 10px 20px 20px;
  }

  @media (min-width:810px) {
    padding: 20px;
  }

  @media (min-width:1148px) {
    flex-direction: row;
    padding: 30px 20px 20px;
  }
}

.page {
  background: var(--main-content);
  border: 6px solid var(--main-content-border);
  border-radius: 20px;
  flex: 5;
  padding: 7px;

  &-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: var(--menu-words);
    margin: 0;

    @media (min-width: 1148px) {
      font-size: 24px;
    }
  }

  &-start {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &--search {
    margin-right: 16px;
  }

  &-right-block {
    display: none;

    @media (min-width:410px) {
      padding: 15px;
    }

    @media (min-width: 1148px) {
      display: flex;
    }
  }

  @media (min-width: 694px) {
    padding: 30px;
  }
}
</style>
