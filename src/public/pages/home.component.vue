<script>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import FooterComponent from "../footer-component/footer-component.vue";
import ToolbarComponent from "../toolbar-component/toolbar-component.vue";
import { useRouter } from 'vue-router';

export default {
  components: { ToolbarComponent, FooterComponent },
  setup() {
    const router = useRouter();

    const farms = ref([]);
    const userFarms = ref([]);
    const originalFarms = ref([]);
    const selectedProduct = ref('all');
    const selectedUbication = ref('all');
    const currentProfile = ref(null);


    onMounted(async () => {
      try {
        const farmResponse = await axios.get('http://localhost:5077/api/v1/farm/farm/all');
        console.log('Datos recibidos:', farmResponse.data); // Verificar datos recibidos
        farms.value = farmResponse.data;
      } catch (error) {
        console.error('Error loading data:', error);
      }
    });

    const uniqueProducts = computed(() => {
      const products = originalFarms.value.map(farms => farm.product);
      return [...new Set(products)];
    });

    const uniqueUbications = computed(() => {
      const ubications = originalFarms.value.map(farm => farm.location);
      return [...new Set(ubications)];
    });

    const filterFarms = () => {
      if (selectedProduct.value === 'all' && selectedUbication.value === 'all') {
        farms.value = [...originalFarms.value];
      } else {
        farms.value = originalFarms.value.filter(farm => {
          return (selectedProduct.value !== 'all' ? farm.product === selectedProduct.value : true) &&
              (selectedUbication.value !== 'all' ? farm.location === selectedUbication.value : true);
        });
      }
    };

    watch([selectedProduct, selectedUbication], filterFarms);

    const navigateToDescriptions = (id) => {
      router.push({ path: `/farm/description/${id}` });
    };

    const ID = (id) => {
      if (['farm3', 'farm4', 'farm5'].includes(id)) { // Modificado para verificar el rol del usuario
        alert('If you want to enjoy all the content, you need to register or log in');
        router.push('/login');
      } else if (id) {
        router.push({ path: `/farm/description/${id}` });
      } else {
        console.error('No farm ID was provided');
      }
    };

    return { farms };
  }
};
</script>


