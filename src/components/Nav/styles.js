import styled from 'styled-components';

export const Navbar = styled.div`

div {
    display: flex;
    height: 150px;
    width: 100%;
    background: #6D3CAB;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    margin-left: 40px;  
    margin-right: 40px;
}

li{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
    font-weight:200;
    font-size: 18px;

    & + li{
        margin-left: 10px;
    }

}

#itens:hover{
    color: #B491E1;
}

ul{
    margin-right:20px;
}
#itens{
    color: #fff;
    text-decoration:none;
}

i{
    margin-right:5px;
}
`;