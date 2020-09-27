import styled from 'styled-components';

export const Container = styled.div`

    #container{
        width: 100vh;
        height:100vh;
    }
    
    #titulo{
        display: flex;
        margin-left: 40px;
        margin-top: 40px;
        color: #5a575d;
        font-family: 'Roboto';
        font-size:28px;
        font-weight:600;
        
    }

    
}


`;

export const CartProducts = styled.div`

    #box-product{
        display: flex;
        justify-content:space-between;
        width:1200px;
        height: 100px;
        background-color: #bdbdbe;
        margin-left: 40px;
        margin-top: 60px;
    }

    img{
        width: 90px;
        height: 90px;
        justify-content: flex-start;
        margin: 5px 0 5px 10px;
    }

    .trash{
        justify-content:flex-end;
        color:#3b393d; 
        margin-right: 10px;
        margin-top: 5px;
        cursor: pointer;
    }

    .nome{
        color:#3b393d;
        font-size: 18px;
        font-weight: 600;
        margin-left: -180px;
        margin-top: 10px;
    }

    .descricao{
        color:#3b393d;
        font-size: 14px;
        font-weight: 400;
        margin-left: -180px;
        margin-top: 10px;
        max-width: 50ch;
    }

    .qtd{
        display: flex;
        color:#3b393d; 
        margin-left: 100px;
        margin-top: 30px;
    }
    .qtd input{
        width: 50px;
        height: 30px;
        padding-left: 10px;
        border: none;
        border-bottom: 1px solid #333;
    }

    .qtd label{
        color:#3b393d;
        margin-right: 10px;
        margin-top: 5px;
        font-weight: 600;
    }

    .price{
        color:#3b393d; 
        margin-top: 35px;
        font-weight: 600;
        
    }

`;

export const CartFinalizar = styled.div`

 #btn-finalizar {
     display: flex;
     justify-content: flex-end;
     margin-bottom:80px;
     margin-right: 100px;
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
        margin-top: 20px;
    }

    button:hover{
        background-color: #502784;
    }

    i{
      margin-right:10px;
      
    } 

`;

export const Total = styled.div`
    
    #total{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    margin-top: 20px;
    width:200px;
    height: 100px;
    background-color: #bdbdbe;
    }
`;