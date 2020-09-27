/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useState, useContext,
} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { ContextLists } from '../../services/ListsContext';

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

// _______________________Create Coluns

const makeColHead = (chavesColuna) => chavesColuna.reduce((column, newCol) => {
  const coll = {
    id: newCol,
    label: newCol,
    minWidth: 170,
    align: 'center',
  };
  return [...column, coll];
}, []);

export default function StickyHeadTable({ selectedColumn }) {
  // TABLE DATA
  const { listaProduto } = useContext(ContextLists);
  const { listaCategoria } = useContext(ContextLists);
  const { listaFunc } = useContext(ContextLists);

  // TABLE STYLES
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // TABLE COLUMNS
  const [rows, setRows] = useState([]);
  const [col, setCol] = useState([]);
  const chavesProduto = ['id', 'nome', 'descricao', 'qtdEstoque', 'valor', 'idCategoria', 'nomeCategoria', 'idFuncionario', 'nomeFuncionario', 'dataFabricacao', 'fotoLink'];
  const chavesCategoria = ['id', 'nome', 'descricao'];
  const chavesFuncionario = ['id', 'nome', 'cpf'];

  // Table Switcher
  const [tableName, seTableName] = useState('');

  useEffect(() => {
    seTableName(selectedColumn);
  }, [selectedColumn]);

  useEffect(() => {
    if (tableName === 'Produto') {
      setCol(makeColHead(chavesProduto));
      setRows([{}]);
      console.log(selectedColumn);
      setRows(listaProduto);
      console.log('prood, rows ', rows);
      console.log('prod listapdo', listaProduto);
    } if (tableName === 'Categoria') {
      setCol(makeColHead(chavesCategoria));
      setRows([{}]);
      console.log(selectedColumn);
      setRows(listaCategoria);
      console.log('cat rows', rows);
      console.log('cat lista', listaCategoria);
    } if (tableName === 'Funcionario') {
      setCol(makeColHead(chavesFuncionario));
      setRows([{}]);
      console.log(selectedColumn);
      setRows(listaFunc);
      console.log('func rows', rows);
      console.log('func lista', listaFunc);
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
    <Paper classnome={classes.root} style={{width: '97.5%', marginLeft: '18px' }}>
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
                      {console.log('tb-vl', value)}
                      { value}
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
