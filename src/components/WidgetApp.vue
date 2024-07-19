<template>
  <main class="main-form">
    <Sidebar></Sidebar>
    <FormApp></FormApp>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'WidgetApp',
  components: {
    Sidebar: defineAsyncComponent(() => import('@/components/Sidebar.vue')),
    FormApp: defineAsyncComponent(() => import('@/components/FormApp.vue'))
  }
}
</script>

<style lang="scss" scoped>
.main-form {
  margin: auto;
  width: 100%;
  max-width: 996px;
  box-shadow: 0 23px 79px rgba(0, 0, 0, 0.16);
  background: #fff;
  display: flex;
  gap: 40px;
}
</style>
