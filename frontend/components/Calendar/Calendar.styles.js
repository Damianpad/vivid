import styled from 'styled-components'
import { device } from '../mediaQ/device'

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#116192b`

export const StyledEventCalendar = styled.section `

.calendarContainer {
    border: 1px solid white;
    background: ${main};
    position: relative;
    z-index: -1;
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
@media ${device.laptopL}{
    .eventInputContainer {
        flex-direction: row;
    }
    .eventCalendar{
        margin: 0 auto;
        width: 80%;
        padding: 4em;
    }
}

`