<template>
  <section class="form-app">sdfsdf</section>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'FromApp',
  components: {
    LogoIcon: defineAsyncComponent(() => import('@/components/icons/Logo.vue'))
  }
}
</script>

<style lang="scss" scoped>
.form-app {
  margin-top: 45px;
  background-color: #fff;
  box-shadow: 0 12px 29px rgba(0, 0, 0, 0.12);
  padding: 40px;
}
</style>
