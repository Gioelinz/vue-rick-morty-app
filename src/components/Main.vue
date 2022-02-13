<template>
  <div class="container">
    <Pagination
      :prev="infoPage.prev"
      :next="infoPage.next"
      @changePage="takeUrl"
    />
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
import Pagination from "./Pagination.vue";

export default {
  name: "Main",
  components: {
    CharCard,
    Pagination,
  },
  props: ["keyFilter"],
  data() {
    return {
      chars: [],
      infoPage: {},
      getUrl: "",
      url: "https://rickandmortyapi.com/api/character",
    };
  },
  methods: {
    getApiDiscs(url) {
      axios.get(url).then((res) => {
        this.chars = res.data.results;
        const { prev, next } = res.data.info;
        this.infoPage = { prev, next };

        this.$emit("callApiPage", this.infoPage);
        this.$emit("callApi", this.chars);
      });
    },
    takeUrl(url) {
      this.getUrl = url;
      this.getApiDiscs(this.getUrl);
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
    this.getApiDiscs(this.url);
  },
};
</script>


<style scoped lang="scss">
</style>
