import api from './api';
import swal from 'sweetalert';

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
      swal("Sucesso!", "Produto cadastrado com sucesso!", "success");
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível cadastrar o produto!", "error");
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
      swal("Sucesso!", "Produto atualizado com sucesso!", "success");
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível atualizar o produto!", "error");
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`produto/${id}`);
      swal("Sucesso!", "Produto deletado com sucesso!", "success")
      return response.data;
    } catch (error) {
      return swal("Ops!", "Não foi possível deletar o produto!", "error");
    }
  },

};

export default apiProduto;
