<template>
  <div class="flash-deals">
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pl-0">
            <img
              :src="
                item.thumbnail.startsWith('http')
                  ? item.thumbnail
                  : 'https://erp.elfateh.online' + item.thumbnail
              "
              class="w-100"
              style="height: auto"
              alt="flash sale"
            />
            <v-card-text dir="rtl">{{
              item.item_name.split(" ").length < 3
                ? item.item_name
                : item.item_name.split(" ").slice(0, 9).join(" ") + "..."
            }}</v-card-text>
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
<style scoped>
.v-card-text {
  font-family: Cairo;
  font-weight: 600;
  font-size: 20px;
}
</style>
