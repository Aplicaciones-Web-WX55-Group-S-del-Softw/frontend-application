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
.cards {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  flex-wrap: wrap;
}

.payment-card {
  margin: 10px;
  width: 90%;
  max-width: 300px;
}

.qr-code-container {
  margin: 20px;
  width: 90%;
  max-width: 150px;
  text-align: center;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.input-group input {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  max-width: 200px;
}

@media (min-width: 768px) {
  .cards {
    flex-direction: row;
    width: 80%;
  }

  .payment-card, .qr-code-container {
    width: 45%;
  }
}

@media (min-width: 1024px) {
  .cards {
    width: 60%;
  }
}
</style>