<template>
  <toolbar-component/>
  <div class="main-container">
    <div class="section-search">
      <div class="filter-container">
        <i class="fas fa-filter"></i>
        <select v-model="selectedProduct" class="filter-select">
          <option value="all">All</option>
          <option v-for="product in uniqueProducts" :key="product" :value="product">
            {{ product }}
          </option>
        </select>
      </div>
      <div class="filter-container">
        <i class="fas fa-filter"></i>
        <select v-model="selectedUbication" class="filter-select">
          <option value="all">All</option>
          <option v-for="ubication in uniqueUbications" :key="ubication" :value="ubication">
            {{ ubication }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="!currentProfile">
      <div class="container" v-if="farms.length >= 0">
        <h1>Featured Farms:</h1>
        <div class="farms-container">
          <div class="card" v-for="farm in farms" :key="farm.id" @click="ID(farm.id)">
            <div class="card-details">
              <div class="image-section">
                <img :src="farm.image" alt="Farm image" class="farm-image">
              </div>
              <hr>
              <div class="info-section">
                <h2 class="text-title">Farm {{ farm.farmName }}</h2>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/map-marker-icon.png" alt="location"/>
                  {{ farm.location }}, Lima
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/chicken-icon.png" alt="product"/>
                  {{ farm.product }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/surface-icon.png" alt="surface"/>
                  {{ farm.surface }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/price-icon.png" alt="price"/>
                  $ {{ farm.price }}
                </p>
                <hr>
                <ul class="highlight">
                  <li v-if="farm.highlight1"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentProfile && currentProfile.role === 'Business Owner'">
      <div class="container" v-if="farms.length >= 0">
        <h1>Featured Farms:</h1>
        <div class="farms-container">
          <div class="card" v-for="farm in farms" :key="farm.id" @click="navigateToDescriptions(farm.id)">
            <div class="card-details">
              <div class="image-section">
                <img :src="farm.image" alt="Farm image" class="farm-image">
              </div>
              <hr>
              <div class="info-section">
                <h2 class="text-title">Farm {{ farm.farmName }}</h2>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/map-marker-icon.png" alt="location"/>
                  {{ farm.location }}, Lima
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/chicken-icon.png" alt="product"/>
                  {{ farm.product }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/surface-icon.png" alt="surface"/>
                  {{ farm.surface }} ha
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/price-icon.png" alt="price"/>
                  $ {{ farm.price }}
                </p>
                <hr>
                <ul class="highlight">
                  <li v-if="farm.highlight"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentProfile && currentProfile.role === 'Farmer'">
      <div class="container" v-if="farms.length >= 0">
        <h1>Featured Farms:</h1>
        <div class="farms-container">
          <div class="card" v-for="farm in farms" :key="farm.id" @click="navigateToDescriptions(farm.id)">
            <div class="card-details">
              <div class="image-section">
                <img :src="farm.images[0]" alt="Farm image" class="farm-image">
              </div>
              <hr>
              <div class="info-section">
                <h2 class="text-title">Farm {{ farm.farmName }}</h2>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/map-marker-icon.png" alt="Ubication"/>
                  {{ farm.location }}, Lima
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/chicken-icon.png" alt="Product"/>
                  {{ farm.product }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/surface-icon.png" alt="Surface"/>
                  {{ farm.surface }} ha
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/price-icon.png" alt="Price"/>
                  $ {{ farm.price }}
                </p>
                <hr>
                <ul class="highlight-list">
                  <li v-if="farm.highlight1">{{ farm.highlight1 }}</li>
                  <li v-if="farm.highlight2">{{ farm.highlight2 }}</li>
                  <li v-if="farm.highlight3">{{ farm.highlight3 }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" v-if="farms.length >= 0">
        <h2>Your Farms:</h2>
        <div class="farms-container">
          <div class="card" v-for="farm in userFarms" :key="farm.id" @click="navigateToDescriptions(farm.id)">
            <div class="card-details">
              <div class="image-section">
                <img :src="farm.images[0]" alt="Farm image" class="farm-image">
              </div>
              <hr>
              <div class="info-section">
                <h2 class="text-title">Farm {{ farm.name }}</h2>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/map-marker-icon.png" alt="Ubication"/>
                  {{ farm.ubication }}, Lima
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/chicken-icon.png" alt="Product"/>
                  {{ farm.product }}
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/surface-icon.png" alt="Surface"/>
                  {{ farm.totalSurface }} ha
                </p>
                <p class="text-body">
                  <img width="20" height="20" src="../../assets/price-icon.png" alt="Price"/>
                  $ {{ farm.price }}
                </p>
                <hr>
                <ul class="highlight-list">
                  <li v-if="farm.highlight1">{{ farm.highlight1 }}</li>
                  <li v-if="farm.highlight2">{{ farm.highlight2 }}</li>
                  <li v-if="farm.highlight3">{{ farm.highlight3 }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component/>
</template>


<style scoped>
.main-container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
input::placeholder {
  text-align: center;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 148vh;
}

.filter-container {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 3px solid #003f17;
  border-radius:5px;
  padding: 12px 25px;
}
.filter-select option {
  font-size: 18px;
}
.filter-select {
  padding: 5px;
  border-radius: 5px;
  border:none;

}
.filter-select:focus {
  outline: none;
  box-shadow: none;
}
.section-search {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}


.farms-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.farms-container .card {
  flex: 0 0 calc(25% - 40px);
  margin: 20px;
  border: 2px solid #276749;
  border-radius: 8px;
  background: #FFFCFC;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.farms-container .card-details {
  padding: 10px;
}

.image-section .farm-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.text-title {
  color: #276749;
  font-size: 20px;
  margin: 10px 0;
  text-align: left;
}

.text-body {
  color: gray;
  font-size: 16px;
  text-align: left;
  display: flex;
  align-items: center;
}

.highlight-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.highlight-list li {
  color: gray;
  font-size: 16px;
  flex: 1;
  text-align: center;
  padding: 5px;
}

/* Media query for small screens */
@media (max-width: 768px) {
  body{
    min-height:50vh;
  }
  .card {
    width: 80%;
    margin: 10px auto;
  }

  .highlight-list li {
    text-align: left;
  }
  .farms-container .card {
    flex: 0 0 calc(50% - 40px);
  }
  .section-search{
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .container h1{
    align-items: center;
    display: flex;
    flex-direction: column;
    color:darkgreen;
    font-weight: bold;
    font-size:3em;
  }
  .highlight-list {
    display: flex;
    align-items: center;
  }
}
</style>
