import * as React from 'react'
import {Typography, Button} from '@mui/material';

import '../components/css/svg.css'
import layered from "../images/layered-images.png"


export const Manrope = () => <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>
export const Inter = () => <link href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@400;800&display=swap" rel="stylesheet"/>

const page ={
    width: "1512px",
}

const doughnut = {
    position: "relative",
    width: "651px",
    height: "731px",
    left: "92px",
    top: "166px", 
}

const text = {
    position: "absolute",
    width: "587.27px",
    height: "250px",
    left: "882px",
    top: "261px",
}

const text1 = {
    position: "relative",
    height: "22px",
    left: "9.453px",
    right: "5.17px",
    top: "0.642px",
    bottom: "15.306px",
    /* identical to box height */
    color: "rgba(0, 0, 0, 0.87)",
}

const text2 = {
    position: "relative",
    width: "520px",
    height: "144px",
    left: "9.453px",
    right: "0.453px",
    top: "0.734px",
    bottom: "14.912px",
}

const text3 = {
    position: "relative",
    width: "561.1px",
    height: "72px",
    left: "9.442px",
    right: "0.536px",
    top: "1.126px",
    bottom: "14.696px",
}





const Doughnut = (props) => {
    return (
        <section
        data-scroll-section
        >

            <div style = {page}>
                <img style = {doughnut} src = {layered} alt = "Design process outline" />
            </div>
            <div style = {text}>
                <div style = {text1}>
                    <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600" fontSize = "16px" lineHeight="21.86px">LAYERS STUDIO</Typography> 
                </div>
                <div style = {text2}>
                    <Typography fontFamily = "Grad, serif" fontWeight = "700" fontSize = "40px" lineHeight="48px" >Designing meaningful experiences for businesses and users, everywhere.</Typography>
                    <svg width="246" height="72" viewBox="0 0 246 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1_1217_33299" maskUnits="userSpaceOnUse" x="-0.518555" y="0.744141" width="247" height="72" fill="black">
                        <rect fill="white" x="-0.518555" y="0.744141" width="247" height="72"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M180.241 13.9975C191.702 15.4599 200.586 18.4823 209.441 21.7533C238.48 32.4906 247.096 45.1607 225.208 54.2879C191.176 68.4325 115.474 71.8403 58.4964 60.2047C45.8771 57.6335 28.7256 54.7072 16.7548 47.5874C5.61884 40.9668 6.87461 34.683 12.9817 29.4068C19.2049 23.9928 30.4746 19.6168 39.3461 16.9821C78.1291 5.49504 153.748 -0.52528 219.698 14.2334C221.055 14.5272 222.459 14.4312 222.906 14.0267C223.353 13.6223 222.723 13.0672 221.464 12.7842C153.577 -2.40637 75.5655 3.65907 35.6481 15.4804C24.6091 18.7684 9.97307 24.672 5.12144 31.9069C1.83875 36.8555 3.05705 42.4148 12.7036 48.191C25.4145 55.7707 43.6265 58.9765 57.0219 61.71C115.844 73.7248 194.138 70.2589 229.221 55.6433C252.782 45.8371 243.684 32.2247 212.455 20.6818C202.936 17.1425 193.181 13.9164 180.741 12.3296C179.37 12.1549 178.148 12.3873 178.092 12.8565C177.937 13.315 178.968 13.8336 180.241 13.9975Z"/>
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M180.241 13.9975C191.702 15.4599 200.586 18.4823 209.441 21.7533C238.48 32.4906 247.096 45.1607 225.208 54.2879C191.176 68.4325 115.474 71.8403 58.4964 60.2047C45.8771 57.6335 28.7256 54.7072 16.7548 47.5874C5.61884 40.9668 6.87461 34.683 12.9817 29.4068C19.2049 23.9928 30.4746 19.6168 39.3461 16.9821C78.1291 5.49504 153.748 -0.52528 219.698 14.2334C221.055 14.5272 222.459 14.4312 222.906 14.0267C223.353 13.6223 222.723 13.0672 221.464 12.7842C153.577 -2.40637 75.5655 3.65907 35.6481 15.4804C24.6091 18.7684 9.97307 24.672 5.12144 31.9069C1.83875 36.8555 3.05705 42.4148 12.7036 48.191C25.4145 55.7707 43.6265 58.9765 57.0219 61.71C115.844 73.7248 194.138 70.2589 229.221 55.6433C252.782 45.8371 243.684 32.2247 212.455 20.6818C202.936 17.1425 193.181 13.9164 180.741 12.3296C179.37 12.1549 178.148 12.3873 178.092 12.8565C177.937 13.315 178.968 13.8336 180.241 13.9975Z" fill="#75FFDC"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M180.241 13.9975C191.702 15.4599 200.586 18.4823 209.441 21.7533C238.48 32.4906 247.096 45.1607 225.208 54.2879C191.176 68.4325 115.474 71.8403 58.4964 60.2047C45.8771 57.6335 28.7256 54.7072 16.7548 47.5874C5.61884 40.9668 6.87461 34.683 12.9817 29.4068C19.2049 23.9928 30.4746 19.6168 39.3461 16.9821C78.1291 5.49504 153.748 -0.52528 219.698 14.2334C221.055 14.5272 222.459 14.4312 222.906 14.0267C223.353 13.6223 222.723 13.0672 221.464 12.7842C153.577 -2.40637 75.5655 3.65907 35.6481 15.4804C24.6091 18.7684 9.97307 24.672 5.12144 31.9069C1.83875 36.8555 3.05705 42.4148 12.7036 48.191C25.4145 55.7707 43.6265 58.9765 57.0219 61.71C115.844 73.7248 194.138 70.2589 229.221 55.6433C252.782 45.8371 243.684 32.2247 212.455 20.6818C202.936 17.1425 193.181 13.9164 180.741 12.3296C179.37 12.1549 178.148 12.3873 178.092 12.8565C177.937 13.315 178.968 13.8336 180.241 13.9975Z" stroke="#75FFDC" stroke-width="6" mask="url(#path-1-outside-1_1217_33299)"/>
                    </svg>
                </div>
                <div style = {text3}>
                    <Typography fontFamily = "Inter, sans-serif" fontWeight = "400" fontSize = "16px" lineHeight="24px">Taking the process of innovation critically, creatively and inclusively. Working in multi disciplined teams, to research, design and develop projects that deliver results users care about.</Typography>
                </div>
                <Button variant = "contained" color = "primary" sx={{width: "195.3px"}}>
                    <Typography fontFamily = "Manrope, sans-serif" fontWeight = "600" fontSize="14px">GET IN TOUCH</Typography>
                </Button>
            </div>
        </section>
    )
}

export default Doughnut