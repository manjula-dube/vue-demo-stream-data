<template>
  <md-card v-if="stock">
    <md-card-content>
      <md-list>
        <md-list-item>Price: {{ stock.price }}</md-list-item>
        <md-list-item>ISIN: {{ stock.isin }}</md-list-item>
        <md-list-item>Bid: {{ stock.bid }}</md-list-item>
        <md-list-item>Ask: {{ stock.ask }}</md-list-item>
      </md-list>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-raised md-accent" @click="removeFromList">Remove Stock Data</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import { Actions } from '../store'

export default {
  name: 'StockView',
  props: ['isin'],

  computed: {
    stock() {
      return this.$store.state.prices[this.isin]
    },
  },
  methods: {
    removeFromList() {
      if (this.stock) {
        this.$store.dispatch(Actions.REMOVE_INDIVIDUAL_STOCK, this.stock.isin)
      }
    },
  },
}
</script>

