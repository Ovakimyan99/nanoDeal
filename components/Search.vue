<template>
  <form action="" method="get" class="search">
    <img class="search-img" src="@/static/img/icons/general/search.svg" alt="поиск" title="вводи, чо смотришь">
    <input @input="search" v-model="searchInput" class="search-input" type="search" placeholder="поиск">
  </form>
</template>

<script>
export default {
  name: 'Search',
  data: () => {
    return {
      searchInput: ''
    }
  },
  methods: {
    search () {
      console.log(this.searchInput)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "static/css/mixins";
.search {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 250px;
  border-radius: 13px;

  &-input, &-input:focus {
    outline: none;
    border: 0;
    background: var(--white-shade);
  }

  &-input {
    padding: 10px 10px 10px 38px;
    @include stateFontsMedium(var(--dull-purple), 600);
    background: var(--white);
    width: 100%;
    transition: background 0.3s ease-in;
  }

  &-img {
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>
