import styled from "styled-components";
import { device } from "../../../components/mediaQ/device";


// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledDashboard = styled.section`
background: ${main};
width: 100%;


.dashboardBody {
    background: ${main};
}

.dashboardTitle {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    color: #73cba9;
    padding 1em 0;
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
    .mainContainer {
        width: 100%;

    }
    .quickViewContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: red;
    }
}

`;