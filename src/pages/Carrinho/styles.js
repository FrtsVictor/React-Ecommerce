import styled from 'styled-components';


export const Container = styled.div`
.container{
    display:flex;
    justify-content: center;
}

.titulo{
    margin-left: 40px;
    margin-top: 40px;
    color: #5a575d;
    font-family: 'Roboto';
    font-size:28px;
    font-weight:600;  
}

`;

export const CartProducts = styled.div`

.box-product{
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

.dadosItem{
    color:#3b393d;
    font-size: 18px;
    font-weight: 600;
    margin-left: -100px;
    margin-top: 10px;
}
    .nome {
        font-size: 18px;
        font-weight: 600;

    }

    .descricao{
        font-size: 14px;
        font-weight: 400;
        max-width: 20ch;
        margin-top: 5px;
    }

    .qtd{
        display: flex;
        color:#3b393d; 
        margin-top: 30px;
    }
    
    .qtd p{
        color:#3b393d;
        margin-top: 5px;
        font-weight: 600;
        font-size: 16px;
        padding: 5px;
    }

    .totalItem {
        display: flex;
        margin-top: 40px;
    }
    
    .calclItem{
        display: flex;
        margin-top: 40px;
    }

    .price{
        color:#3b393d; 
        font-weight: 600;
        font-size: 18px;
    }

    .calculoBox{
        font-size: 14px;
    }
`;

export const CartFinalizar = styled.div`


#container-btn{
    display: flex;
    justify-content: flex-end;
    margin-right: 60px;
    
}

 .btn-finalizar {
    margin-bottom: 20px;
    margin-top: 20px;    
}

button{
        width:200px;  
        height:50px;	
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

export const Total = styled.div`
    
    #container-total{
        display: flex;
        justify-content: flex-end;
        margin-right: 60px;
    }

    .total{
    margin-bottom: 20px;
    margin-top: 20px;
    width:200px;
    height: 100px;
    background-color: #bdbdbe;  
    
}

    .total p{
        color:#3b393d; 
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
    }
`; 