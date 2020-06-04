<template>
  <md-card v-if="stock">
    <md-card-content>
      <md-card-header>
        <div class="md-title"><b>ISIN: {{ stock.isin }} </b></div>
      </md-card-header>
      <md-list>
        <md-list-item>Price: {{ stock.price }}</md-list-item>
        <md-list-item>Bid: {{ stock.bid }}</md-list-item>
        <md-list-item>Ask: {{ stock.ask }}</md-list-item>
      </md-list>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-raised md-accent" @click="removeFromList"
        >Remove Stock Data</md-button
      >
    </md-card-actions>
  </md-card>
</template>

<script>
import { Actions } from "../store";

export default {
  name: "StockView",
  props: ["isin"],

  computed: {
    stock() {
      return this.$store.state.prices[this.isin];
    },
  },
  methods: {
    removeFromList() {
      if (this.stock) {
        this.$store.dispatch(Actions.REMOVE_INDIVIDUAL_STOCK, this.stock.isin);
      }
    },
  },
};
</script>

<style>
  .md-card {
    width: 500px;
    margin: 10px;
    display: inline-block;
    vertical-align: top;
  }

</style>