/* eslint-disable no-nested-ternary */
import React, {
  useCallback, useEffect, useState, useMemo,
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
import { SettingsBackupRestoreOutlined, Title } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
  root: {
    width: '80%',
  },
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

export default function StickyHeadTable({ selectedColumn, listaProduto }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [obj, setObj] = useState([]);
  const [col, setCol] = useState([]);
  const chavesProduto = ['id', 'nome', 'descricao', 'qtdEstoque', 'valor', 'idCategoria', 'nomeCategoria', 'idFuncionario', 'nomeFuncionario', 'dataFabricacao', 'fotoLink'];
  const chavesCategoria = ['id', 'nome', 'categoria'];
  const chavesFuncionario = ['id', 'nome', 'cpf'];
  const [tablee, setTablee] = useState('Iniciado');

  //   const memorizedTitle = useMemo(() => setTablee(selectedColumn), [tablee]);

  const loadProduto = useCallback(
    () => {
      setTablee(selectedColumn);
      console.log('loadPo');
    },
    [],
  );

  useEffect(() => {
    loadProduto();
    console.log('carregandoProduto');
  }, [selectedColumn]);

  console.log('Titleeee no componente', selectedColumn, 'asdasd', tablee);

  useCallback(() => {
    console.log('aaa', selectedColumn);
    if (selectedColumn === 'Produto') {
      setCol(makeColHead(chavesCategoria));
      return;
    } if (selectedColumn === 'Categoria') {
      setCol(makeColHead(chavesProduto));
      console.log(col);
    } if (selectedColumn === 'Funcionario') {
      setCol(makeColHead(chavesFuncionario));
    }
  }, []);

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
            {obj.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.descricao}>
                {col.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={obj.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
