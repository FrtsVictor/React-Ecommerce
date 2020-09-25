import api from './api';

const apiFuncionario = {

  loadAll: async () => {
    try {
      const response = await api.get('funcionario');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  loadByID: async (id) => {
    try {
      const response = await api.get(`funcionario/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  create: async (nome, cpf) => {
    try {
      const response = await api.post('funcionario', {
        nome,
        cpf,
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  update: async (id, nome, cpf) => {
    try {
      const response = await api.put(`funcionario${id}`, {
        nome,
        cpf,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`funcionario/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

};

export default apiFuncionario;
