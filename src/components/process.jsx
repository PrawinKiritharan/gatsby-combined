import * as React from 'react'
import {Typography} from '@mui/material';

import CYCLE from "../images/cycle.svg"

export const Manrope = () => <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>
export const Inter = () => <link href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@400;800&display=swap" rel="stylesheet"/>


const text = {
    position: "relative",
    width: "1512px",
    height: "1030px",
}

const text1 = {
    position: "relative",
    width: "110px",
    height: "22px",
    left: "162px",
    top: "115px",
}

const text2 = {
    position: "relative",
    width: "546px",
    height: "160px",
    left: "162px",
    top: "150px",
}

const text3 = {
    position: "relative",
    width: "432px",
    height: "72px",
    left: "162px",
    top: "336px",
}

const cycle = {
    position: "relative",
    top: "253px",
    left: "1070px"

}

const Process = () => {
  return (
    <section style = {text}
    data-scroll-section
    >
        {/* <div>
            <img style = {cycle} src = {CYCLE} alt = "Design process outline" />
        </div> */}
        <div>
            <img style = {cycle} src = {CYCLE} alt = "Design process outline" />
            <div style = {text1}>
                <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600" fontSize = "16px" lineHeight="21.86px">WHAT WE DO</Typography> 
            </div>
            <div style = {text2}>
                <Typography fontFamily = "Grad, serif" fontWeight = "700" fontSize = "40px" lineHeight="48px" >Designing solutions through strategic thinking, creative process & techincal engineering, for brands, websites and web software.</Typography>
            </div>
            <div style = {text3}>
                <Typography fontFamily = "Inter, sans-serif" fontWeight = "400" fontSize = "16px" lineHeight="24px">Layers helps its clients design and develop their brands and products. We ensure your project is fully considered, beautifully designed and robustly developed.</Typography>
            </div>
        </div>
    </section>
  )
}

export default Process