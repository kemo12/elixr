import React from 'react'
import styled from "styled-components";
import { FaFacebookSquare,FaTwitter,FaInstagram,FaYoutube } from 'react-icons/fa';
const FooterA=styled.div`
position:relative;
width:100%;
height:auto;
padding:50px 100px;
background:#000;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;
const Container=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
margin-right:30px;

ul{
    list-style-type: none;

}
h2{
    position:relative;
    color:#fff;
    font-weight:500;
    margin-bottom:15px;
}
h2:befor{
    content:'';
    position:relative;
    bottom:-5;
    width:50px;
    height:2px;
    background:#f00;
}
p{
    color:#999;
}


`;

const AboutUs=styled.div`
width:40%;

`;
const Sci=styled.ul`
margin-top:20px;
display:flex;

a{
    display:inline-block;
    width:40px;
    height:40px;
    background:#222;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:10px;
    text-decoration:none;
    border-radius:4px;

}
a:hover{
    background:#8ba9ed;
}
`;


const QuickLink=styled.div`
width:25%;
justify-content:right;
position: relative;

a{
    color:#999;
}
a:hover{
    color:#fff;
}

li{
    color:#999;
    text-decoration:none;
    margin-bottom:10px;

}
`;
const CopyRight=styled.div`
width:100%;
background:#181818;
padding:8px  100px;
text-align:center;
color:#999;
border-radius:4px;
`;

const Footer = () => {
    return (
        <FooterA>
        <Container>
            <AboutUs>
            <h2>About Us</h2>
            <p>Dolore reprehenderit culpa ad dolore nostrud cupidatat velit excepteur enim esse sit culpaDolore reprehenderit culpa ad dolore nostrud cupidatat velit excepteur enim esse sit culpa.</p>
            <Sci>
            <li><a href="/"><FaFacebookSquare fontSize='20px'  color="#fff"/> </a></li>    
            <li><a href="/"><FaTwitter fontSize='20px'  color="#fff"/> </a></li>    
            <li><a href="/"><FaInstagram fontSize='20px'  color="#fff"/> </a></li>    
            <li><a href="/"><FaYoutube fontSize='20px'  color="#fff"/> </a></li>    
            </Sci>
            </AboutUs>
            <QuickLink>
                <h2>Quick Links</h2>
                <ul>
                <li href="#"><a>About</a></li>
                <li href="#"><a>FAQ</a></li>
                <li href="#"><a>Privacy policy</a></li>
                <li href="#"><a>Help</a></li>
                <li href="#"><a>Terms & consitions</a></li>
                <li href="#"><a>Contact</a></li>

                </ul>
            </QuickLink>
        </Container>
        <CopyRight>
            <p>Copyright © 2021 , Kamel Dawoud,All Rights Reserved.</p>
        </CopyRight>
        </FooterA>
    )
}

export default Footer
