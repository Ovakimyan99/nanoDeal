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
  padding: 30px 20px 20px;
  background: var(--back-color);
}

.page {
  background: var(--main-content);
  border: 6px solid var(--main-content-border);
  border-radius: 20px;
  flex: auto;
  padding: 30px;

  &-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: var(--menu-words);
    margin: 0;
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
    display: flex;
  }
}
</style>
