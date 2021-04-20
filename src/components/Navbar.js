import React from 'react';
import styled,{css}from "styled-components/macro";
import {Link} from "react-router-dom";
import {menuData} from "../data/MenuData";
import { Button } from './Button';
const Nav=styled.nav`
height:60px;
background:red;
display: flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
`;
const NavLink=css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`;
const Logo=styled(Link)`
${NavLink}
font-style:italic;
`;
const MenuBar=styled.i``;
const NavMenu=styled.div`
display:flex;
algin-items:center;
margin-right:48px;
`;
const NavMenuLinks=styled(Link)`
${NavLink}
`;
const NavBtn=styled.div`
display:felx;
align-items:center;
margin-right:24px; 
`;
const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBar/>
            <NavMenu>
            {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>                        
           ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true" >
                    Contact us
                </Button>
            </NavBtn>
         </Nav>
    )
}

export default Navbar
