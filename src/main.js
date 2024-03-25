import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseCardAll from "./components/UI/BaseCardAll.vue";
const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-card-all", BaseCardAll);
app.mount("#app");
