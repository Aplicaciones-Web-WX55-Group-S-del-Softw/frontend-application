<script>
export default { name: "star-rating",
  data() {
    return {
      ratings: [4.98, 5, 4.7, 5, 4.8], // Inicializa las calificaciones
      rating: 0, // Inicializa la calificación actual
      ratingText: '', // Inicializa el texto de la calificación
      userHasRated: false, // Inicializa el estado de calificación del usuario
      userRatingIndex: null, // Inicializa el índice de la calificación del usuario
      stars: [5, 4, 3, 2, 1], // Inicializa las estrellas
    };
  },
  created() {
    this.calculateAverage(); // Calcula el promedio inicial
  },
  methods: {
    setRating(starIndex) {
      if (!this.userHasRated) {
        // Si el usuario no ha calificado antes, agrega la nueva calificación a la lista
        this.ratings.push(starIndex);
        this.userRatingIndex = this.ratings.length - 1;
        this.userHasRated = true;
      } else {
        // Si el usuario ya ha calificado, actualiza su calificación
        this.ratings[this.userRatingIndex] = starIndex;
      }
      this.calculateAverage(); // Calcula el nuevo promedio
    },
    calculateAverage() {
      let sum = this.ratings.reduce((a, b) => a + b, 0);
      let avg = sum / this.ratings.length;
      this.rating = avg;
      this.updateRatingText(); // Actualiza el texto de la calificación
    },
    updateRatingText() {
      let ratingValue = `${this.rating.toFixed(2)}/5.00`;
      if (this.rating === 5) {
        this.ratingLabel = 'Excelente';
      } else if (this.rating >= 4) {
        this.ratingLabel = 'Muy Bueno';
      } else if (this.rating >= 3) {
        this.ratingLabel = 'Bueno';
      } else if (this.rating >= 2) {
        this.ratingLabel = 'Regular';
      } else {
        this.ratingLabel = 'Malo';
      }
      this.ratingValue = ratingValue;
    },
    getStarCount(star) {
      return this.ratings.filter(rating => Math.round(rating) === star).length;
    }
  }
}
</script>

<template>
  <div class="container">
    <section class="half-page">
      <strong class="label-valoration">Valoraciones del cliente</strong>
      <div class="star-rating-container">
        <span v-for="starIndex in 5" :key="starIndex" class="star" @click="setRating(starIndex)" :class="{ 'active': starIndex <= rating, 'selected': starIndex <= ratings[userRatingIndex] }">★</span>
      </div>
      <div class="rating-text">
        <div class="rating-label">{{ ratingLabel }}</div>
        <div class="rating-value">{{ ratingValue }}</div>
      </div>
      <div class="star-count-container">
        <div v-for="star in stars" :key="star" class="star-row">
          <div class="star-text">{{ star }} estrellas</div>
          <div class="bar" :style="{ width: getStarCount(star) * 3 + '%', backgroundColor: '#FEC200' }"></div>
          <div class="star-count">{{ getStarCount(star) }}</div>
        </div>
      </div>

    <!--  <div class="bottom-line"></div>-->
    </section>
  </div>
  <br>
</template>


<style>
.label-valoration {
  position: relative;
  top: 70px;
  font-size: 1.3em;
  margin-left: 300px;
}

.star {
  cursor: pointer;
  color: grey;
  font-size: 2.5em;
  transition: color 0.3s ease;
}

.star.selected {
  color: #FEC200;
}

.star-rating-container {
  margin-top: 63px;
  margin-left: 320px;
}

.star-count-container {
  margin-top: -140px;
  margin-left: 670px;
}

.star-text {
  font-size: 1.16em;
}

.rating-text {
  position: relative;
  top: 10px;
  font-size: 1.2em;
  margin-left: 350px;
}

.rating-value {
  margin-left: 5px;
}

.star-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.star-text {
  flex-shrink: 0;
}

.bar {
  height: 20px;
  margin: 5px 0;
  border-radius: 5px;
}

.bottom-line {
  width: 850px;
  height: 1px;
  background-color: gray;
  position: absolute;
  bottom: -360px;
  left: 270px;
}
.container{
  margin-top: -30px;

}
</style>