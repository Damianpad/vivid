import styled from 'styled-components'

export const StyledClientList = styled.section`
.clientContainer {
    border: 1px solid white;
    border-radius: 1em;
    background: #212840;
    color: #73cba9;
    padding: 1em;
}
& .clientCardContainer {
    display: flex;
    padding: 0 2em;
    
}
& .clientItem {
    border: 1px solid white;
    border-radius: 2em;
    list-style: none; 
    padding: 2em; 
     
}
& .clientList {
    padding: 0;
    margin: 0;
}
`