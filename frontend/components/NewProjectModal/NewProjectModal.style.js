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

export const StyledProjectModal = styled.section`
body.active-modal {
    overflow-y: hidden;
}

.btn-modal {
    padding: 10px 20px;
    display: block;
    font-size: 18px;
}


.modal, .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
}

.overlay {
    background: rgba(49,49,49,0.8);
}
.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: ${dark};
    padding: 2em;
    border-radius: 10px;
    max-width: 700px;
    min-width: 500px;
}

.projectInfoContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.clientInfoContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.modal-content h2 {
    display: flex;
    justify-content: center;
    margin-top: 0;
}

.modal-content h3 {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    
}

.modal-content button {
    margin: .4em;
    display: flex;
    justify-content: center;
}

.infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input {
    background: ${main};
    border: 1px solid ${secondary};
    padding: 1em;
    margin: .5em;
    border-radius: 5px;
}

.close-modal {
    width: 50%;
}

.btnContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.containerLine{
    display: flex;
    color: ${main};
    background-color: ${main};
    border: none;
    width: 100%;
    height: 1.5px;
    margin: 1em auto;
}

@media ${device.laptop} {
    
    .modal-content {
        margin-top: 0px;
        margin-left: 25px;
        min-width: 850px;
    }

    .modal-content h3 {
        width: 92%;
        
    }

}
`