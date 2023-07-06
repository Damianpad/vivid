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

export const StyledClientList = styled.section`
width: 100%;

.clientContainer {
    width: 100%;
    border: 1px solid ${secondary};
    border-radius: 5px;
    color: #73cba9;
    padding: 1em;
    box-shadow: 3px 5px 5px ${shadow};
}
.clientContainer h2 {
    display: flex;
    justify-content: center;
}
.clientCardContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    
}


& .clientList {
    width: 100%;
    background: ${dark};
    padding: 0;
    margin: 0;
}

@media ${device.laptop}{
    width: 100%;
    .clientContainer {
        width: 100%;
        padding: 0;

    }

}
`