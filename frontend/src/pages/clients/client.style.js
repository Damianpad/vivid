import styled from "styled-components";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledClient = styled.section`
    width: 100%;
    background: ${dark};

    .client-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .client-title {
        width: 100%;
        display: flex;
        justify-content: center;

    }
    .new-client-container {
        width: 15%;
        display: flex;
        justify-content: center;
    }
    .action-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .search-container{
        width: 100%;
    }
    h1 {
        color: ${secondary};
    }
`;