import styled from "styled-components";

export const StyledClientCard = styled.section`
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
    background:#16192b;
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
    padding: .3em;
    color: white;
}
& .tag:hover {
    cursor: pointer;
    color: #73cba9;
    background: #16192b;
}
`