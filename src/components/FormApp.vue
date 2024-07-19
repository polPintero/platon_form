<template>
  <form class="form-app">
    <InputApp
      mask="XXXX XXXX XXXX XXXX"
      placeholder="XXXX XXXX XXXX XXXX"
      :settings="card"
      clearable
      infoTxt="Enter the card number (16 digits)"
    />
    <div class="form-app__extra">
      <InputApp
        mask="##"
        placeholder="MM"
        :validation="monthValidation"
        infoTxt="Indicate the validity period of your card (month)"
      />
      <InputApp mask="##" placeholder="YY" infoTxt="Enter the year" />
      <InputApp
        mask="###"
        placeholder="CVV2/CVC2"
        infoTxt="The last 3 digits on the back of your card"
      />
    </div>
    <label>
      <input type="checkbox" />
      <span
        >Guarantee of fast return of funds
        <a href="https://platon.ua/policy.pdf" target="_blank">(public policy)</a>
      </span>
    </label>
    <button class="form-app__submit" type="submit">PAY</button>
  </form>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'FromApp',
  components: {
    InputApp: defineAsyncComponent(() => import('@/components/InputApp.vue'))
  },
  data() {
    return {
      card: {
        defaultValue: 'XXXX XXXX XXXX XXXX'
      }
    }
  },
  methods: {
    monthValidation(event) {
      const { value } = event.target
      return Number(value) <= 12
    }
  }
}
</script>

<style lang="scss" scoped>
.form-app {
  margin-top: 45px;
  margin-bottom: 25px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 12px 29px rgba(0, 0, 0, 0.12);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  &__extra {
    display: flex;
    gap: 10px;

    .input-app:last-child {
      margin-left: 10px;
    }
  }

  .input-app {
    font-size: 16px;
  }

  &__submit {
    background: linear-gradient(to right, #373737 0%, #000000 100%);
    color: #fff;
    font-size: 18px;
    height: 45px;
    border-radius: 25px;
    padding: 0 45px;
    outline: none;
    cursor: pointer;
    width: fit-content;
    align-self: center;

    &:hover {
      background: #373737;
    }
  }
}
</style>
