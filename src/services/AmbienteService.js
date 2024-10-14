import http from '../common/http-common';
const API_URL = "ambiente/"; 

const getAllAmbiente = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const getById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const AmbienteService = {
    getAllAmbiente,
    getById,
}

export default AmbienteService;
