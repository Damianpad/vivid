import styled from "styled-components";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`
// Dark Shadow
const shadow = '#080D2E'

export const StyledNewClientModal = styled.section`

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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: ${dark};
    padding: 3em;
    border-radius: 5px;
    max-width: 700px;
    min-width: 300px;
}

.modal-content h2 {
    display: flex;
    justify-content: center;
    margin-top: 0;
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

`