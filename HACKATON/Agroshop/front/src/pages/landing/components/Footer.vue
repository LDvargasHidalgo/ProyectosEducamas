<template>
  <footer>
    <div class="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
      <div class="col-12">
        <div class="row row-2">
          <div class="col-sm-3 text-md-center">
            <img
              class="logo"
              src="@/assets/logoFooter.png"
              height="90px"
              width="90px"
            />
          </div>
          <div class="col-sm-3 my-sm-0 mt-5">
            <ul class="list-unstyled">
              <li class="mt-0">Plataforma</li>
              <li>Centro de ayuda</li>
              <li>Seguridad</li>
            </ul>
          </div>
          <div class="col-sm-3 my-sm-0 mt-5">
            <ul class="list-unstyled">
              <li class="mt-0">Productos</li>
              <li>Proveedores</li>
              <li>Información</li>
            </ul>
          </div>
          <div class="col-sm-3 my-sm-0 mt-5">
            <ul class="list-unstyled">
              <li class="mt-0">Compañia</li>
              <li>Acerca de nosotros</li>
              <li>ESP-COL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
      <div class="col-12">
        <div class="row my-4 row-1 no-gutters">
          <div class="col-sm-3 col-auto text-center">
            <small>&#9400; Agroshop 2022</small>
          </div>
          <div class="col-md-3 col-auto"></div>
          <div class="col-md-3 col-auto"></div>
          <div class="col my-auto text-md-left text-right">
            <small>
              Agroshopcontact@agroshop.com
              <span
                ><img
                  src="https://i.imgur.com/TtB6MDc.png"
                  class="img-fluid"
                  width="25"
              /></span>
              <span
                ><img
                  src="https://i.imgur.com/N90KDYM.png"
                  class="img-fluid"
                  width="25" /></span
            ></small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped>
footer {
  color: #fff !important;
}
h5 {
  color: #ff964a;
}

li {
  margin-top: 20px;
  margin-bottom: 20px;
}

.Careers {
  cursor: pointer;
  color: #1e88e5;
}

.row-1 {
  background-color: #453424 !important;
}

.row-2 {
  background-color: #705438 !important;
}
</style>
