<template>
  <header class="container-fluid">
    <h1 class="text-center my-4">App di Rick & Morty</h1>
    <div class="container d-flex flex-column align-items-center">
      <div class="input-group mb-3 mb-5">
        <input
          v-model.trim="key"
          @keyup.enter="sendEmit(key)"
          type="text"
          class="form-control"
          placeholder="Cerca Personaggio.."
        />
        <button
          @click="sendEmit(key)"
          class="btn btn-primary"
          type="button"
          id="button-addon2"
        >
          Cerca
        </button>
        <button
          class="btn btn-danger"
          @click="sendEmit((key = ''))"
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      key: "",
    };
  },
  methods: {
    sendEmit(value) {
      this.$emit("filterContact", value);
    },
  },
};
</script>

<style>
</style>