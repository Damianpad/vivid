import styled from "styled-components";
import { device } from "../mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledBillingAction = styled.section`
display: flex;
justify-contenr: center;



.actionContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border: 1px solid white;
    padding: 1em;
    border-radius: 5px;
}

.dataContainer {
    display: flex;
    flex-direction: column;
    text-align: left;
}
`;