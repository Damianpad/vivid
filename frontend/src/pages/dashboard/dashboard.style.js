import styled from "styled-components";
import { device } from "../../../components/mediaQ/device";
import { da } from "date-fns/locale";



// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledDashboard = styled.section`
margin-top: 50px;
width: 100%;

.dashboardHeader {
    background: ${dark};
}

.dashboardTitle {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    color: #73cba9;
    padding 1em 0;
    font-size: 2rem;
}
.subContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.dashboardSubTitle{
    display: none;
}

.custom-line {
    display: none;
  }
  
.mainContainer {
  width: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.quickViewContainer {


}

@media ${device.laptop}{
    margin-top: 0px;
    margin-left: 59px;
    width: 100vw;
    background: ${dark};
    .dashboardHeader {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .dashboardTitle {
        margin: 0;
        padding: .5em 0;
        justify-content: flex-start;
    }
    .dashboardSubTitle{
        margin: 0;
        justify-content: flex-start;
        display: flex;
        font-size: 1em;
    }
    .custom-line {
        display: flex;
        color: ${main};
        background-color: ${main};
        border: none;
        width: 100%;
        height: 1.5px;
        margin: 1em auto;
      }
    .mainContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

    }

    .quickViewContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: red;
    }

    .bodyContainer{ 
        width: 100%;
        background: ${dark};
        display: grid;
        grid-template-columns: 55% 20%;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }
    .scheduleContainer{
        width: 100%;

    }
}

@media ${device.laptopL}{

}

`;