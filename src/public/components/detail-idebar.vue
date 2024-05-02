<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <slot name="title"></slot>
  </div>
  <div class ="container">
    <div class="center-container">
      <div class="monitoring-cards-container">

        <div class="description">
          <div class="actions-container rectangle-background">
            <h3 class="header-style">Shed</h3>
            <router-link to="/shed/new" class="link-style">
              <h4>Add Shed</h4>
            </router-link>
            <router-link to="/list/sheds" class="link-style">
              <h4>List Sheds</h4>
            </router-link>
            <h3 class="header-style">Animals</h3>
            <router-link to="/animal/new" class="link-style">
              <h4>Add Animals</h4>
            </router-link>
            <router-link to="/list/animals" class="link-style">
              <h4>Animal Inventory</h4>
            </router-link>
           <!-- <router-link to="/registerfeeds" class="link-style">
              <h4>Feeding Registry</h4>
            </router-link>-->
            <h3 class="header-style">Crops</h3>
            <router-link to="/register/crops" class="link-style">
              <h4>Crop Registry</h4>
            </router-link>
            <router-link to="/list/crops" class="link-style">
              <h4>Crop Inventory</h4>
            </router-link>
            <!--
            <h3 class="header-style">Finances</h3>
            <router-link to="/registerexpenses" class="link-style">
              <h4>Expense Registry</h4>
            </router-link>
            -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  margin-top: 180px;
  margin-bottom: 60px;
  margin-left: -440px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -550px;
  margin-right:-200px;
  color: black;
}

h2 {
  font-weight: bold;
  font-size: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin: 0;
  color: black;
}

.monitoring-cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
}

.monitoring-card {
  height: 100px;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.monitoring-card router-link {
  text-decoration: none;
}

.monitoring-card.acciones-container{
  margin-right:-1000px;
}

.rectangle-background {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.header-style {
  color: #44604D;
  font-size: 1.5em;
}

.link-style {
  color: black;
  text-decoration: none;
}
</style>