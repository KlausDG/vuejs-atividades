<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: null
    };
  },

  beforeCreate() {
    axios
      .get("http://www.mocky.io/v2/5e3c74eb300000233c214dca")
      .then(response => (this.items = response.data));
  }
};
</script>
