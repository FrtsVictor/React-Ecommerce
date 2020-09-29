/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useState, useContext, useCallback,
} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Tables
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { ContextLists } from '../../services/ListsContext';
// Buttons
import BtnDeleteCliente from './BtnDelete/BtnDeleteCliente';
import BtnDeleteProduto from './BtnDelete/BtnDeleteProduto';
import BtnDeleteCategoria from './BtnDelete/BtnDeleteCategoria';
import BtnDeleteFuncionario from './BtnDelete/BtnDeleteFuncionario';
// Modals
import ModalCategoria from '../Modal/ModalEditCategoria';
import ModalFuncionario from '../Modal/ModalEditFuncionario';
import ModalProduto from '../Modal/ModalEditProduto';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#333',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  // root: {
  //   width: '80%',
  // },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({ selectedColumn }) {
  // TABLE DATA
  const { listaProduto } = useContext(ContextLists);
  const { listaCategoria } = useContext(ContextLists);
  const { listaFunc } = useContext(ContextLists);
  const { listaCliente } = useContext(ContextLists);
  // TABLE STYLES
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // TABLE COLUMNS
  const [rows, setRows] = useState([]);
  const [col, setCol] = useState([]);
  const chavesProduto = ['excluir', 'id', 'nome', 'descricao', 'qtdEstoque', 'valor', 'idCategoria', 'nomeCategoria', 'idFuncionario', 'nomeFuncionario', 'dataFabricacao', 'fotoLink'];
  const chavesCategoria = ['excluir', 'id', 'nome', 'descricao'];
  const chavesFuncionario = ['excluir', 'id', 'nome', 'cpf'];
  const chavesCliente = ['excluir', 'id', 'nome', 'usuario', 'cpf', 'email', 'dataNascimento', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'cep'];

  // Table Switcher
  const [tableName, seTableName] = useState('');

  // _______________________Create Coluns

  const makeColHead = useCallback((chavesColuna) => chavesColuna.reduce((column, newCol) => {
    const coll = {
      id: newCol,
      label: newCol,
      minWidth: 170,
      align: 'center',
    };
    return [...column, coll];
  }, []), []);

  // Tranfer obj inside obj in only one obj

  const listaObj = listaCliente.reduce((acc, cliente) => {
    const newCliente = {
      id: cliente.id,
      nome: cliente.nome,
      usuario: cliente.usuario,
      cpf: cliente.cpf,
      email: cliente.email,
      dataNascimento: cliente.dataNascimento,
      rua: cliente.endereco.rua,
      numero: cliente.endereco.numero,
      complemento: cliente.endereco.complemento,
      bairro: cliente.endereco.bairro,
      cidade: cliente.endereco.cidade,
      estado: cliente.endereco.estado,
      cep: cliente.endereco.cep,
    };
    return [...acc, newCliente];
  }, []);

  useEffect(() => {
    seTableName(selectedColumn);
  }, [selectedColumn]);

  // select table views

  useEffect(() => {
    if (tableName === 'Produto') {
      setCol(makeColHead(chavesProduto));
      setRows([{}]);
      setRows(listaProduto);
    } if (tableName === 'Categoria') {
      setCol(makeColHead(chavesCategoria));
      setRows([{}]);
      setRows(listaCategoria);
    } if (tableName === 'Funcionario') {
      setCol(makeColHead(chavesFuncionario));
      setRows([{}]);
      setRows(listaFunc);
    } if (tableName === 'Cliente') {
      setCol(makeColHead(chavesCliente));
      setRows([{}]);
      setRows(listaObj);
    }
  }, [tableName]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper classnome={classes.root} style={{ width: '97.5%', marginLeft: '18px' }}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {col.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (

              <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.descricao}>

                {col.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      { column.id === 'excluir' && tableName === 'Categoria'
                        ? (
                          <>
                            <ModalCategoria nome={row.nome} descricao={row.descricao} id={row.id} />
                            <BtnDeleteCategoria id={row.id} />
                          </>
                        ) : column.id === 'excluir' && tableName === 'Funcionario'
                          ? (
                            <>
                              <ModalFuncionario nome={row.nome} cpf={row.cpf} id={row.id} />
                              <BtnDeleteFuncionario id={row.id} />
                            </>
                          ) : column.id === 'excluir' && tableName === 'Cliente'
                            ? (
                              <BtnDeleteCliente id={row.id} />
                            ) : column.id === 'excluir' && tableName === 'Produto'
                              ? (
                                <>
                                  <ModalProduto
                                    nome={row.nome}
                                    descricao={row.descricao}
                                    qtd={row.qtdEstoque}
                                    valor={row.valor}
                                    func={row.idFuncionario}
                                    cat={row.idCategoria}
                                    dataFab={row.dataFabricacao}
                                    id={row.id}
                                  />
                                  <BtnDeleteProduto id={row.id} />
                                </>
                              ) : value}
                    </StyledTableCell>
                  );
                })}

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
