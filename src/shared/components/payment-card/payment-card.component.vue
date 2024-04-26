<script>
export default {
  name: "payment-card"
}
</script>

<template>


    <pv-card class="payment-card">

      <div class="payment-container">
          <template #content >
            <div class="border">
            <h2 class="title-details">Detalles de la Tarjeta</h2>
            <div class="input-group">
              <input placeholder="Número de Tarjeta" aria-label="Número de Tarjeta">
            </div>

            <div class="input-group">
              <input matInput placeholder="MM/AA" aria-label="MM/AA">
              <input matInput placeholder="CVV" aria-label="CVV">
            </div>

            <div class="input-group">
              <input matInput placeholder="Correo Electrónico" aria-label="Correo Electrónico">
            </div>
            </div>
      <div class="qr-code-container">
        <h2>PAGA MÁS RÁPIDO </h2>
        <h3 class="description-qr">Escanea este QR con la billetera electrónica de tu banco </h3>
        <img src="../../../assets/qr-logo.png" alt="Yape">
        </div>


      </template>
      </div>
      </pv-card>



</template>

<style scoped>
.payment-container{
  flex-wrap: wrap; /* Permite que las tarjetas se envuelvan en filas adicionales si no caben en una sola fila */

}
.description-qr{
  margin-left: 16px;
  color: gray !important;
  font-size: 20px; /* Ajusta el tamaño del texto */

}
.qr-code-container {
  border: 2px solid rgba(12, 12, 12, 0.04);

  width: 200px;

}


.qr-code-container img {
  max-width: 100%;
  max-height: 100%;
}
.border{
  border: 2px solid rgba(12, 12, 12, 0.04);

}
.payment-card{
  padding: 10px;
  display: flex; /* Utiliza flexbox */

  margin-top:10px;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-left: 35%;

}
.title-details{
  text-align: center;

}
.input-group{
  text-align: center;


}
input{
  text-align: center;
  margin-bottom:10px;

}


</style>
<!--<div class="payment-container">
  <mat-card class="payment-card">
    <mat-card-content>
      <h2 class="title-details">Detalles de la Tarjeta</h2>
      <div class="input-group">
        <mat-form-field class="full-width">
          <input matInput placeholder="Número de Tarjeta" aria-label="Número de Tarjeta">
        </mat-form-field>
      </div>

      <div class="input-group">
        <mat-form-field class="half-width">
          <input matInput placeholder="MM/AA" aria-label="MM/AA">
        </mat-form-field>
        <mat-form-field class="half-width">
          <input matInput placeholder="CVV" aria-label="CVV">
        </mat-form-field>
      </div>

      <div class="input-group">
        <mat-form-field class="full-width">
          <input matInput placeholder="Correo Electrónico" aria-label="Correo Electrónico">
        </mat-form-field>
      </div>
    </mat-card-content>

  </mat-card>
  <div class="qr-code-container">
    <h2>PAGA MÁS RÁPIDO </h2>
    <h3 class="description-qr">Escanea este QR con la billetera electrónica de tu banco </h3>

    <img src="assets/qr-logo.png" alt="QR Code">
  </div>
</div>-->