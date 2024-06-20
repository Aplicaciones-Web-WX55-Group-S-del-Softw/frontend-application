import { reactive, toRefs } from 'vue';

const state = reactive({
    employees: [],
});

export default {
    addEmployee(employee) {
        const id = `${state.employees.length + 9}`;
        state.employees.push({ ...employee, id });
    },
    getEmployees() {
        return state.employees;
    },
    ...toRefs(state),
};