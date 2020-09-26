import styled from 'styled-components';


export const CardProdutoStyle = styled.div`

.container{
    display: inline-flex;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 40px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 300px;
    height: 400px;
    text-align: center;
    border-radius: 5px;
    background-color: #fff;
    margin: 20px;
  }
  
  .price {
    color: grey;
    font-size: 22px;
  }
  
  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #843B86;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    border-radius: 2px;
    transition: background-color 0.5s;
    margin-top: -12px;
  }

  
  .card button:hover {
      background-color: #69286b;
}

.descricao{
    font-size: 14px;
    margin: 21px;
    color: #656464;
    max-width: 30ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.categoria{
    font-size: 10px;
    color: #656464;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-items:initial 
}

h1{
    font-size: 20px;
    margin: 5px 15px 5px 15px;
    color: #535252;
}

.price{
    font-size: 20px;
    color: #535252;
}

img {
  width: 250px;
  height: 250px;
}



`;

export const Filtros = styled.div`

.filtros{
  display: flex;
  padding-top: 20px;
  padding-bottom: 10px;
  justify-content: center;
  font-family: 'Roboto';
  font-weight: 600;
  color: #535252;
  font-size: 16px;
}

select{
  border: none;
  border-bottom: 1px solid #333;
  font-size: 14px;
  color: #333;
  width: 200px;
  height: 40px;
}

.filtro-preco{
  margin-left: 80px;

& label{
  margin-right: 10px;
}

}

.filtro-categoria label{
  margin-right: 10px;

}
`;

export const CartBtn = styled.div`

#btn-carrinho{
      display:flex;
      justify-content:flex-end;
      margin-right: 80px;
      margin-bottom: 40px;
}


button{
        width: 200px;
        height: 50px;
        font-size: 16px;
        font-weight:600;
        font-family: 'Roboto';
        background-color: #6d3cab;
        color: #fff;
        border-radius: 5px;
        border: none;
        transition: background 0.5s;
    }

    button:hover{
        background-color: #502784;
    }

    i{
      margin-right:10px;
      
    }

  

`;