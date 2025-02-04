import { defineStore } from "pinia";
import axios from "axios";

import { API_CREDENTIALS } from "@/config"; // Import credentials

const auth = btoa(`${API_CREDENTIALS.username}:${API_CREDENTIALS.password}`);
ٍٍٍ
export const productModule = defineStore("productModule", {
  state: () => ({
    FlashDeals: [],
  }),

  actions: {
    async getProducts() {
      try {
        const response = await axios.get(
          "https://erp.elfateh.online/api/method/general_customization.general_customiztion.api.test",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        // Axios automatically parses JSON, so use response.data
        console.log(response.data);

        // Update state with fetched data
        this.FlashDeals = response.data;
      } catch (error) {
        console.error("Error fetching productsssss:", error);
      }
    },
  },
});
