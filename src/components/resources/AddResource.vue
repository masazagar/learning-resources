<template>
  <base-card-all>
    <template #card>
      <div>
        <h3>Add a new resource</h3>
        <form @submit.prevent="submitData">
          <div class="form-div">
            <label>Title</label>
            <input type="text" v-model="enteredTitle" />
          </div>
          <div class="form-div">
            <label>Description</label>
            <textarea row="4" v-model="enteredDesc"></textarea>
          </div>
          <div class="form-div">
            <label>Link</label>
            <input type="url" v-model="enteredLink" />
          </div>
          <button type="submit">Add Resource</button>
        </form>
      </div>
    </template></base-card-all
  >
</template>

<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      enteredTitle: "",
      enteredDesc: "",
      enteredLink: "",
    };
  },
  methods: {
    submitData() {
      const title = this.enteredTitle;
      const desc = this.enteredDesc;
      const link = this.enteredLink;

      this.addResource(title, desc, link);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.form-div {
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-bottom: 1rem;
}
button {
  background-color: rgb(54, 1, 54);
  color: white;
  border: none;
  padding: 0.5rem;
}
button:hover {
  background-color: rgb(222, 192, 222);
}
</style>
