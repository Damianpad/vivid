import styled from "styled-components";
import { device } from "../mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`
// Dark Shadow
const shadow = '#080D2E'

export const StyledSearchBar = styled.section`
.search {
    border-radius: 5px;
    border: 1px solid white;
    padding: .5em;
    background: ${dark};
}

.search:focus{
    background: ${main};
    outline: 1px solid ${secondary};
}
`;