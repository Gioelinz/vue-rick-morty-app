<template>
  <div id="app">
    <Header @filterContact="newKey" />
    <Main @test="getApiArray" :key-filter="keyFilter" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      chars: [],
      keyFilter: "",
    };
  },
  methods: {
    getApiArray(arr) {
      this.chars = arr;
    },
    newKey(value) {
      this.keyFilter = value;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
