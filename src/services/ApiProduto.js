import api from './api';

const apiProduto = {

  loadAll: async () => {
    try {
      const response = await api.get('produto');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  loadByID: async (id) => {
    try {
      const response = await api.get(`produto/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  create: async (pdt) => {
    console.log(pdt);
    try {
      const response = await api.post('produto', {
        nome: pdt.nome,
        descricao: pdt.descricao,
        qtdEstoque: pdt.qtdEstoque,
        valor: pdt.valor,
        idCategoria: pdt.idCategoria,
        idFuncionario: pdt.idFuncionario,
        fotoLink: pdt.fotoLink,
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  update: async (
    id, nome, descricao, qtdEstoque, valor,
    idCategoria, nomeCategoria, idFuncionario,
    nomeFuncionario, dataFabricacao, fotoLink,
  ) => {
    try {
      const response = await api.put(`produto${id}`, {
        nome,
        descricao,
        qtdEstoque,
        valor,
        idCategoria,
        nomeCategoria,
        idFuncionario,
        nomeFuncionario,
        dataFabricacao,
        fotoLink,
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`produto/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

};

export default apiProduto;
