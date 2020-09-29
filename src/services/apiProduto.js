import swal from 'sweetalert';
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
      return swal('Ops!', 'Produto não encontrado', 'error');
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
      swal('Sucesso!', 'Produto cadastrado com sucesso!', 'success');
      return response.data;
    } catch (error) {
      return swal('Ops!', 'Não foi possível cadastrar o produto!', 'error');
    }
  },
  update: async (id, pdt) => {
    try {
      console.log(pdt);
      const response = await api.put(`produto/${id}`, {
        nome: pdt.nome,
        descricao: pdt.descricao,
        qtdEstoque: pdt.qtdEstoque,
        valor: pdt.valor,
        idCategoria: pdt.idCategoria,
        idFuncionario: pdt.idFuncionario,
        fotoLink: pdt.fotoLink,
      });
      swal('Sucesso!', 'Produto atualizado com sucesso!', 'success');
      return response.data;
    } catch (error) {
      return swal('Ops!', 'Não foi possível atualizar o produto!', 'error');
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`produto/${id}`);
      swal('Sucesso!', 'Produto deletado com sucesso!', 'success');
      return response.data;
    } catch (error) {
      return swal('Ops!', 'Não foi possível deletar o produto!', 'error');
    }
  },

};

export default apiProduto;
