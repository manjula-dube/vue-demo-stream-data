<template>
  <form
    @submit.prevent="handleSubmit"
    class="form-stock-market">
    <md-field>
      <label>ISIN</label>
      <md-input
        id="isin"
        name="isin"
        v-model="isin"
      ></md-input>
    </md-field>
    <md-button
      class="md-raised md-primary btn-stock"
      type="submit"
      >FIND STOCK DATA</md-button>
  </form>
</template>

<script>
import { Actions } from '../store'

export default {

  name: 'StockFields',
  data() {
    return {
      isin: '',
    }
  },

  methods: {
    handleSubmit() {
      if (this.isin) {
        this.$store.dispatch(Actions.FIND_STOCK, this.isin)
        this.isin = ''
      }
    },
  },
}
</script>

<style scoped>
.form-stock-market {
  display: flex;
}
.btn-stock {
  width: 100%;
}
</style>
