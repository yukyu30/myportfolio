<template>
  <div class="w-full text-left p-3 mt-5">
    <h1>Products</h1>
    <section class="my-4">
    <Card :contents ="products.contents"></Card>
    </section>
    
  </div>
</template>

<script>
import Card from "../Card.vue";
import axios from "axios";
export default {
  name: "product",
  data() {
    return {
      showModal: false,
      products: [],
    }
  },
  components: {
    Card,
  },
  async mounted() {
    // productsを取得
    //秘密にする必要がないため公開してます。
    const response = await axios.get(
      "https://yukyu-myportfolio.microcms.io/api/v1/products",
      {
        headers: { "X-API-KEY": process.env.VUE_APP_X_API_KEY}
      }
    );
    this.products = response.data;
  }
};
</script>