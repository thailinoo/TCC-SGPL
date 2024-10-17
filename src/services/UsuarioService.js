import http from '../common/http-common';
const API_URL = "usuario/";

const getAllUsuarios = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const create = data => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('rm', data.rm);
    formData.append('nivelAcesso', data.nivelAcesso);

    return http.mainInstance.post(API_URL + "create", formData);
};


const inativar = (id) => {
    return http.multipartInstance.put(API_URL + `inativar/${id}`);
};

const reativar = (id) => {
    return http.multipartInstance.put(API_URL + `reativar/${id}`);
};

const alterarSenha = (id, data) => {
    const formData = new FormData();
    formData.append('senha', data.senha);
 
    return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};


const UsuarioService = {
    getAllUsuarios,
    findById,
    signin,
    logout,
    getCurrentUser,
    create,
    inativar,
    reativar,
    alterarSenha
}

export default UsuarioService;