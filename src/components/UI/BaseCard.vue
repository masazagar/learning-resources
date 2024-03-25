<template>
  <section>
    <div>
      <slot name="card"> </slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;
}

div {
  width: 30%;
  box-shadow: 0px 2px 8px rgb(190, 190, 190);
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
