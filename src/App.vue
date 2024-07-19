<template>
  <WidgetApp></WidgetApp>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    WidgetApp: defineAsyncComponent(() => import('@/components/WidgetApp.vue'))
  }
}
</script>

<style scoped></style>
