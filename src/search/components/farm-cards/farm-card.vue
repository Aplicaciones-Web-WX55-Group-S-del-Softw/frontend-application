<script>
  export default {
    name: "farm-card"
  }

</script>

<template>
  <div class="section-search">
    <input type="text" placeholder="Product">
    <input type="text" placeholder="Location">
    <button class="choose-plan-btn">Search</button>
  </div>

  <div class="card-aditional">
    <h2>Featured farms: </h2>
  </div>

  <div class="cardF">

    <pv-card class="mt-2">
      <template #content>
        <img class="img-farm1" src="../../../assets/img-granja1.jpg" alt="Farm">
      </template>
    </pv-card>

    <pv-card class="mt-3">
      <template #content>
        <h1 class="cardF-title2">Farm Tsuneo</h1>
        <div class="location-container">
          <img src="../../../assets/location.png" alt="Location" class="location-icon">
          <p class="location">Asia, Lima</p>
        </div>
        <p class="details">Chicken</p>
        <p class="details">50 ha</p>
        <p class="details">$/293,000.000</p>
      </template>
    </pv-card>

    <div class="additional-details">
      <p class="details">20   Barns</p>
      <p class="details">20 Corrals</p>
      <p class="details">Agua Potable</p>
    </div>


  </div>


</template>

<style >


.card-aditional {
  margin-left: 200px;
}


.section-search{
  display: flex;
  padding: 40px;
  justify-content: center;
  gap: 120px;
}


.location{
  font-size: 15px;
  color: gray;

}


hr {
  border: none;
  height: 2px;
  background-color: black;
  margin: 20px 0;
}

h1{
  color: #276749;
}


.choose-plan-btn{
  background-color: #45BF6C;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 8%;
  margin-top: 30px;
}
.choose-plan-btn:hover {
  transform: scale(1.05);
}

.section-search {
  display: flex;
  align-items: center;

}

.section-search input[type="text"] {
  padding: 10px;
  border: 2px solid #276749;
  border-radius: 8px;
  margin-right: 10px;
  font-size: 16px;
}

.section-search button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #45BF6C;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.section-search button:hover {
  background-color: #1d4d34;
}

.section-search button:focus {
  outline: none;
}

.cardF{
  margin-top: 450px;
  display: flex;
  justify-content: center;
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
  margin-top: -40px;
  transform: translateX(-305px);
  padding:10px
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