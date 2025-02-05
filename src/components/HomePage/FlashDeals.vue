<template>
  <h1 class="text-3xl font-bold underline bg-black text-white">Hello world!</h1>
  <div class="flash-deals pt-10 pl-2 pr-2">
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
    >
      <SwiperSlide v-for="item in products" :key="item.id">
        <v-card class="product-card">
          <div
            class="image-container"
            :style="{
              backgroundImage: `url(${
                item.thumbnail.startsWith('http')
                  ? item.thumbnail
                  : 'https://erp.elfateh.online' + item.thumbnail
              })`,
            }"
          ></div>
          <v-card-text class="pl-0 pt0" dir="rtl">{{
            item.item_name.split(" ").length < 3
              ? item.item_name
              : item.item_name.split(" ").slice(0, 9).join(" ") + "..."
          }}</v-card-text>
        </v-card>
      </SwiperSlide>
      <!-- to be at the and of page  -->
      <div class="swiper-button-prev swiper-prev"></div>
      <div class="swiper-button-next swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
  <!-- {{ item.item_group }}
          Render product name 
          {{ item.last_purchase_rate }} -->
  <!-- Render product price -->
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper";
export default {
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    console.log("this is flash deallls", this.products);
  },
};
</script>
<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: azure;
  border-radius: 8px;
  .image-container {
    width: 220px;
    height: 200px;
    background-size: contain;
    background-position: center;
    border-radius: 8px;
    background-color: #d3d3d3;
  }
  .product-name {
    padding: 0;
    text-align: center;
    font-size: 14px;
    color: #333; /* You can customize text color */
    max-width: 90%;
  }
}
.swiper-button-next,
.swiper-button-prev {
  background-color: rgb(116, 185, 116);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-weight: 900;
  color: white;
  &::after {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
