import http from '../common/http-common';
const API_URL = "ambiente/"; 

const getAllAmbiente = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();
    Object.entries(data).forEach(([chave, valor]) => {
        formData.append(chave, valor)
       })

    return http.mainInstance.post(API_URL + "create", formData);
};

const alterarDados = (id, data) => {
    const formData = new FormData();
   Object.entries(data).forEach(([chave, valor]) => {
    formData.append(chave, valor)
   })

    return http.mainInstance.put(API_URL + `alterar/${id}`, formData);
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const inativar = (id) => {
    return http.multipartInstance.put(API_URL + `inativar/${id}`);
};

const reativar = (id) => {
    return http.multipartInstance.put(API_URL + `reativar/${id}`);
};


const AmbienteService = {
    getAllAmbiente,
    findById,
    create,
    getCurrentUser,
    inativar,
    reativar,
    alterarDados
}



export default AmbienteService;
