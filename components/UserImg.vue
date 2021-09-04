<template>
  <div class="user-img">
    <img
      :src="this.imgInfo ? this.imgInfo.link : '/img/users/user1.png'"
      :alt="this.imgInfo ? this.imgInfo.name : 'Человек'"
      :title="`${this.imgInfo ? this.imgInfo.name : 'неизсвестный'}, очень хороший человек`"
    >
  </div>
</template>

<script>
export default {
  name: 'userImg',
  data: () => {
    return {
    }
  },
  props: ['imgData'],
  computed: {
    imgInfo () {
      return this.imgData
    }
  }
}
</script>

<style lang="scss" scoped>
.user-img {
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
</style>
