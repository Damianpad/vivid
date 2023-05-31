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
    flex-direction: column;
    align-items: center;
}

.headerContainer h1 {
    color: ${secondary};
}

@media ${device.laptop}{
    width: 100%;
    margin-top: 0px;
    margin-left: 59px;

    .projectComponentContainer{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
`;