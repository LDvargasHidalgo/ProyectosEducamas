<template>
<section class="gallery">
  <div v-for="product in products" :key="product.id" >
    <router-link :to="{name: 'ProductView', params: {id: product.id}}">
    <div class="content"  >
      <h3>{{product.name}}</h3>
      <img v-bind:src="product.img">
      <h6>{{product.price}}€</h6>
      <p>{{product.quantity}} Kg</p>
      <p>{{product.Vendor}}</p>
      <p>{{product.desc}}</p>
      <p>{{product.Observ}}</p>
      
    </div>
    </router-link>
  </div>
</section>
</template>

<script>
export default {
  name: "CardList",
  props: {},
  data(){
    return{
      products:[]
    }
  },
  mounted() {
    this.loadData();
  },
  methods:{
    async loadData() {
      const response = await fetch("http://localhost:5000");
      this.products = await response.json();
      // console.log('products',this.products)
    },
  }
};
</script>

<style scoped>
/* <style type="text/css"> */

h3 {
  color: #726e25;
  text-align: center;
  font-size: 30px;
  margin: 0;
  padding-top: 10px;
}
a {
  text-decoration: none;
}
.cart-content{
  display:flex
}
.gallery {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.content {
 width: 50%;
 box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
}
.content:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  transform: translate(0px, -8px);
  transition: 0.6s;
}
img {
  max-width: 150px;
  max-height: 150px;
  text-align: center;
  margin: 0 auto;
  display: block;
}
p {
  text-align: center;
  color: #b2bec3;
  padding: 0 8px;
}
h6 {
  font-size: 20px;
  text-align: center;
  color: #f96c06;
  margin: 0;
}

h5 {
  color: #f96c06;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}
li {
  padding: 5px;
}
.fa {
  color: #ff9f43;
  font-size: 26px;
  transition: 0.4s;
}
.fa:hover {
  transform: scale(1.3);
  transition: 0.6s;
}
button {
  text-align: center;
  font-size: 24px;
  color: #fff;
  width: 100%;
  padding: 15px;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.buy-1 {
  background-color: #2183a2;
}
.buy-2 {
  background-color: #3b3e6e;
}
.buy-3 {
  background-color: #0b0b0b;
}
@media (max-width: 1000px) {
  .content {
    width: 46%;
  }
}
@media (max-width: 750px) {
  .content {
    width: 100%;
  }
}
</style>





