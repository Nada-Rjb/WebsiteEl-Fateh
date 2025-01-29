import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//pinia
import { createPinia } from "pinia";
// emitter comfig
import mitt from "mitt";
const Emitter = mitt();
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(router)
  .use(createPinia())
  .mount("#app");
