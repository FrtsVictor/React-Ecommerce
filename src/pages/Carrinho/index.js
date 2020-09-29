import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer'
import './styles'
import semFoto from '../../assets/imgs/pdt-sem-imagem.png';
import { Link } from 'react-router-dom'
import { CartProducts, Container, CartFinalizar, Total } from './styles';
const Carrinho = () => {
const [cart, setCart] = useState([])

const itens = JSON.parse(localStorage.getItem('cartItems'));


const  removeFromCart = (produto) => {
    if(produto.count >=1 ){
        produto.count--;
    }if(produto.count == 0){
        itens.splice(itens.indexOf(produto), 1)
       
    }
    
    localStorage.setItem("cartItems", JSON.stringify( itens));  
    setCart( itens)
  };

 const totalCart = () =>{
    const total = itens.reduce((a, c) => a + c.valor * c.count, 0);    
    return total;
 }

  useEffect(() => {
  }, [cart]);

  const addDefaultImg = (e) => {
    e.target.src = semFoto;
  }

  const finallyCart = () =>{

   if(itens.length === 0){
    window.location.href = "/empty"
   }else{  
    window.location.href = "/success"
   }
  }

  

return(
<>
<Nav/>

<Container>

<div className="container">
    <div >
        <p className="titulo">Minhas compras</p>
        <CartProducts>
        {itens.map((pdt, index) => (
        <div className="box-product" key={index} >
            <div className="img">
                <img src={pdt.fotoLink} onError={addDefaultImg} alt="foto-produto" width="100%"/>
            </div>

            <div className="dadosItem">
                <p className="nome">{pdt.nome}</p>
                <p className="descricao">{pdt.descricao}</p>  
            </div>

            <div className="qtd">
                <p>Qtd:</p>
                <p>{pdt.count}</p>
            </div> 

            <div className="calclItem">
                <p className="calculoBox">{pdt.count} {'x'} {pdt.valor} {'='} </p>   
            </div> 

            <div className="totalItem">
                <p className="price">R${pdt.count * pdt.valor}</p>  
            </div>

            <div className="trash">
                <i class="far fa-trash-alt fa-border fa-md" onClick={() => removeFromCart(pdt)}/>
            </div>

         </div>
))}

        </CartProducts>

</div>
</div>
</Container>
     
        <Total>
            <div id="container-total">
            <div className="total">       
                    <p>Total</p>
                    <p>R$ {totalCart()}</p>  
            </div>   
            </div> 
        </Total>
        
        <CartFinalizar>
            <div id="container-btn">
                <div className="btn-finalizar">         
        <button  onClick={() => finallyCart()}> <i class="fas fa-shopping-cart"></i> Finalizar compra</button>  
                </div>
            </div>
        </CartFinalizar>
      
<Footer/>

</>
);
};

export default Carrinho; 