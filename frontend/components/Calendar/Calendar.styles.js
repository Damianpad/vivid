import styled from 'styled-components'

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
    border-radius: 1em;
}
& .calendarTitle {
    color: ${secondary};

}
& .eventCalendar {
    padding: 2em;
}
& .eventInputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}
`