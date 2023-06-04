import styled from "styled-components";
import { device } from "../../../components/mediaQ/device";

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledClient = styled.section`
    margin-top: 50px;
    width: 100%;
    background: ${dark};

    .clientHeader {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .clientTitle {
        font-size: 2rem;
    }
    .new-client-container {
        display: flex;
        justify-content: center;
        padding: 1em;
  
    }
    button {
        background: ${main};
        border: 1px solid white;
    }
    button:hover {
        background: ${secondary};
        color: ${dark};
        border: 1px solid ${dark};
    }
    .action-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .search-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        color: ${secondary};
        margin: 0;
        padding: 1em 0;
    }
    .clientSubtitle{
        display: none;
    }

    .customLine {
        display: none;
      }

    @media ${device.laptop}{
        margin-top: 0px;
        margin-left: 59px;

        .clientHeader {
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .clientTitle{
            width: 100%;
            margin: 0;
            padding: .5em 0;
            justify-content: flex-start;
        }

        .clientSubtitle {
            width: 100%;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            font-size: 1em;
        }

        .customLine {
            display: flex;
            color: ${main};
            background-color: ${main};
            border: none;
            width: 100%;
            height: 1.5px;
            margin: 1em auto;
          }

        .client-card-container{
            width: 70%;
            display: flex;
            margin: 0 auto;
            justify-content: center;
            flex-direction: column;
        }
    }
`;