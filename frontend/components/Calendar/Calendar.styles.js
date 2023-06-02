import styled from 'styled-components'
import { device } from '../mediaQ/device'

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#116192b`
const shadow = '#080D2E'

export const StyledEventCalendar = styled.section `

.calendarContainer {
    border: 1px solid ${secondary};
    border-radius: 5px;
    background: ${main};
    position: relative;
    box-shadow: 3px 5px 5px ${shadow};
}
& .calendarTitle {
    color: ${secondary};
    display: flex;
    justify-content: center;
}
& .addEventContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
& .eventCalendar {
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    padding: 2em;
}
& .eventInputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .6em;
}
@media ${device.laptop}{
    padding: 2em 0;
    z-index: 4;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    .eventInputContainer {
        flex-direction: row;
    }
}
@media ${device.laptopL}{
    
    .calendarContainer{
        
    }

    .eventCalendar{

     
    }
}

`