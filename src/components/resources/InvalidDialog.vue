<template>
  <base-card-all>
    <template #card>
      <h2>Input is invalid</h2>
      <h3>Please fill all three inputs, so that you can add a new resource.</h3>
      <button @click="cancelError">Okay</button>
    </template>
  </base-card-all>
</template>

<script>
export default {
  inject: ["cancelError"],
};
</script>

<style scoped>
div {
  border: 1rem solid purple;
}
button {
  background-color: rgb(54, 1, 54);
  color: white;
  border: none;
  padding: 0.5rem;
  width: 20%;
}
button:hover {
  background-color: rgb(222, 192, 222);
}
</style>
