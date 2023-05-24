import styled from "styled-components";
import { device } from "../mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledClientCard = styled.section`
margin: 1em;

& .clientContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    border-radius: .5em;
    list-style: none; 
    padding: 1em; 
    margin-bottom: 1em;
    background: ${dark};
}  

& .clientContainer ul {
    padding: 0;
}
& .clientInfo {
    padding: .6em 2em;
}
& .clientContainer span {
    padding: .6em .5em;
    display: flex;
    color: white;
}
& .clientTag {
    display: flex;
    align-items: center;
}
& .tag {
    border: 1px solid white;
    margin: .5em;
    border-radius: .5em;
    padding: .6em;
    color: white;
    background: ${main};
}
& .tag:hover {
    cursor: pointer;
    color: ${dark};
    background: ${secondary};
    border: 1px solid ${dark};
}

@media ${device.laptop}{

    
    .clientContainer{
        
    }
}
`