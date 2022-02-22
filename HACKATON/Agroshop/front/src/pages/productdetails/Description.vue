<template class="description_view">
  <div>
    <h2 class="name_title">{{product.name}}</h2>
    <h3 class="vendor">{{product.desc}}</h3>
    <div class="all_details">
      <img
        class="img"
        v-bind:src="product.img"/>
      <div class="text_details">
        <ul>
          <li class="price">Precio: {{product.price}} €</li>
          <li>Cantidad disp: {{product.quantity}} kg</li>
          <li></li>
          <li>Vende: {{product.Vendor}}</li>
          <button class="button_add">Añadir a la cesta</button>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "description",
  props: {},
  data(){
    return{
      product:''
    }
  },
  mounted(){
    this.loadData()
  },
  methods:{
    async loadData() {
      const response = await fetch("http://localhost:5000/products/"  + this.$route.params.id);
      this.product = await response.json();
      // console.log('product',this.product)
    },
  }
};
</script>

<style scoped>
.descripton_view {
  font-family: "Poppins", sans-serif;
  background-color: #f1e0d3;
}
.name_title {
  color: #726e25;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  margin-top: 5vh;
}

.vendor {
  color: #f96c06;
  font-size: 30px;
  text-align: center;
}

.all_details {
  display: flex;
  justify-items: center;
  justify-content: center;
}

.img {
  width: 40vh;
  margin: 5vh;
}

.text_details {
  margin: 10vh;
  color: #995b40;
  font-size: 18px;
}

ul {
  list-style-type: none;
}

li {
  margin: 1vh;
}

.price {
  font-size: 25px;
}

.button_add {
  font-size: 18px;
  margin-top: 3vh;
}
</style>
