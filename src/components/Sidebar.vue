<template>
  <section class="sidebar">
    <LogoIcon></LogoIcon>
    <SidebarInfo />
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'Sidebar',
  components: {
    LogoIcon: defineAsyncComponent(() => import('@/components/icons/Logo.vue')),
    SidebarInfo: defineAsyncComponent(() => import('@/components/SidebarInfo.vue'))
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 360px;
  min-width: 360px;
  padding: 15px 40px;
  box-shadow: 0 23px 79px rgba(0, 0, 0, 0.16);
  background: white;
}
</style>
