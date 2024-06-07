import { ref } from 'vue';

const profiles = ref([]);
const registers = ref([]);

const addProfile = (profile) => {
    const id = `profile${profiles.value.length + 1}`;
    profiles.value.push({ ...profile, id });
};

const getProfiles = () => {
    return profiles.value;
};

const addRegister = (register) => {
    const id = `register${registers.value.length + 1}`;
    registers.value.push({ ...register, id });
};

const getRegisters = () => {
    return registers.value;
};

export default {
    addProfile,
    getProfiles,
    addRegister,
    getRegisters,
};