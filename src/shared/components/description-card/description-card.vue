<script>
export default { name: "description-card",}
</script>

<template>
  <pv-card class="mt-1">
    <template #content>
      <ul>
        <li><strong>Location:</strong> Located in Asia.</li>
        <li><strong>Type of Farm:</strong> Poultry.</li>
        <li><strong>Total Area:</strong> 50 hectares.</li>
        <li><strong>Animals:</strong> Chicken</li>
        <li><strong>Infrastructure:</strong> barns, pens, irrigation system, and housing for workers.</li>
        <li><strong>Services:</strong> Access to drinking water and electricity.</li>
        <li><strong>Status:</strong> Well maintained, with all facilities in operation.</li>
        <li><strong>Certifications:</strong> ISO 22000, BPA, HACCP</li>
      </ul>
    </template>
  </pv-card>
</template>

<style>

.mt-1{
  position:relative;
  width: 470px;
  height: 395px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-left: 10%;
  margin-top: -4%;
}

ul {
  margin-top: -15px;
  margin-left: -25px;
}

li {
  margin-bottom: 22px;
}

</style>