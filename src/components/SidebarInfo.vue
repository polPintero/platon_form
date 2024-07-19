<template>
  <section class="sidebar-info">
    <div class="sidebar-info__item">
      <div class="sidebar-info__item__label">Website/Store:</div>
      <div class="sidebar-info__item__value">credit_Platon.ua</div>
    </div>
    <div class="sidebar-info__item">
      <div class="sidebar-info__item__label">Order number:</div>
      <div class="sidebar-info__item__value">PL_101200613</div>
    </div>
    <div class="sidebar-info__item amount">
      <div class="sidebar-info__item__label">Payment amount:</div>
      <div class="sidebar-info__item__value">
        {{ (amount + additionalAmount).toFixed(2) }} {{ currency }}
      </div>
    </div>
    <div class="sidebar-info__item amount">
      <div class="sidebar-info__item__label">Additional Services:</div>
      <div class="sidebar-info__item__value">{{ additionalAmount.toFixed(2) }} {{ currency }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarInfo',
  props: {
    amount: {
      type: Number,
      default: 1
    }
  },
  computed: {
    additionalAmount() {
      return this.$store.getters['additionalAmount'] || 0
    }
  },
  data() {
    return {
      currency: 'uah'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-info {
  &__item {
    display: flex;
    font-size: 16px;
    line-height: 38px;

    &__label {
      color: #777777;
      margin-right: 5px;
    }

    &.amount {
      align-items: baseline;

      .sidebar-info__item__value {
        color: #e66000;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
</style>
