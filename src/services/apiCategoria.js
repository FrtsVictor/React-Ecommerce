import api from './api';
import swal from 'sweetalert';

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
      return swal("Ops!", "Categoria não encontrada", "error");
    }
  },

  create: async (nome, descricao) => {
    try {
      const response = await api.post('categoria', {
        nome,
        descricao,
      });
      swal("Sucesso!", "Categoria criada com sucesso!", "success");
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível criar categoria", "error");
    }
  },
  update: async (id, nome, descricao) => {
    try {
      const response = await api.put(`categoria${id}`, {
        nome,
        descricao,
      });
      swal("Sucesso!", "Categoria atualizada com sucesso!", "success");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível atualizar categoria", "error");
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`categoria/${id}`);
      console.log(response.data);
      swal("Sucesso!", "Categoria deletada com sucesso!", "success");
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível deletar categoria", "error");
    }
  },

};

export default apiCategoria;
