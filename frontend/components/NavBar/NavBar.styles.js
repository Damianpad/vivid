import styled from 'styled-components'
import { device } from '../mediaQ/device';

// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

export const StyledNav = styled.section`
background: ${main};
border-bottom: 1px solid white;
width: 100%;
position: fixed;
z-index: 999;

.NavContainer{
    display: none;
   
}

.mobile-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
    z-index: 999;
    overflow: hidden;
}

.logo {
    width: 30%;
}

.hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 35px;
    height: 25px;
    cursor: pointer;
    user-select: none;
    z-index: 999;

    .meat {
        border-radius: 2px;
        width: 100%;
        position: absolute;
        height: 3px;
        background: #fff;
        display: block;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:first-child {
            top: 0;
        }

        &:nth-child(2),
        &:nth-child(3) {
            top: 50%;
            transform: translateY(-50%);
        }

        &:last-child {
            bottom: 0;
        }
    }
}
.close {
    .meat:first-child,
    .meat:last-child {
        opacity: 0;
    }

    .meat:first-child {
        transform: translateY(20px) scale(0);
    }

    .meat:last-child {
        transform: translateY(-20px) scale(0);
    }

    .meat:nth-child(2) {
        transform: rotate(45deg);
    }

    .meat:nth-child(3) {
        transform: rotate(-45deg);
    }
}

.mobile-nav-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${main};
    position: fixed;
    right: 0;
    top: 0;
    z-index: 998;
    &.active {
        max-height: 500px;
       
    }
}

.mobile-nav-item {
    color: ${secondary};
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
}

.mobile-nav-item:hover {
    background: ${secondary};
    color: ${main};
}

.mobile-height {
    height: 100%;
}

.nav-width {
    width: 100%;
}

.navContainer {
   
}

.navIcon{
  
}

.profileContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-top: 1px solid white;
    padding 1.6em 0;
}

.profileContainer img{
    width: 4em;
    border-radius: 4em;
    
}

.infoContainer {
    display: flex;
    flex-direction: column;
}

.logoutIcon {
    font-size: 2em;
}

.logoutIcon: hover {
    cursor: pointer;
    color: #73cba9;
}

@media ${device.laptop}{
    position: fixed;
    width: auto;
    left: 0;
    height: 100%;
    border-right: 1px solid white;
    z-index: 5;
    display: flex;
    justify-content: center;
    line-height: 3em;

    .mobile-nav{
        display: none;
        background: red;
    }

    .NavContainer {
        display: flex;
        flex-direction: column;
        padding: 2em 0;
        width: 15%:
    }
    
    .title {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .logo {
        width: 7em;
    }

    .logoContainer{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .searchContainer{
        display: flex;
        justify-content: center;
        padding: .5em;
    }

    .searchContainer input{
        border-radius: 5px;
        border: 1px solid white;
        padding: .6em;
        width: 15em;
        background: #16192b;
        height: 3em;
    }

    .itemContainer ul {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .itemContainer .navItem {
        display: grid;
        grid-template-columns: 40% 60%;
        align-items: center;
        list-style: none;
        font-family: helvetica;
        font-size: 1.3rem;
        color: white;
        padding: .6em 0;
        width: 100%;
    }

    .pairIcon{
        margin: 0 auto;
        
    }

    .itemContainer .navItem:hover{
        cursor: pointer;
        background: ${dark};
        color: ${secondary};
        width: 100%:
    }

    .itemContainer .navIcon{
        font-size: 1.5em;
        padding: .3em;
        padding: .6em .5em;
    }

    .navIcon {
        color: white;   
    }

    .navIcon: hover{
        cursor: pointer;
        color: #73cba9;
    }
}


`;

