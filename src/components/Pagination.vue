<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li
        role="button"
        class="page-item"
        :class="{ disabled: !prev }"
        @click="setPage(prev)"
      >
        <a class="page-link">Previous</a>
      </li>
      <li
        role="button"
        class="page-item"
        :class="{ disabled: !next }"
        @click="setPage(next)"
      >
        <span class="page-link">Next</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ["prev", "next"],
  methods: {
    setPage(url) {
      if (!url) return;
      this.$emit("changePage", url);
    },
  },
};
</script>

<style scoped>
</style>