<script>
export default { name: "star-rating",
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
  <div class="star-rating-container">
    <span v-for="starIndex in 5" :key="starIndex" class="star" @click="setRating(starIndex)" :class="{ 'active': starIndex <= rating, 'selected': starIndex <= ratings[userRatingIndex] }">★</span>
  </div>

  <div class="rating-text">
    <div class="rating-label">{{ ratingLabel }}</div>
    <div class="rating-value">{{ ratingValue }}</div>
  </div>

  <div class="star-count-container">
    <div v-for="star in stars" :key="star" class="star-row">
      <div class="star-text">{{ star }} star<span v-if="star > 1">s</span></div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: getStarCount(star) / ratings.length * 100 + '%' }"></div>
      </div>
      <div class="star-count">{{ getStarCount(star) }}</div>
    </div>
    <div class="bottom-line"></div>
  </div>

</template>

<style>

.star-rating-container {
  margin-top: -1.6em;
  text-align: center;
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

.star-text {
  font-size: 1.16em;
}

.rating-text {
  position: relative;
  margin-top: 0.5%;
  font-size: 1.2em;
}

.rating-value {
  margin-left: 1%;
}

.star-row {
  display: flex;
  align-items: center;
  gap: 1%;
  margin-top:0.4em;
  margin-left:56em;
  transform:translateY(-8.7em);
}

.star-text {
  flex-shrink: 0;
  width: 100px;
}

.star-count {
  margin-left: 0.1em;
  width: 30px;
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

.bottom-line {
  width: 70%;
  height: 1px;
  background-color: gray;
  margin-top:-4%;
  margin-left: 37.5%;
}

@media (max-width: 1350px) {

  .star-rating-container{
    margin-left: 55em;
  }

  .rating-text{
    transform:translateX(23em);
  }

  .rating-value{
    transform:translateX(0.25em);
  }

  .star-row {
    transform:translate(0.8em, 3em);
  }

  .bottom-line {
    width: 50%;
    margin-top:10%;
    margin-left: 63%;
  }
}

</style>