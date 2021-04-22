import React from 'react'; 
import styled from "styled-components";
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link} from "react-router-dom"
import {FaTimes} from "react-icons/fa"
const DropdownContainer=styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#cd853f;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-ease-out;
opacity:l;
top:0;
`;

const Icon =styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none;
`;
const CloseIcon =styled(FaTimes)`
color:#000d1a;
`;
const DrowpdownWrapper =styled.div``;

const DropdownMenu =styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4,80px);
text-align:center;
margin-bottom:4rem;
`;

const DropdownLink =styled(Link)`
display:flex;
color:#fff;
align-items:center;
justify-content:center;
`;
const BtnWrap =styled.div``;



const Dropdown = () => {
    return (
        <DropdownContainer>
             <Icon>
                 <CloseIcon/>
             </Icon>
             <DrowpdownWrapper>
                 <DropdownMenu>
                     {menuData.map((item,index)=>{
                         <DropdownLink to={item.link} key={index}>
                               {item.title} 
                         </DropdownLink>
                     })}
                 </DropdownMenu>
                 <BtnWrap>
                     <Button primary="true" round="true" big="true" to="/contact">
                         Contact Us
                     </Button>

                 </BtnWrap>
             </DrowpdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
