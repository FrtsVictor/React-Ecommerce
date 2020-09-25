import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { apiProduto } from '../../services/ApiProduto';

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

export default function StickyHeadTable() {
  const [listaProduto, setListaProduto] = useState([]);
  const [arrayColumName, setArrayColum] = useState([]);
  const [coluna, setColuna] = useState([]);
  const rows = listaProduto.map((pdt) => (pdt));

  const columns = coluna;

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
        align: 'center',
      };
      return [...objCol, col];
    }, []));
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
            <StyledTableRow>
              {columns.map((column) => (
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
                {columns.map((column) => {
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
