<template>
  <div class="feature">
    <v-container>
      <v-row>
        <v-col>
          <div class="parent d-flex flex-row align-center">
            <IconGeneral
              name="FastShipping"
              style="width: 30px"
              class="mr-5"
            ></IconGeneral>
            <span>Free Shipping</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex flex-row align-center">
            <IconGeneral
              name="Grantee"
              style="width: 25px"
              class="mr-5"
            ></IconGeneral>
            <span>Product Guarantee</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex flex-row align-center">
            <IconGeneral
              name="trophy"
              style="width: 30px"
              class="mr-5"
            ></IconGeneral>
            <span>Top Quality</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import IconGeneral from "../IconGeneral.vue";

export default {
  components: { IconGeneral },
};
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.parent span {
  margin-top: 0.5rem;
  font-size: 1.2rem;
}
</style>
