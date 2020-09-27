import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    margin: 15px;
    justify-content: space-between;

    & div{
        flex:1;
    }
`;

export const StyledButton = styled.div`
    align-items: center;
`;

export default StyledCard;
