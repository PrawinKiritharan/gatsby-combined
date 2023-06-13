import * as React from 'react'
import {Typography} from '@mui/material';

import ALLIANZ from "../images/logos/allianz.png"
import LV from "../images/logos/lv.png"
import NETKNO from "../images/logos/netkno.png"
import ONEXP from "../images/logos/onexp.png"
import PROPERTY from "../images/logos/property.png"
import SAFEPOINT from "../images/logos/safepoint.png"
import WOWZA from "../images/logos/wowza.png"

export const Manrope = () => <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>
export const Inter = () => <link href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@400;800&display=swap" rel="stylesheet"/>


const yellow = {
    position: "absolute",
    backgroundColor:"#FDFF9D",
    width: "1347px",
    height: "656px",
    left: "81px",
}

const text1 = {
    position: "absolute",
    textAlign: "center",
    width:"200px",
    height:"22px",
    left:"598px",
    top:"55px"
}

const text2 = {
    position: "relative",
    top: "90px",
    textAlign: "center",
    width:"823px",
    height:"80px",
    left:"258px"
}

const text3 = {
    position: "absolute",
    textAlign: "center",
    width:"540px",
    height:"72px",
    left:"397px",
    top:"512px",
}


const allianz = {
    position: "absolute",
    top:"265px",
    left:"335px"
}

const lv = {
    position: "absolute",
    top:"224px",
    left:"819px"

}

const netkno = {
    position: "absolute",
    top:"390.57px",
    left:"805.29px"
}

const onexp = {
    position: "absolute",
    top:"395.49px",
    left:"987.15px"
}

const property = {
    position: "absolute",
    top:"243.3px",
    left:"614.07px"
}

const safepoint = {
    position: "absolute",
    top:"395px",
    left:"241px"
}

const wowza = {
    position: "absolute",
    top:"391px",
    left:"523.01px"
}

const Experience = () => {
  return (
    <section style = {yellow}
    data-scroll-section
    >
        <div style = {text1}>
            <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600" fontSize = "16px" lineHeight="22px">WHO’S INNOVATING</Typography> 
        </div>
        <div style = {text2}>
            <Typography fontFamily = "Grad, sans-serif" fontWeight = "700" fontSize = "32px" lineHeight="40px">Privileged to work on challenges with forward thinking brands you know, and brands you will know.</Typography> 
        </div>
        <img style = {allianz} src = {ALLIANZ} alt = "Allianz Logo" />
        <img style = {lv} src = {LV} alt = "LV Logo" />
        <img style = {netkno} src = {NETKNO} alt = "Netkno Logo" />
        <img style = {onexp} src = {ONEXP} alt = "Onexp Logo" />
        <img style = {property} src = {PROPERTY} alt = "Property Logo" />
        <img style = {safepoint} src = {SAFEPOINT} alt = "Safepoint Logo" />
        <img style = {wowza} src = {WOWZA} alt = "Wowza Logo" />
        <div style = {text3}>
            <Typography fontFamily = "Inter, sans-serif" fontWeight = "400" fontSize = "16px" lineHeight="24px">Working closely with these teams to innovate and positively disrupt through UX, UI and branding design. Pragmatically building solutions that either work for now, or scale forever.</Typography> 
        </div>       
    </section>
  )
}

export default Experience