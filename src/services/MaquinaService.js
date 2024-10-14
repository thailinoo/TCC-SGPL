import http from '../common/http-common';
const API_URL = "maquina/";

const getAllMaquina = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const getById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const MaquinaService = {
    getAllMaquina,
    getById,
}

export default MaquinaService;