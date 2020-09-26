import styled from 'styled-components';
import bg from '../../assets/imgs/bg.jpg'

export const Container = styled.div`
    .background{
        background-image: url(${bg});
        height: 100vh;
        width: 100vw;
    }

    .descricao{
        text-align: center;
        color: #d6d4d7;
        font-size: 28px;
        margin-top: 40px;
        font-family: 'Roboto';
        font-weight: 600;
    }

    .btn {
        display:flex;
        justify-content: center;
        margin-top: 80px;
    }

    button{
        width: 200px;
        height: 50px;
        font-size: 24px;
        font-weight:400;
        font-family: 'Roboto';
        background-color: #6d3cab;
        color: #d6d4d7;
        border-radius: 5px;
        transition: background 0.5s;
    }

    button:hover{
        background-color: #502784;
    }

`;

    export const Logo = styled.div`
    .logo{
        display: flex;
        justify-content: center;
        padding-top: 80px;
        
    }

`;


