import styled from 'styled-components'
import { device } from '../mediaQ/device'

export const StyledAnalyticsChart = styled.section `

    .analyticsContainer { 
        border: 1px solid white;
        background: #212840;
        color: #73cba9;
    }
    .analyticsContainer h2{
        display: flex;
        justify-content: center;
    }
    & .chartContainer {
        
    }
@media ${device.tablet}{

}
`