import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {menuData} from "../data/MenuData";
const Nav=styled.nav`
height:60px;
background:red;
`;
const Logo=styled(Link)`
color:#fff;

`;
const MenuBar=styled.i``;
const NavMenu=styled.div``;
const NavMenuLinks=styled(Link)``;
const Navbar = () => {
    return (
        <Nav>
            <Logo>ELIXR</Logo>
            <MenuBar/>
            <NavMenu>
            {menuData.map((item,index)=>{
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            })}
            </NavMenu>
           <h1>Navbar</h1> 
        </Nav>
    )
}

export default Navbar
