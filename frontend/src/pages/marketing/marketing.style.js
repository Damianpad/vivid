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
    flex-direction: column;
}

.marketingTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${secondary};
    font-size: 2rem;
}

.marketingSubtitle{
    display: none;
}

.customLine {
    display: none;
}
.searchCampaign {
    margin: 1em;
    border-radius: 5px;
    border: 1px solid white;
    padding: .9em;
    background: ${dark};
}

.searchCampaign:focus{
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

    .headerContainer {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .marketingTitle {
        width: 100%;
        margin: 0;
        padding: .5em 0;
        justify-content: flex-start;
    }
    
    .subContainer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }

    .marketingSubtitle{
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