<template>
  <div id="app">
    <div class="link-container">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/About">Sobre mim</router-link>
      <router-link class="link" to="/Contact">Contato</router-link>
    </div>
    <router-view v-bind="posts"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: null
    };
  },

  beforeCreate() {
    axios
      .get("https://public-api.wordpress.com/rest/v1/sites/treinamentopipewalk.travel.blog/posts")
      .then(response => (this.posts = response.data))
      .catch(err =>(console.log(err)));
  }
};
</script>

<style scoped>
.link-container {
  text-align: center;
  margin-bottom: 20px;
}
.link-container .link {
  margin-right: 10%;
}

</style>