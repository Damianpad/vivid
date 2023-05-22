import styled from 'styled-components'
import { device } from '../mediaQ/device'

export const StyledQuickAction = styled.section`


.quickActionContainer {
    display: flex;
    flex-direction: column;
    background: #212840;
    border: 1px solid white;
    padding: .4em;
}
& .quickActionContainer h2 {
    margin: 0;
    color: #73cba9;
    display: flex;
    justify-content: center;
}
& .actionItems {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    flex-direction: column;
    padding: 0;
}
& .itemContainer {
    border: 1px solid white;
    border-radius: 10px; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 1em;
    margin: .5em;
  
}
& .itemContainer:hover {
    cursor: pointer;
    color: #73cba9;
    background: #16192b;
}
& .actionItems li {
    list-style-type: none;
    font-size: 1em;
}
& .actionIcon {
    font-size: 1.5em;
    padding: .3em;
}

@media ${device.laptop}{
    width: 100%;
    .quickActionContainer{
       
    }
    .actionItems {
       display: flex;
       flex-direction: row;
    }
}

`