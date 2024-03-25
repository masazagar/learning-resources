<template>
  <InvalidDialog v-if="inputInvalid" />
  <base-card>
    <template #card>
      <button
        :style="theResourcesStyle"
        @click="showComponent('the-resources')"
      >
        The Resources
      </button>
      <button :style="addResourceStyle" @click="showComponent('add-resource')">
        Add a new Resource
      </button>
    </template>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import InvalidDialog from "./InvalidDialog.vue";
import TheResources from "./TheResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    TheResources,
    AddResource,
    InvalidDialog,
  },
  provide() {
    return {
      addResource: this.addResource,
      cancelError: this.cancelError,
      resources: this.resources,
      deleteResource: this.deleteResource,
    };
  },
  data() {
    return {
      inputInvalid: false,
      selectedTab: "the-resources",
      resources: [
        {
          id: 1,
          title: "Google",
          description: "Learn how to google...",
          link: "https://google.org",
        },
        {
          id: 2,
          title: "Vue.js",
          description: "Learn everything about Vue.js",
          link: "https://vuejs.org",
        },
      ],
    };
  },
  methods: {
    showComponent(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      if (
        title.trim() === "" ||
        description.trim() === "" ||
        link.trim() === ""
      ) {
        this.inputInvalid = true;
      } else {
        this.resources.unshift(newResource);
        this.selectedTab = "the-resources";
      }
    },
    cancelError() {
      this.inputInvalid = false;
    },
    deleteResource(resID) {
      const resIndex = this.resources.findIndex((res) => res.id === resID);
      this.resources.splice(resIndex, 1);
    },
  },
  computed: {
    theResourcesStyle() {
      return this.selectedTab === "add-resource"
        ? "background-color: white"
        : "";
    },

    addResourceStyle() {
      return this.selectedTab === "the-resources"
        ? "background-color: white"
        : "";
    },
  },
};
</script>
<style scoped>
button {
  background-color: rgb(200, 131, 159);
  border: none;
  padding: 1rem;
  margin-right: 0.4rem;
  color: black;
  font-family: inherit;
}
</style>
