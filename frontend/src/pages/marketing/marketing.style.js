import styled from "styled-components";
import { device } from "../../../components/mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledMarketing = styled.section`
margin-top: 50px;
background: ${dark};

.headerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${secondary};
}
.search {
    margin: 1em;
    border-radius: 5px;
    border: 1px solid white;
    padding: .9em;
    background: ${dark};
}

.search:focus{
    background: ${main};
    outline: 1px solid ${secondary};
}

button {
    background: ${main};
    border: 1px solid white;
}

button: hover{
    background: ${secondary};
    color: ${dark};
    border: 1px solid ${dark};
}

.campaignDataContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.campaignContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}



@media ${device.laptop}{
    margin-top: 0px;
    margin-left: 59px;
    width: 100%;

    .campaignDataContainer {
        width: 100%;
        display: grid;
        grid-template-columns: 50% 0%;
    }

    .campaignDataContainer button {
        width: 150px;
    }

    .campaignBody{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
`;