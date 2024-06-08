import { ref } from 'vue';
import farmImage1 from "../../assets/farm-1.png";
import farmImage2 from "../../assets/farm-2.png";
import farmImage3 from "../../assets/farm-3.png";
import farmImage4 from "../../assets/farm-4.png";
import farmImage5 from "../../assets/farm-5.png";


const farms = ref([
    {
        id: 'farm1',
        name: 'Los Alamos Farm',
        ubication: 'Asia',
        product: 'Chicken',
        totalSurface: 150,
        price: 7500,
        images: [farmImage1],
        highlight1: 'Ecological farm',
        highlight2: 'High production',
        highlight3: 'ISO certification',
        infrastructure: 'Modern facilities',
        farmType: 'Poultry',
        service: 'Chicken sales',
        certifications: 'ISO 9001'
    },
    {
        id: 'farm2',
        name: 'El Sol Farm',
        ubication: 'Arequipa',
        product: 'Cattle',
        totalSurface: 300,
        price: 12000,
        images: [farmImage2],
        highlight1: 'High quality livestock',
        highlight2: 'Innovative breeding techniques',
        highlight3: 'Organic certification',
        infrastructure: 'Wide pastures',
        farmType: 'Livestock',
        service: 'Beef sales',
        certifications: 'Organic certification'
    },
    {
        id: 'farm3',
        name: 'Green Valley Farm',
        ubication: 'Cusco',
        product: 'Sheep',
        totalSurface: 200,
        price: 8000,
        images: [farmImage3],
        highlight1: 'Free range sheep',
        highlight2: 'Sustainable practices',
        highlight3: 'Wool production',
        infrastructure: 'Natural grazing lands',
        farmType: 'Sheep',
        service: 'Wool and mutton sales',
        certifications: 'Sustainable farming certification'
    },
    {
        id: 'farm4',
        name: 'Blue Mountain Farm',
        ubication: 'Puno',
        product: 'Alpaca',
        totalSurface: 250,
        price: 10000,
        images: [farmImage4],
        highlight1: 'Alpaca breeding',
        highlight2: 'High altitude farming',
        highlight3: 'Alpaca wool production',
        infrastructure: 'High altitude pastures',
        farmType: 'Alpaca',
        service: 'Alpaca wool sales',
        certifications: 'High altitude farming certification'
    },
    {
        id: 'farm5',
        name: 'River Side Farm',
        ubication: 'Ica',
        product: 'Pigs',
        totalSurface: 180,
        price: 7000,
        images: [farmImage5],
        highlight1: 'Pig farming',
        highlight2: 'River side location',
        highlight3: 'Pork production',
        infrastructure: 'Modern pig pens',
        farmType: 'Pig',
        service: 'Pork sales',
        certifications: 'Pig farming certification'
    }
]);
const userFarms = ref([]); // Added to store the user's farms


const addFarm = (farm) => {
    const id = `farm${farms.value.length + userFarms.value.length + 1}`;
    farms.value.push({ ...farm, id });
    userFarms.value.push({ ...farm, id });
};
const getFarms = () => {
    return farms.value;
};
const getUserFarms = () => {
    return userFarms.value;
};

const getFarmById = (id) => {
    const farm = farms.value.find(farm => farm.id === id);
    console.log('getFarmById called, found farm:', farm); // confirmation
    return farm;
};
export default {
    addFarm,
    getFarms,
    getFarmById,
    getUserFarms,
};