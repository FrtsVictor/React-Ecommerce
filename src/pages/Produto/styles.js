import styled from 'styled-components';


export const CardProdutoStyle = styled.div`

.container{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 40px;
    text-align: center;
    border-radius: 5px;
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
  }

  
  .card button:hover {
      background-color: #69286b;
}

.descricao{
    font-size: 14px;
    margin: 15px;
    color: #656464;
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
    font-size: 30px;
    margin: 5px 15px 5px 15px;
    color: #535252;
}

.price{
    font-size: 20px;
    color: #535252;
}



  `;