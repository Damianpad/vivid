import styled from 'styled-components'

export const StyledQuickAction = styled.section`
.quickActionContainer {
    background: #212840;
    border: 1px solid white;
    border-radius: 2em;
    margin: 0 2em;
    width: 50%;
    
}
& .quickActionContainer h2 {
    color: #73cba9;
}
& .actionItems {
    display: flex;
    justify-content: center;

}
& .itemContainer {
    border: 1px solid white;
    border-radius: 2em;
    display: inline;
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
`