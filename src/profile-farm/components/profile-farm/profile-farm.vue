<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import ToolbarComponent from "../../../public/toolbar-component/toolbar-component.vue";
import FooterComponent from "../../../public/footer-component/footer-component.vue";

export default {
  components: { FooterComponent, ToolbarComponent },
  setup() {
    const router = useRouter();
    const farm  = ref([]);

    const save = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://localhost:5077/api/v1/farm', farm.value);
        console.log(response.data);
        router.push('/home');
      } catch (error) {
        console.error('Error saving farm:', error);
      }
    };


    return { farm };
  },
};
</script>




<template>
  <toolbar-component/>
  <div class="body-container">
    <div class="container">
      <h1>CREATE FARM</h1>
      <div class="tasks">
        <form class="basic-form" @submit="save">
          <div class="information-container">
            <div class="form-group">
              <label for="farmName">Farm Name</label>
              <input type="text" id="farmName" name="farmName" placeholder="Farm Name" v-model="farm.farmName">
            </div>

            <div class="form-group">
              <label for="location">Location</label>
              <input type="text" id="location" name="location" placeholder="Location" v-model="farm.location">
            </div>

            <div class="form-group">
              <label for="type">Type</label>
              <input type="text" id="type" name="type" placeholder="Type" v-model="farm.type">
            </div>

            <div class="form-group">
              <label for="infrastructure">Infrastructure</label>
              <input type="text" id="infrastructure" name="infrastructure" placeholder="Infrastructure" v-model="farm.infrastructure">
            </div>

            <div class="form-group">
              <label for="certificate">Certificate</label>
              <input type="text" id="certificate" name="certificate" placeholder="Certificate" v-model="farm.certificate">
            </div>

            <div class="form-group">
              <label for="product">Product</label>
              <input type="text" id="product" name="product" placeholder="Product" v-model="farm.product">
            </div>

            <div class="form-group">
              <label for="surface">Surface</label>
              <input type="text" id="surface" name="surface" placeholder="Surface" v-model="farm.surface">
            </div>

            <div class="form-group">
              <label for="services">Services</label>
              <input type="text" id="services" name="services" placeholder="Services" v-model="farm.services">
            </div>

            <div class="form-group">
              <label for="status">Status</label>
              <input type="text" id="status" name="status" placeholder="Status" v-model="farm.status">
            </div>

            <div class="form-group">
              <label for="highlights">Highlights</label>
              <textarea id="highlights" name="highlights" placeholder="Highlights" v-model="farm.highlights"></textarea>
            </div>

            <div class="form-group">
              <label for="price">Price</label>
              <input type="text" id="price" name="price" placeholder="Price" v-model="farm.price">
            </div>

            <div class="form-group">
              <label for="image">Price</label>
              <input type="text" id="image" name="image" placeholder="image" v-model="farm.image">
            </div>

            <input type="file" id="fileInput" style="display: none" @change="onFileChange" accept="image/*" multiple>
            <label for="fileInput" class="Documents-btn">
              <span class="folderContainer">
                <svg class="fileBack" width="146" height="113" viewBox="0 0 146 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z" fill="url(#paint0_linear_117_4)"></path>
                  <defs>
                    <linearGradient id="paint0_linear_117_4" x1="0" y1="0" x2="72.93" y2="95.4804" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3B9C9C"></stop>
                      <stop offset="1" stop-color="#43BFC7"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg class="filePage" width="88" height="99" viewBox="0 0 88 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
                  <defs>
                    <linearGradient id="paint0_linear_117_6" x1="0" y1="0" x2="81" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"></stop>
                      <stop offset="1" stop-color="#3B9C9C"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg class="fileFront" width="160" height="79" viewBox="0 0 160 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z" fill="url(#paint0_linear_117_5)"></path>
                  <defs>
                    <linearGradient id="paint0_linear_117_5" x1="38.7619" y1="8.71323" x2="66.9106" y2="82.8317" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3B9C9C"></stop>
                      <stop offset="1" stop-color="#43BFC7"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p class="text">Documents</p>
            </label>

            <div class="button-group">
              <button type="submit">SAVE</button>
            </div>

            <div class="button-group">
              <button type="button" @click="router.push('/home')">CANCEL</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer-component/>
</template>





<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

body {

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
}

.body-container {
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  width: 90%;
  max-width: 1200px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
}

h1 {
  color: darkgreen;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.basic-form {
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
}

.form-group .highlights {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.button-group button {
  padding: 15px 30px;
  background-color: darkgreen;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}

.button-group button:hover {
  background-color: darkslategrey;
}

.information-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  width: 100%;
}

.Documents-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 45px;
  border: none;
  padding: 10px 25px;
  border-radius: 10px;
  background-color: rgba(122, 203, 163, 0.9);
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 25px;
  margin-left:180px;
}

.folderContainer {
  width: 40px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.fileBack {
  z-index: 1;
  width: 80%;
  height: auto;
}

.filePage {
  width: 50%;
  height: auto;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease-out;
}

.fileFront {
  width: 85%;
  height: auto;
  position: absolute;
  z-index: 3;
  opacity: 0.95;
  transform-origin: bottom;
  transition: all 0.3s ease-out;
}

.text {
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
}

.Documents-btn:hover .filePage {
  transform: translateY(-5px);
}

.Documents-btn:hover {
  background-color: rgba(87, 213, 170, 0.61);
}

.Documents-btn:active {
  transform: scale(0.95);
}

.Documents-btn:hover .fileFront {
  transform: rotateX(30deg);
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  max-width: 500px;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(90deg, #9ebd13 0%, #008552 100%);
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(90deg, #9ebd13 0%, #008552 100%);
  transition: width 0.3s, height 0.3s;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
  cursor: pointer;
  transition: width 0.3s, height 0.3s;
}

.slider::-webkit-slider-thumb:hover {
  width: 30px;
  height: 30px;
}

.slider::-moz-range-thumb:hover {
  width: 30px;
  height: 30px;
}

.number-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  background-color: rgba(168, 241, 200, 0.73);
  border-radius: 50px;
  padding: 5px;
  box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.75);
  margin: 10px auto;
}

.number-left,
.number-right {
  background-color: #17B169;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 30px;
  height: 30px;
  color: white;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;
  border-radius: 50%;
}

.number-quantity {
  padding: 0.15em;
  border: 0;
  width: 40px;
  text-align: center;
  -moz-appearance: textfield;
  background-color: rgba(200, 238, 213, 0.73);
  color: #333;
}

.number-left:hover,
.number-right:hover {
  background-color: #ff4500;
  transform: scale(1.1);
}

@media (max-width: 500px) {
  .container {
    width: 95%;
  }

  .basic-form {
    width: 100%;
    padding: 20px;
  }

  .form-group {
    width: 100%;
    align-items: center;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
  }

  .information-container {
    grid-template-columns: 1fr;
  }

  .Documents-btn {
    margin: 20px auto;
    justify-content: center;
  }

  .number-control {
    width: 100%;
    max-width: 300px;
  }

  .button-group {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .button-group button {
    margin: 10px;
  }
  .number-quantity {
    padding: 0.15em;
    border: none;
    width: 40px;
    text-align: center;
    -moz-appearance: textfield;
    background-color: rgba(200, 238, 213, 0.73);
    color: #333;
  }
}
</style>