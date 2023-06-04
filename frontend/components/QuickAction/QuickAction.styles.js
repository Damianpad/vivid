import styled from 'styled-components'
import { device } from '../mediaQ/device'

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`
// Dark Shadow
const shadow = '#080D2E'

export const StyledQuickAction = styled.section`
background: ${dark};
.quickActionContainer {
    display: flex;
    flex-direction: column;
    background: ${dark};
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
    border: 1px solid ${secondary};
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 1em;
    margin: .2em;
    background: ${main};
    box-shadow: 3px 5px 5px ${shadow};
}
& .itemContainer:hover {
    cursor: pointer;
    color: ${dark};
    background: ${secondary};
    border: 1px solid ${dark};
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
        width: 90%;
        margin: 0 auto;
    }
    .itemContainer{
        width: 100%;
        margin: 0 1em;
    }
    .actionItems {
       display: flex;
       flex-direction: row;
    }
}

`