import api from './api';

const apiCliente = {

  loadAll: async () => {
    try {
      const response = await api.get('cliente');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  loadByID: async (id) => {
    try {
      const response = await api.get(`cliente/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  create: async (cliente) => {
    try {
      const response = await api.post('cliente', {
        nome: cliente.nome,
        usuario: cliente.usuario,
        cpf: cliente.cpf,
        email: cliente.email,
        dataNascimento: cliente.dataNascimento,
        endereco: {
          rua: cliente.endereco.rua,
          numero: cliente.endereco.numero,
          complemento: cliente.endereco.complemento,
          bairro: cliente.endereco.bairro,
          cidade: cliente.endereco.cidade,
          estado: cliente.endereco.estado,
          cep: cliente.endereco.cep,
        },
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  update: async (id, cliente) => {
    try {
      const response = await api.put(`cliente${id}`, {
        nome: cliente.nome,
        usuario: cliente.usuario,
        cpf: cliente.cpf,
        email: cliente.email,
        dataNascimento: cliente.dataNascimento,
        endereco: {
          rua: cliente.endereco.rua,
          numero: cliente.endereco.numero,
          complemento: cliente.endereco.complemento,
          bairro: cliente.endereco.bairro,
          cidade: cliente.endereco.cidade,
          estado: cliente.endereco.estado,
          cep: cliente.endereco.cep,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`cliente/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

};

export default apiCliente;
