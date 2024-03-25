<template>
  <ul>
    <li
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    >
      <h3>{{ res.title }}</h3>
      <p>{{ res.description }}</p>
      <a :href="res.link">Find out</a>
      <br />
      <button @click="deleteResource(res.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["id", "title", "description", "link"],

  inject: ["resources", "deleteResource"],
};
</script>

<style scoped>
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
