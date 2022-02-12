<template>
  <div class="container">
    <div class="row g-4">
      <div class="col-3" v-for="(char, index) in filteredContacts" :key="index">
        <CharCard :char="char" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CharCard from "./CharCard.vue";

export default {
  name: "Main",
  components: {
    CharCard,
  },
  props: ["keyFilter"],
  data() {
    return {
      chars: [],
    };
  },
  methods: {
    getApiDiscs() {
      axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        this.chars = res.data.results;
        this.$emit("test", this.chars);
      });
    },
  },
  computed: {
    filteredContacts() {
      return this.chars.filter((e) => {
        if (e.name.toLowerCase().includes(this.keyFilter.toLowerCase()))
          return true;
      });
    },
  },
  mounted() {
    this.getApiDiscs();
  },
};
</script>


<style scoped lang="scss">
</style>
