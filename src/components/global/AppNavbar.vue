<template>
  <div class="navbar">
    <v-app-bar>
      <v-app-bar-nav-icon @click="openCart"> </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"], // Inject the event bus
  methods: {
    openCart() {
      console.log("Emitting opencart event");
      this.Emitter.emit("opencart"); // Emit the 'opencart' event when the button is clicked
    },
  },
};
</script>
