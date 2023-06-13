import * as React from 'react'
import { Link } from 'gatsby'
import {Button, Typography} from '@mui/material';

import LAYERS from "../images/logo.svg"

export const Font = () => <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>

const bar = {
    fontFamily: "Manrope, sans-serif",
}

const nav = {

    height: "100px",
    width:"1512px",
}

const navLinks = {
    display: "flex",
    listStyle: "none",
    paddingLeft: "0",
}

const navLinkItem = {
    position: "absolute",
    width: "186px",
    height: "61px",
    left: "48px",
    top: "31px",
}


const navLinkItem1 = {
    position: "absolute",
    width: "49px",
    height: "22px",
    left: "575px",
    top: "43px",

}
const navLinkItem2 = {
    position: "absolute",
    width: "44px",
    height: "22px",
    left: "704px",
    top: "43px",
}
const navLinkItem3 = {
    position: "absolute",
    width: "118px",
    height: "22px",
    left: "820px",
    top: "43px",
}

const navLinkItem4 = {
    position: "absolute",
    left: "1323px",
    top: "37px",
    bottom: "6439px",
}


const navLinkText = {
    fontFamily: "Manrope, sans-serif",    
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "16px",
    lineHeight: "22px",
    /* identical to box height */
    textAlign: "center",
}

const heading = {

}


const NavBar = (props) => {

    return (
        <section style={bar}
        data-scroll-section
        >
            <nav style = {nav}>
                <div style={navLinkText}>
                    <ul style={navLinks}>
                        <li style={navLinkItem}>
                            <Link to="/" style={navLinkText}>
                                <img src = {LAYERS} alt="Layers Logo"/>
                            </Link>
                        </li>
                        <li style={navLinkItem1}>
                            <Button variant = "text" color = "black">
                                <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600">WORK</Typography>
                            </Button>
                        </li>
                        <li style={navLinkItem2}>
                            <Button variant = "text" color = "black">
                                <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600">TEAM</Typography>
                            </Button>
                        </li>
                        <li style={navLinkItem3}>
                            <Button variant = "text" color = "black">
                                <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600">TESTIMONIALS</Typography>
                            </Button>
                        </li>
                        <li style={navLinkItem4}>
                            <Button variant = "outlined" color = "black">
                                <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600">CONTACT</Typography>
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <h1 style={heading}>{props.pageTitle}</h1>
                {props.children}
            </main>
        </section>
    )
}

export default NavBar