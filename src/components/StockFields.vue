<template>
<md-card-content class="card-content">
  <div>
    <div class="title">
      <div class="md-title">Market Stock data</div>
      <md-divider></md-divider>
      <md-divider></md-divider>
    </div>
    <form @submit.prevent="handleSubmit">
      <md-field>
        <label>ISIN Number</label>
        <md-input id="isin" name="isin" v-model="isin" autofocus></md-input>
      </md-field>
      <md-button class="md-raised md-primary btn-stock" type="submit"
        >FIND STOCK DATA</md-button
      >
    </form>
  </div>
  </md-card-content>
</template>

<script>
import { Actions } from "../store";

export default {
  name: "StockFields",
  data() {
    // default isin 
    return {
      isin: "",
    };
  },

  methods: {
    handleSubmit() {
      if (this.isin) {
        this.$store.dispatch(Actions.FIND_STOCK, this.isin);
        this.isin = "";
      }
    },
  },
};
</script>

<style scoped>
.form-stock-market {
  display: flex;
}
.btn-stock {
  width: 100%;
}
.card-content {
  background: #FEF8DD;
  padding : 40px;
}
</style>
