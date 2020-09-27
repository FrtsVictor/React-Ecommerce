import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer'
import './styles'
import semFoto from '../../assets/imgs/pdt-sem-imagem.png';
import { CartProducts, Container, CartFinalizar, Total } from './styles';
const Carrinho = () => {


const addDefaultImg = (e) => {
        e.target.src = semFoto;
      }

return(
<>
<Nav/>

<Container>
<div id="container">
    <div id="titulo">
        <p >Minhas compras</p>
    </div>
    <CartProducts>
        <div id="box-product">
            <div className="img">
                <img src="" onError={addDefaultImg} alt="foto-produto" width="100%"></img>
            </div>

            <div>
                <p className="nome">Título</p>
                <p className="descricao">Descrição</p>  
            </div>
                
            <div className="qtd">
                <label for="quantidade">Qtd</label>
                <input type="number" name="quantidade" id="quantidade"/>
            </div> 

            <div className="price">
                <p>R$0.00</p>        
            </div> 

            <div className="trash">
                <i class="far fa-trash-alt fa-border fa-md"/>
            </div>

        </div>
    
        </CartProducts>
          
</div>
             
</Container>
        <div>
        <Total>
            <div id="total">       
                    <p>Total</p>
                    <p>R$0.00</p>  
            </div>
        </Total>
        
        <CartFinalizar>
                <div id="btn-finalizar">         
                    <button> <i class="fas fa-shopping-cart"></i> Ir para o carrinho</button>  
                </div>
        </CartFinalizar>
        </div>
<Footer/>
</>
);
}

export default Carrinho;