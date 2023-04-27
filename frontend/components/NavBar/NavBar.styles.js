import styled from 'styled-components'

export const StyledNav = styled.section`
background: #212840;
height: 100vh;
margin: 0;
position: sticky;
top: 0;


.NavContainer {
    display: flex;
    flex-direction: column;
    padding: 1em 0;

}

& .title {
    display: flex;
    padding: 1.6em;
    align-items: center;
    justify-content: space-between;
}

& .title h1{
    margin: 0;
    padding: .6em;
}
& .title .bars {
    font-size: 3em;
}
& .bars: hover {
    cursor: pointer;
    color: #73cba9;
}
& .searchContainer input{
    border-radius: 25px;
    border: 1px solid white;
    padding: .6em;
    width: 15em;
    background: #16192b;
    height: 3em;
}
& .itemContainer ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
}
& .itemContainer .navItem {
    list-style: none;

    font-family: helvetica;
    font-size: 1.6rem;
    color: white;
    width: 100%;
    padding: .6em 0;
}
& .itemContainer .navItem:hover{
    cursor: pointer;
    background: #16192b;
    color: #73cba9;
}

& .itemContainer .navIcon{
    font-size: 2.8em;
    padding: .3em;
    
}
& .navIcon {
    color: white;
}
& .navIcon: hover{
    cursor: pointer;
    color: #73cba9;
}
& .iconContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
& .profileContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-top: 1px solid white;
    padding 1.6em 0;
}
& .profileContainer img{
    width: 4em;
    border-radius: 4em;
    
}
& .infoContainer {
    display: flex;
    flex-direction: column;
}
& .logoutIcon {
    font-size: 2em;
}
& .logoutIcon: hover {
    cursor: pointer;
    color: #73cba9;
}
`;

