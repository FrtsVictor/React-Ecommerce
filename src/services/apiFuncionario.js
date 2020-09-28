import api from './api';
import swal from 'sweetalert';

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
      return swal("Ops!", "Funcionário não encontrado", "error");
    }
  },

  create: async (nome, cpf) => {
    try {
      const response = await api.post('funcionario', {
        nome,
        cpf,
      });
      swal("Sucesso!", "Funcionário cadastrado com sucesso!", "success");
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível cadastrar o funcionário", "error");
    }
  },
  update: async (id, nome, cpf) => {
    try {
      const response = await api.put(`funcionario${id}`, {
        nome,
        cpf,
      });
      swal("Sucesso!", "Funcionário cadastrado com sucesso!", "success")
      console.log(response.data);
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível cadastrar o funcionário", "error");
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`funcionario/${id}`);
      swal("Sucesso!", "Funcionário deletado com sucesso!", "success")
      console.log(response.data);
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível deletar o funcionário", "error");
    }
  },

};

export default apiFuncionario;
