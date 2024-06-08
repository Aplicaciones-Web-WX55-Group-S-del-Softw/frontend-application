<template>
<toolbar-component/>

<div v-if="!currentProfile || !currentProfile.role">
    <h2 class="title-description">About farm & Description</h2>
    <div class="container-app">
      <div class="full-page-app">
        <div class="container" v-if="farm">
          <div class="card">
            <div class="card-content">
              <div class="image-section">
                <div v-for="image in farm.images" :key="image">
                  <img :src="image" alt="Farm image" class="farm-image">
                </div>
              </div>
              <div class="info-section">
                <h2>Farm {{ farm.name }}</h2>
                <p>
                  <img width="20" height="20" src="../../../assets/map-marker-icon.png" alt="Ubication"/>
                  {{ farm.ubication }}, Lima
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../../assets/chicken-icon.png" alt="Product"/>
                  {{ farm.product }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../../assets/surface-icon.png" alt="Surface"/>
                  {{ farm.totalSurface }} ha
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../../assets/price-icon.png" alt="Price"/>
                  $ {{ farm.price }}
                </p>

                <hr>

                <ul class="highlight-list">
                  <li v-if="farm.highlight1">{{ farm.highlight1 }}</li>
                  <li v-if="farm.highlight2">{{ farm.highlight2 }}</li>
                  <li v-if="farm.highlight3">{{ farm.highlight3 }}</li>
                </ul>

                <hr>

                <p>Ubication: {{ farm.ubication }}</p>
                <p>Infrastructure: {{ farm.infrastructure }}</p>
                <p>Type of farm: {{ farm.farmType }}</p>
                <p>Product: {{ farm.product }}</p>
                <p>Total surface: {{ farm.totalSurface }}</p>
                <p>Service: {{ farm.service }}</p>
                <p>Certifications: {{ farm.certifications }}</p>
                <p>Price: $ {{ farm.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="footer-spacer"></div>
  <footer-component/>
</div>


  <div v-if="currentProfile && currentProfile.role === 'Business Owner'">
    <h2 class="title-description">About farm & Description</h2>
    <div class="container-app">
      <div class="full-page-app">
        <div class="container" v-if="farm">
          <div class="card">
            <div class="card-content">
              <div class="image-section">
                <div v-for="image in farm.images" :key="image">
                  <img :src="image" alt="Farm image" class="farm-image">
                </div>
              </div>
              <div class="info-section">
                <h2>Farm {{ farm.name }}</h2>
                <p>
                  <img width="20" height="20" src="../../../assets/map-marker-icon.png" alt="Ubication" />
                  {{ farm.ubication }}, Lima
                </p>
                <p>
                  <img width="20" height="20" src="../../../assets/chicken-icon.png" alt="Product" />
                  {{ farm.product }}
                </p>
                <p>
                  <img width="20" height="20" src="../../../assets/surface-icon.png" alt="Surface" />
                  {{ farm.totalSurface }} ha
                </p>
                <p>
                  <img width="20" height="20" src="../../../assets/price-icon.png" alt="Price" />
                  $ {{ farm.price }}
                </p>

                <hr>

                <ul class="highlight-list">
                  <li v-if="farm.highlight1">{{ farm.highlight1 }}</li>
                  <li v-if="farm.highlight2">{{ farm.highlight2 }}</li>
                  <li v-if="farm.highlight3">{{ farm.highlight3 }}</li>
                </ul>

                <hr>
                <p>Ubication: {{ farm.ubication }}</p>
                <p>Infrastructure: {{ farm.infrastructure }}</p>
                <p>Type of farm: {{ farm.farmType }}</p>
                <p>Product: {{ farm.product }}</p>
                <p>Total surface: {{ farm.totalSurface }}</p>
                <p>Service: {{ farm.service }}</p>
                <p>Certifications: {{ farm.certifications }}</p>
                <p>Price: $ {{ farm.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <star-rating/>
    <contact-card/>
    <div class="footer-spacer"></div>
    <footer-component/>
  </div>

  <div v-if="currentProfile && currentProfile.role === 'Farmer'">
    <h2 class="title-description">About farm & Description</h2>
    <div class="container-app">
      <div class="full-page-app">
        <div class="container" v-if="farm">
          <div class="card">
            <div class="card-content">
              <div class="image-section">
                <div v-for="image in farm.images" :key="image">
                  <img :src="image" alt="Farm image" class="farm-image">
                </div>
              </div>
              <div class="info-section">
                <h2>Farm {{ farm.name }}</h2>
                <p>
                  <img width="20" height="20" src="../../../assets/map-marker-icon.png" alt="Ubication"/>
                  {{ farm.ubication }}, Lima
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../../assets/chicken-icon.png" alt="Product"/>
                  {{ farm.product }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../../assets/surface-icon.png" alt="Surface"/>
                  {{ farm.totalSurface }} ha
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../../assets/price-icon.png" alt="Price"/>
                  $ {{ farm.price }}
                </p>

                <hr>

                <ul class="highlight-list">
                  <li v-if="farm.highlight1">{{ farm.highlight1 }}</li>
                  <li v-if="farm.highlight2">{{ farm.highlight2 }}</li>
                  <li v-if="farm.highlight3">{{ farm.highlight3 }}</li>
                </ul>

                <hr>

                <p>Ubication: {{ farm.ubication }}</p>
                <p>Infrastructure: {{ farm.infrastructure }}</p>
                <p>Type of farm: {{ farm.farmType }}</p>
                <p>Product: {{ farm.product }}</p>
                <p>Total surface: {{ farm.totalSurface }}</p>
                <p>Service: {{ farm.service }}</p>
                <p>Certifications: {{ farm.certifications }}</p>
                <p>Price: $ {{ farm.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-spacer"></div>
    <footer-component/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import farmService from "../../services/farm.js";
import Profile from "../../../register/services/profile/profile.js";
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import ContactCard from "../contact-card/contact-card.vue";
import StarRating from "../star-rating/star-rating.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";
export default {
  name: "farm-description",
  components: {
    ToolbarComponent,
    ContactCard,
    StarRating,
    FooterComponent,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const farm = ref(null);
    const currentProfile = ref(null);

    onMounted(async () => {
      const id = route.params.id;
      if (id) {
        farm.value = farmService.getFarmById(id);
        console.log(farm.value);
      } else {
        console.error('No se proporcionó un ID de granja');
        return;
      }

      const profiles = Profile.getProfiles();
      currentProfile.value = profiles[profiles.length - 1];
    });


    return { farm, currentProfile };
  },
};
</script>

<style scoped>
body {

  margin: 0;
  font-family: Arial, sans-serif;
}

.container-app {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.full-page-app {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-description {
  margin-top: 50px;
  font-size: 7em;
  text-align: center;
  color: darkgreen;
}

.container {
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card {
  width: 97%;
  max-width: 1500px;
  margin: 20px;
  border: 2px solid #276749;
  border-radius: 8px;
  background: #FFFCFC;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.card-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-section {
  flex: 1;
  padding: 50px;
}

.image-section .farm-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-left: 25px;
}

.card h2 {
  color: #276749;
  margin: 10px 0;
  font-size: 28px;
}



.card p {
  color: gray;
  font-size: 22px;
  margin-bottom: 25px;
}

.highlight-list {
  list-style-type: none;
  color: gray;
  font-size: 22px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
.footer-spacer {
  height: 30.3%;
}
.rating-spacer{
  height: 20%;
}
.contact-spacer{
  height: 220%;
}

hr{
  width:109.7%;
  border: 0;
  height: 3px;
  background: #003f17;
  margin: 20px 0;
}
@media screen and (max-width: 768px) {
  .full-page-app {
    max-width: 100%;
  }

  .card {
    width: 100%;
    max-width: 100%;
  }

  .image-section .farm-image {
    height: auto;
  }

  .title-description {
    font-size: 2em;
  }

  .card h2 {
    font-size: 24px;
  }

  .card p {
    font-size: 18px;
  }

  .highlight-list {
    font-size: 18px;
  }
  hr{
    max-width:125%;
  }
}

</style>