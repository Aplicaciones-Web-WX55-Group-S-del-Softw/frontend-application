<script>
export default {
  name: "payment-card"

}
</script>

<template>

  <div class="cards">

    <pv-card class="payment-card">

      <template #content >
        <div class="border">
          <h2 class="title-details">Card Details</h2>
          <div class="input-group">
            <input placeholder="Card Number" aria-label="Card Number">
          </div>

          <div class="input-group">
            <input  placeholder="MM/YY" aria-label="MM/YY">
            <input  placeholder="CVV" aria-label="CVV">
          </div>

          <div class="input-group">
            <input  placeholder="Email" aria-label="Email">
          </div>

        </div>

      </template>
    </pv-card>

    <div class="qr-code-container">
      <h2 class="title-qr">PAY FASTER </h2>
      <h3 class="description-qr">Scan this QR with your bank's electronic wallet </h3>
      <img src="../../../assets/qr-logo.png" alt="Yape">
    </div>
  </div>

</template>

<style scoped>

.cards{
  margin-top: 20px;
  margin-left:28%;
  display: flex; /* Utiliza flexbox */
  justify-content: center; /* Centra horizontalmente el contenido */
  border: 2px solid rgba(10, 12, 12, 0.04);
  width: 42%;
  border-radius: 8px; /* Define el radio de curvatura de los bordes */
  margin-bottom:20px;
}
.description-qr{
  margin-left: 16px;
  color: gray !important;
  font-size: 20px; /* Ajusta el tamaño del texto */

}
.qr-code-container {

  margin-top:20px;
  margin-left:20px;

  width: 150px;
  margin-bottom:20px;

}

.qr-code-container img {
  max-width: 100%;
  max-height: 100%;
  margin-left: 10px;
}


.payment-card{

  margin-top:10px;
  margin-bottom:10px;
  align-items: center;
  width: 300px;

}
.title-details{

  text-align: center;
  color: darkgreen; /* Cambia el color del borde al enfocar el input */


}
input{
  text-align: center;
  margin-top:10px;
  width: 200px;
}
.input-group {
  text-align: center; /* Centra los elementos hijos horizontalmente */

  flex-direction: column;
  gap: 10px;

}

.input-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.input-group input:focus {
  outline: none;
  border-color: darkgreen; /* Cambia el color del borde al enfocar el input */
}
.title-qr{
  margin-left: 16px;
  color: darkgreen; /* Cambia el color del borde al enfocar el input */

}


</style>
