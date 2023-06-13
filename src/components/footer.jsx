import * as React from "react"
import logo from "../images/LayersLogo.svg";
import logoText from "../images/layers.svg"
import { Button, Typography } from "@mui/material"
import icoLogo from "../images/logos/icoLogo.svg"
import facebookLogo from "../images/logos/Facebook.svg";
import linkedinLogo from "../images/logos/Linkedin.svg";
import twitterLogo from "../images/logos/Twitter.svg";
import instagramLogo from "../images/logos/Instagram.svg";
import behanceLogo from "../images/logos/Behance.svg";
import monogramLogo from "../images/logos/Monogram.svg";



const Footer = (props) => {
    const css = `
    .logo{
        position: relative;
        top: 78px;
        width: 174.6px;
        height: 93.63px;
        margin-left: 102px;
    }
    .logoText{
        position: relative;
        bottom: 50px;
    }
    .footer{
        height: 290px;
        width: 1512px;
        margin: 0;
        padding: 0;
        background-color: ${props.color};
        align-self: center;
    }
    .links{
        position: relative;
        left: 425px;
        width:294px;
        height: 86px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }
    
    .links button{
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        /* identical to box height */


        color: #000000;

        opacity: 0.84;
    }
    .column1{
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-direction: column;
        flex-wrap: wrap;
        justify-self: left;
    }
    .column2{
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-direction: column;
        flex-wrap: wrap;
        justify-self: end;
    }
    .ico{
        height: 93px;
        width: 86.1px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        position: relative;
        left: 838.95px;
        bottom: 90px;

        cursor: pointer;
    }
    .address{
        width: 164px;
        height: 172px;

        position: relative;
        left: 1011px;
        bottom: 183px;
    }
    .socials{
        display: flex;
        justify-content: space-between;
        width: 88px;

        position: relative;
        left: 1308px;
        bottom: 350px;
    }

    .socials>.column{
        display: flex:
        flex-direction: column;
        width: 25.2px;
    }
    .socials>.column>img{
        cursor: pointer;
    }
`
    return (
        <section className="footer"
        data-scroll-section
        >
            <style>
                {css}
            </style>
            <div className="logo">
                <img src={logo} alt="Layers Logo" />
                <img className="logoText" src={logoText} alt="Layers" />
            </div>
            <div className="links">
                <div className="column1">
                    <Button sx={{":hover": { bgcolor: "#75FFDC" }}} variant="text" width="49px" height="16px">Home</Button>
                    <Button sx={{":hover": { bgcolor: "#75FFDC" }}} variant="text" width="49px" height="16px">About</Button>
                    <Button sx={{":hover": { bgcolor: "#75FFDC" }}} variant="text" width="49px" height="16px">Services</Button>
                </div>
                <div className="column2">
                    <Button sx={{":hover": { bgcolor: "#75FFDC" }}} variant="text" width="49px" height="16px">Case Studies</Button>
                    <Button sx={{":hover": { bgcolor: "#75FFDC" }}} variant="text" width="49px" height="16px">Get an estimate</Button>
                    <Button sx={{":hover": { bgcolor: "#75FFDC" }}} variant="text" width="49px" height="16px">Contact</Button>
                </div>

            </div>
            <div className="ico" onClick={()=>{window.location="https://ico.org.uk/"}}>
                <Typography lineHeight="12px" fontFamily="Inter, sans-serif" fontStyle="normal" fontWeight="600" fontSize="9px">Registered With:</Typography>
                <img src={icoLogo} alt="Information Commissionor's Office logo" width="86.1px" height="48px"></img>
            </div>

            <div className="address">
                <Typography fontSize="9px" lineHeight="12px"><b>Address</b></Typography>
                <Typography fontSize="9px" lineHeight="12px">
                    Layers Studio Ltd. <br />
                    Studio 11, Carliol Studios <br />
                    Carliol Cquare <br />
                    Newcastle upon Tyne <br />
                    NE1 6UF
                </Typography>
                <br />
                <Typography fontSize="9px" lineHeight="12px"><b>Call</b></Typography>
                <Typography fontSize="9px" lineHeight="12px">+44 (0)191 308 0288</Typography>
                <br />
                <Typography fontSize="9px" lineHeight="12px">
                    Company Number: 5161268 <br />
                    VAT Registration Number: 262 4355 12 <br />
                    T & C's | Privacy Policy
                </Typography>
            </div>
            <div className="socials">
                <div className="column">
                    <img width="30px" height="30px" src={facebookLogo} alt="Facebook"></img>
                    <img width="30px" height="30px" src={twitterLogo} alt="Twitter"></img>
                    <img width="30px" height="30px" src={instagramLogo} alt="Twitter"></img>
                </div>
                <div className="column">
                    <img width="30px" height="30px" src={linkedinLogo} alt="Facebook"></img>
                    <img width="30px" height="30px" src={behanceLogo} alt="Twitter"></img>
                    <img width="30px" height="30px" src={monogramLogo} alt="Twitter"></img>
                </div>
            </div>
        </section>
    )
}

export default Footer;