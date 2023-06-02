import styled from 'styled-components'
import { device } from '../mediaQ/device'

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`
const shadow = '#080D2E'

export const StyledAnalyticsChart = styled.section `

background: ${dark};

    .analyticsContainer { 
        border: 1px solid ${secondary};
        border-radius: 5px;
        background: #212840;
        color: #73cba9;
        box-shadow: 3px 5px 5px ${shadow};
    }
    .analyticsContainer h2{
        display: flex;
        justify-content: center;
    }
    & .chartContainer {
        
    }
@media ${device.laptop}{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    .analyticsContainer {
        width: 100%;
    }
}

@media ${device.laptopL}{
    .analyticsContainer {
        
    }
}

@media ${device.desktop}{
    .analyticsContainer {
        
    }
}
`