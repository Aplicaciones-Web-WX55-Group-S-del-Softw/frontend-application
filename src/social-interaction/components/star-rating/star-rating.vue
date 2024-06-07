<script>
export default {
  name: "star-rating",
  data() {
    return {
      ratings: [4.98, 5, 4.7, 5, 4.8],
      rating: 0,
      ratingText: '',
      userHasRated: false,
      userRatingIndex: null,
      stars: [5, 4, 3, 2, 1],
    };
  },
  created() {
    this.calculateAverage();
  },
  methods: {
    setRating(starIndex) {
      if (!this.userHasRated) {
        this.ratings.push(starIndex);
        this.userRatingIndex = this.ratings.length - 1;
        this.userHasRated = true;
      } else {
        this.ratings[this.userRatingIndex] = starIndex;
      }
      this.calculateAverage();
    },
    calculateAverage() {
      let sum = this.ratings.reduce((a, b) => a + b, 0);
      let avg = sum / this.ratings.length;
      this.rating = avg;
      this.updateRatingText();
    },
    updateRatingText() {
      let ratingValue = `${this.rating.toFixed(2)}/5.00`;
      if (this.rating === 5) {
        this.ratingLabel = 'Excellent';
      } else if (this.rating >= 4) {
        this.ratingLabel = 'Very Good';
      } else if (this.rating >= 3) {
        this.ratingLabel = 'Good';
      } else if (this.rating >= 2) {
        this.ratingLabel = 'Regular';
      } else {
        this.ratingLabel = 'Bad';
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
  <div class="rating-container">
    <div class="left-section">
      <div class="title">Customer ratings</div>
      <div class="star-rating-container">
        <span v-for="starIndex in 5" :key="starIndex" class="star" @click="setRating(starIndex)"
              :class="{ 'active': starIndex <= rating, 'selected': starIndex <= ratings[userRatingIndex] }">★</span>
      </div>
      <div class="rating-text">
        <div class="rating-label">{{ ratingLabel }}</div>
        <div class="rating-value">{{ ratingValue }}</div>
      </div>
    </div>
    <div class="right-section">
      <div class="star-count-container">
        <div v-for="star in stars" :key="star" class="star-row">
          <div class="star-text">{{ star }} star<span v-if="star > 1">s</span></div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: getStarCount(star) / ratings.length * 100 + '%' }"></div>
          </div>
          <div class="star-count">{{ getStarCount(star) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.rating-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:40%;
}

.left-section, .right-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
}

.star-rating-container {
  text-align: center;
  margin-bottom: 0.5em;
}

.star {
  cursor: pointer;
  color: grey;
  font-size: 2em;
  transition: color 0.3s ease;
}

.star.selected {
  color: #FEC200;
}

.rating-text {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 1em;
}

.star-count-container {
  width: 100%;
  margin-left: 2em; /* Espacio adicional entre las secciones */
}

.star-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  margin-top: 0.4em;
}

.star-text {
  flex-shrink: 0;
  width: 100px;
}

.progress-bar {
  width: 185px;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #FEC200;
  transition: width 0.3s ease;
}

.star-count {
  margin-left: 0.5em;
}

@media (max-width: 1000px) {
  .rating-container {
    flex-direction: column;
  }
  .star-count-container {
    margin-left: 0; /* Restablecer el margen para pantallas más pequeñas */
  }
}
</style>
