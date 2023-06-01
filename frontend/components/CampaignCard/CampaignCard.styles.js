import styled from 'styled-components';

export const StyledCampaignCard = styled.section`
width: 100%;    
border: 1px solid white;
border-radius: 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;

.titleContainer h1{
    font-size: 1em;
}

.dataContainer span{
    padding: 0 .5em;
}
`;