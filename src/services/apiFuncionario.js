import api from './api';

const apiCategoria = {

  loadAll: async () => {
    try {
      const response = await api.get('categoria');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  loadByID: async (id) => {
    try {
      const response = await api.get(`categoria/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  create: async (nome, descricao) => {
    try {
      const response = await api.post('categoria', {
        nome,
        descricao,
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  update: async (id, nome, descricao) => {
    try {
      const response = await api.put(`categoria${id}`, {
        nome,
        descricao,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`categoria/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

};

export default apiCategoria;
