import styled from "styled-components";
import { device } from "../../../components/mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledTeam = styled.section`
margin-top: 50px;
background: ${dark};

.headerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.teamTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${secondary};
    font-size: 2rem;
}

.subContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.teamSubtitle{
    display: none;
}

.customLine {
    display: none;
}

.headerContainer h1 {
    color: ${secondary};
}

@media ${device.laptop}{
    width: 100%;
    margin-top: 0px;
    margin-left: 59px;

    .headerContainer {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .teamTitle {
        width: 100%;
        margin: 0;
        padding: .5em 0;
        justify-content: flex-start;
    }
    
    .teamSubtitle{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: flex-start;
        font-size: 1em;
    }

    .customLine{
        display: flex;
        color: ${main};
        background-color: ${main};
        border: none;
        width: 100%;
        height: 1.5px;
        margin: 1em auto;
    }

    .projectComponentContainer{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
`;