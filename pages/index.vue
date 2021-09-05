<template>
  <div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  mounted () {
    window.onNuxtReady(() => { window.$nuxt.$router.push('/suggestions') })
  }
}
</script>
