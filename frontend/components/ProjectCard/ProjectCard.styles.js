import styled from "styled-components";
import { device } from "../mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const ProjectCardStyle = styled.section`


.projectContainer {
    border: 1px solid white;
    border-radius: 5px;
    margin: .4em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    background: ${main};
}

.userContainer {
    font-size: 2em;
}

.infoContainer h1{
    margin: .4em;
    font-size: 1.5em;
}

.tag {
    border: 1px solid white;
    margin: .5em;
    border-radius: .5em;
    padding: .6em;
    color: white;
    background: ${main};
}

.tag:hover {
    cursor: pointer;
    color: ${dark};
    background: ${secondary};
    border: 1px solid ${dark};
}

@media ${device.laptop} {
    width: 100%;
    .projectContainer {
        margin: .5em auto;
        max-width: 60%;
        flex-direction: row;
    }
}
`;