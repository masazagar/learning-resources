<template>
  <header>Learning Resources</header>
  <div>
    <AddingAResource />
  </div>
  <div></div>
</template>

<script>
import AddingAResource from "./components/resources/AddingAResource.vue";
export default {
  components: {
    AddingAResource,
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}
header {
  background-color: rgb(81, 3, 81);
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
li {
  box-shadow: 0px 2px 8px rgb(161, 161, 161);
  width: 30%;
  padding: 0.6rem;
  padding-left: 1rem;
}

a {
  color: rgb(176, 0, 167);
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: pink;
}
</style>
