<template>
  <div id="app">
    <StockFields />
    <span class="md-display-2" v-if="isReconnectionFailed">The connection has failed</span>
    <div class="stock-data-container">
      <StockView v-for="stock in stocks" :key="stock" v-bind:isin="stock" />
    </div>
  </div>
</template>

<script>
import StockFields from './components/StockFields.vue'
import StockView from './components/StockView.vue'

export default {
  name: 'app',
  computed: {
    stocks() {
      return this.$store.state.stocks
    },
    isReconnectionFailed() {
      return this.$store.state.socket.isReconnectionFailed
    },
  },
  components: {
    StockFields,
    StockView,
  },
}
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #3e3e3e;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 10px;
  }
}

.stock-data-container {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & > * {
    margin: 5px;
  }
}
</style>
