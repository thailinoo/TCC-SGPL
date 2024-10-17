import http from '../common/http-common';
const API_URL = "maquina/";

const getAllMaquinas = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = (data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('patrimonio', data.patrimonio);
    formData.append('ambiente_id', data.ambiente_id);
    formData.append('statusAmbiente', data.statusAmbiente);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.multipartInstance.put(API_URL + `inativar/${id}`);
};

const reativar = (id) => {
    return http.multipartInstance.put(API_URL + `reativar/${id}`);
};

const alterarDados = (id, data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('patrimonio', data.patrimonio);
    formData.append('ambiente_id', data.ambiente_id);
    formData.append('statusAmbiente', data.statusAmbiente);

    return http.mainInstance.put(API_URL + `alterarDados/${id}`, formData);
};

const MaquinaService = {
    getAllMaquinas,
    findById,
    create,
    inativar,
    reativar,
    alterarDados,
};

export default MaquinaService;
