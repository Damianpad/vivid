import styled from "styled-components";
import { device } from "../../../components/mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledCalendar= styled.section`
margin-top: 50px;

@media ${device.laptop}{
    margin-top: 0px;
    margin-left: 59px;
}
`;