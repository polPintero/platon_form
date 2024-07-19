<template>
  <label class="input-app" :class="{ clearable }">
    <input
      ref="input"
      type="text"
      :placeholder="placeholder"
      v-model="currentValue"
      v-mask="mask"
      @input="inputHandler"
    />
    <CloseIcon class="input-app__clear" v-if="isShowClose" @click="clear" />
    <span class="input-app__info" v-if="infoTxt && !isShowClose" :title="infoTxt">
      <InfoIcon />
    </span>
  </label>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'InputApp',
  components: {
    CloseIcon: defineAsyncComponent(() => import('@/components/icons/Close.vue')),
    InfoIcon: defineAsyncComponent(() => import('@/components/icons/Info.vue'))
  },
  props: {
    mask: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    validation: {
      type: Function,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    },
    infoTxt: {
      type: String,
      default: ''
    }
  },
  computed: {
    isShowClose() {
      return this.clearable && this.value
    }
  },
  data() {
    return {
      value: '',
      currentValue: ''
    }
  },
  methods: {
    inputHandler(event) {
      const { value } = event.target
      if (this.currentValue === this.value || (this.validation && !this.validation(event))) {
        this.currentValue = this.value
        return
      }
      this.value = value
      this.currentValue = value
    },
    clear() {
      this.currentValue = ''
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-app {
  position: relative;

  input {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 12px 25px 12px 10px;
    outline: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: #f2f2f2;
    border: 1px solid transparent;
    text-align: center;

    &:hover,
    &:focus {
      border-color: #777777;
    }
  }

  &__clear {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -50%);
    cursor: pointer;
  }

  &__info {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    fill: #777;
    opacity: 0.3;
    &:hover {
      fill: #f26424;
      opacity: 1;
    }
  }
}
</style>
