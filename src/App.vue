<template>
    <Header />
  <div class="container" id="container">
    <TopMenu />
    <router-view> </router-view>
    <div class="top_button">
      <button v-on:click="go_top" type="button"><span>TOP</span></button>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/CMM/Header.vue";
import Footer from "./components/CMM/Footer.vue";
import TopMenu from "./components/TopMenu.vue";

export default {
  name: "App",
  data() {
    return {
      top: true,
    };
  },
  components: {
    Header: Header,
    TopMenu: TopMenu,
    Footer: Footer

  },

  methods: {
    go_top() {
      document.getElementById("app").scrollTo(0, 0);
    },
  },
};
</script>


<style>
@import "./css/reset.css";
@import "./css/common.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top_button {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.top_button button {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 2px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
