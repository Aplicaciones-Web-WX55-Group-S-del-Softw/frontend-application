<script>
export default { name: "description-card",}
</script>

<template>
  <div class="cardD">
    <h1 class="cardD-title">Descripción</h1>
    <pv-card class="mt-1">
      <template #content>
        <ul>
          <li><strong>Location:</strong> Located in Asia.</li>
          <li><strong>Farm Type:</strong> Poultry.</li>
          <li><strong>Total Area:</strong> 50 hectares.</li>
          <li><strong>Animals:</strong> Chicken.</li>
          <li><strong>Infrastructure:</strong> Barns, corrals, irrigation system, and housing for workers.</li>
          <li><strong>Services:</strong> Access to potable water and electricity.</li>
          <li><strong>Condition:</strong> Well-maintained, with all facilities operational.</li>
          <li><strong>Certifications:</strong> ISO 22000, GMP, HACCP.</li>
        </ul>
      </template>
    </pv-card>
  </div>
</template>

<style>

.cardD{
  position: relative;
  display: flex;
  justify-content: center;
}

.cardD-title {
  position: absolute;
  margin-top: 145px;
  margin-left: 360px;
  font-size: 25px;
}

.mt-1{
  margin-top: 180px;
  width: 470px;
  height: 395px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-left: 400px;
}

ul {
  margin-top: -15px;
  margin-left: -25px;
}

li {
  margin-bottom: 22px;
}

</style>