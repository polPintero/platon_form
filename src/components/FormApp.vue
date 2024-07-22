<template>
  <form class="form-app" @submit.prevent="submitHandler">
    <InputApp
      v-model="form.cardNumber.value"
      mask="#### #### #### ####"
      placeholder="XXXX XXXX XXXX XXXX"
      clearable
      infoTxt="Enter the card number (16 digits)"
      :validation="cardValidationEvent"
    />
    <div class="form-app__extra">
      <InputApp
        v-model="form.month.value"
        mask="##"
        placeholder="MM"
        :validation="monthValidationEvent"
        infoTxt="Indicate the validity period of your card (month)"
      />
      <InputApp
        v-model="form.year.value"
        mask="##"
        placeholder="YY"
        infoTxt="Enter the year"
        :validation="yearValidationEvent"
      />
      <InputApp
        v-model="form.cvv.value"
        mask="###"
        placeholder="CVV2/CVC2"
        infoTxt="The last 3 digits on the back of your card"
      />
    </div>
    <label class="form-app__checkbox">
      <span class="form-app__checkbox__input">
        <input type="checkbox" @input="policyChangeHandler" v-model="form.policy.value" />
      </span>
      <span
        >Guarantee of fast return of funds
        <a href="https://platon.ua/policy.pdf" target="_blank">(public policy)</a>
      </span>
    </label>
    <button class="form-app__submit" type="submit" :disabled="!isValidForm">PAY</button>
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
      form: {
        cardNumber: {
          value: '',
          validation: this.cardValidationForm
        },
        month: {
          value: '',
          validation: this.monthValidationForm
        },
        year: {
          value: '',
          validation: this.yearValidationForm
        },
        cvv: {
          value: '',
          validation: this.cvvValidationForm
        },
        policy: {
          value: true,
          validation: this.policyValidationForm
        }
      }
    }
  },
  computed: {
    isValidForm() {
      return this.formValidation()
    }
  },
  methods: {
    monthValidationEvent(event) {
      const { value } = event.target
      return Number(value) <= 12
    },
    yearValidationEvent(event) {
      const { value } = event.target
      if (value.length <= 1) return true
      const nowYear = new Date().getFullYear() - 2000
      const num = Number(value)
      return num >= nowYear && num <= nowYear + 20
    },
    cardValidationEvent(event) {
      const { value } = event.target
      const firstSymbol = parseFloat(value.split('')[0])
      return [3, 4, 5, 6].includes(firstSymbol)
    },
    policyChangeHandler(event) {
      this.$store.commit('setAdditionalAmount', event.target.checked ? 0.01 : 0)
    },
    submitHandler() {
      console.log(this.formValidation())
      const { form } = this
      const cardNumber = `card:${form.cardNumber.value}`
      const month = `month:${form.month.value}`
      const year = `year:${form.year.value}`
      const cvv = `cvv:${form.cvv.value}`
      const policy = `policy:${form.policy.value}`
      alert(`
      ${cardNumber}
      ${month}
      ${year}
      ${cvv}
      ${policy} 
      `)
    },
    cardValidationForm(v) {
      return v.split(' ').join('').length === 16
    },
    monthValidationForm(v) {
      if (v.toString().length <= 1) return false
      return this.monthValidationEvent({ target: { value: v } })
    },
    yearValidationForm(v) {
      if (v.toString().length <= 1) return false
      return this.yearValidationEvent({ target: { value: v } })
    },
    cvvValidationForm(v) {
      return v.length === 3
    },
    policyValidationForm(v) {
      return v
    },
    formValidation() {
      const isValid = Object.keys(this.form).every((key) => {
        const elem = this.form[key]
        if (!elem.validation) return true
        return elem.validation(elem.value)
      })
      return isValid
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

    &[disabled] {
      cursor: not-allowed;
    }

    &:hover {
      background: #373737;
    }
  }
  &__checkbox {
    font-size: 14px;
    display: flex;
    align-content: center;

    input {
      width: 22px;
      height: 22px;
      margin-right: 5px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      appearance: none;
      box-shadow: unset;
      outline: none;
      border-radius: 0.25em;
      cursor: pointer;

      &:checked {
        background-color: unset;
        border-color: unset;
        box-shadow: unset;
        outline: none;
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='%23e66000' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>");
      }
    }
    span {
      align-content: center;
    }
  }
}
</style>
