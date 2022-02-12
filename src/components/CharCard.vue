<template>
  <div class="text-center">
    <img class="rounded-circle img-fluid shadow" :src="char.image" alt="" />
    <h3 class="my-2 fw-bold">{{ char.name }}</h3>
    <div class="line"></div>
    <p class="fs-5 fw-bold">{{ char.species }}</p>
    <p class="fs-5">{{ char.location.name }}</p>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: ["char"],
};
</script>

<style lang="scss" scoped>
.line {
  height: 1px;
  width: 60px;
  background-color: black;
  margin: 15px auto;
}
</style>