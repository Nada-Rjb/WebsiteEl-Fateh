<template>
  <div class="flash-deals">
    <v-container fluid>
      <v-row>
        <v-col cols="4" v-for="item in products" :key="item.id">
          <v-card>
            <img :src="'https://erp.elfateh.online' + item.thumbnail" alt="" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- {{ item.item_group }}
          Render product name 
          {{ item.last_purchase_rate }} -->
  <!-- Render product price -->
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log("this is flash deallls", this.products);
  },
};
</script>
