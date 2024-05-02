<script>
export default { name: "description-card",}
</script>

<template>
  <div class="cardD">
    <h1 class="cardD-title">Descripción</h1>
    <pv-card class="mt-1">
      <template #content>
        <ul>
          <li><strong>Ubicación:</strong> Situada en Asia.</li>
          <li><strong>Tipo de Granja:</strong> Avícola.</li>
          <li><strong>Superficie Total:</strong> 50 hectáreas.</li>
          <li><strong>Animales:</strong> Pollo</li>
          <li><strong>Infraestructura:</strong> graneros, corrales, sistema de riego, y vivienda para los trabajadores.</li>
          <li><strong>Servicios:</strong> Acceso a agua potable y electricidad.</li>
          <li><strong>Estado:</strong> Bien mantenido, con todas las instalaciones en funcionamiento.</li>
          <li><strong>Certificaciones:</strong> ISO 22000, BPA, HACCP</li>
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