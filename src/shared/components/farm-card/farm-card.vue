<script>
export default { name: "farm-card",}
</script>

<template>
  <div class="cardF">
    <h1 class="cardF-title">Acerca de la granja</h1>

    <pv-card class="mt-2">
      <template #content>
        <img class="img-farm1" src="../../../assets/img-farm1.png" alt="Farm">
      </template>
    </pv-card>

    <pv-card class="mt-3">
      <template #content>
        <h1 class="cardF-title2">Granja Tsuneo</h1>
        <div class="location-container">
          <img src="../../../assets/location.png" alt="Location" class="location-icon">
          <p class="location">Asia, Lima</p>
        </div>
        <p class="details">Pollos</p>
        <p class="details">50 ha</p>
        <p class="details">s/293,000.000</p>
      </template>
    </pv-card>

    <div class="additional-details">
      <p class="details">20 Graneros</p>
      <p class="details">20 Corrales</p>
      <p class="details">Agua Potable</p>
    </div>
  </div>
</template>

<style>

.cardF{
  position: relative;
  display: flex;
  justify-content: center;
}

.cardF-title {
  position: absolute;
  margin-top: -435px;
  margin-left: -505px;
  font-size: 25px;
}

.cardF-title2 {
  color: #44604D;
  margin-top: -25px;
  margin-left: -10px;
  font-size: 26px;
}

.location-container {
  display: flex;
  align-items: center;
}

.location-icon {
  width: 45.92px;
  height: 30.04px;
  margin-right: -30px;
  margin-left: -16px;
}

.location {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.42);
  margin-bottom: -10px;
  margin-left: 20px;
  transform: translateY(-10px);
}

.details {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #807A7A;
  margin-bottom: -10px;
  margin-left: 20px;
  transform: translateY(-10px);
}

.additional-details {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: -25px;
  transform: translateX(-305px);
}

.additional-details::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10px;
  right: -13px;
  border-top: 1px solid rgba(0, 0, 0, 0.42);
}

.img-farm1 {
  width: 295px;
  height: 200px;
  object-fit: cover;
  object-position: top;
  margin-top: -55px;
  margin-left: -15px;
}

.mt-2{
  margin-top: -370px;
  width: 295px;
  height: 240px;
  margin-left: -200px;
}

.mt-3 p {
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
}

.mt-3 {
  margin-top: -195px;
  width: 295px;
  height: 195px;
  border: 1px solid gray;
  margin-left: -294px;
}

</style>