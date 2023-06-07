import styled from "styled-components";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`
// Dark Shadow
const shadow = '#080D2E'

export const StyledClientInfo = styled.section`
background: ${main};
width: 90%;
border: 1px solid ${secondary};
box-shadow: 2px 4px 4px ${shadow};
border-radius: 5px;

.tagContainer {
    padding: 1em;
    display: flex;
    justify-content: space-around;
}

.infoContainer{
    padding: 1em;
    margin: .4em;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.clientPhoto {
    border: 1px solid ${secondary};
    border-radius: 50%;
    padding: 1em;
    margin: 1em;
    font-size: 2em;
}

.activityContainer{
    padding: 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 5px;
    margin: .4em;

}
`