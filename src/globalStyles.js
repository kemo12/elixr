import {createGlobalStyle} from 'styled-components';
const GlobalStyle=createGlobalStyle`
*{
     margin:0px;
     padding:0px;
     box-sizing:border-box;
     font-family:'Montserrat',sans-serif;
     

};
html,body{
    overflow-x: none;
    background:rgb(185, 190, 199,0.5);
}
`;
export default GlobalStyle;