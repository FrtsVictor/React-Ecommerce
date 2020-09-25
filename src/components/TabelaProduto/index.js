import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { apiProduto } from '../../services/ApiProduto';

const columns = [
  { id: 'nome', label: 'Nome', minWidth: 170 },
  { id: 'descricao', label: 'Descricao', minWidth: 100 },
  {
    id: 'qtdEstoque',
    label: 'Estoque',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'valor',
    label: 'Valor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'nomeCategoria',
    label: 'nomeCategoria',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'dataFabricacao',
    label: 'Data Fabricacao',
    minWidth: 170,
    align: 'right',

  },
];

function createData(nome, descricao, qtdEstoque, valor, nomeCategoria, dataFabricacao) {
  return {
    nome, descricao, qtdEstoque, valor, nomeCategoria, dataFabricacao,
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const [listaProduto, setListaProduto] = useState([]);
  const [arrayColumName, setArrayColum] = useState([]);
  const [coluna, setColuna] = useState([]);
  const rows = listaProduto.map((pdt) => (createData(pdt.nome, pdt.descricao, pdt.qtdEstoque, pdt.valor, pdt.nomeCategoria, pdt.dataFabricacao)));

  useEffect(() => {
    apiProduto.loadAll()
      .then((response) => {
        // eslint-disable-next-line no-nested-ternary
        const sortedList = response.sort((a, b) => (a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0));
        setArrayColum(Object.getOwnPropertyNames(sortedList[0]));
        setListaProduto(sortedList);
      });
  }, []);

  useEffect(() => {
    setColuna(arrayColumName.reduce((objCol, colName) => {
      const col = {
        id: colName,
        label: colName,
        minWidth: 170,
        align: 'right',
      };
      return [...objCol, col];
    }), []);
    console.log('arrau', arrayColumName);
  }, [arrayColumName]);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper classnome={classes.root}>
      <TableContainer classnome={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.descricao}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
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
