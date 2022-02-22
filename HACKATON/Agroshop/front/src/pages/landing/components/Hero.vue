<template>
  <!-- Header-->
  <header>
    <div class="overlay"></div>
    <div class="absolute">
      <h1>AGROSHOP</h1>
      <p>De la granja a tu hogar</p>
    </div>
    <video autoplay muted loop id="myVideo">
      <source src="../../../assets/video-hero.mp4" type="video/mp4" />
    </video>
  </header>
</template>
<script>
export default {
  name: "Hero",
  props: {},
};
</script>

<style scoped>
header {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

video {
  width: 100%;
}

.absolute {
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
}

h1 {
  font-size: 5rem;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.432);
}
/* @media screen and (max-width: 360px;) {
  h1 {
    font-size: 1px;
  }
  .absolute {
    font-size: 0.5px;
  }
} */
</style>
