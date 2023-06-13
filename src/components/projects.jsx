import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ArrowBtn from '../components/Arrow'
import '../components/css/projects.css'

// import { useScroll } from '@use-gesture/react' // FOR PRAWIN -- read docs to be able to use the scroll event manipulation

import NetKnoImg from '../images/project/NetKnoImg.png'
import WowzaImg from '../images/project/WowzaImg.png'
import OneXpImg from '../images/project/OneXpImg.png'


// import Data from '../components/projectLeft.json';

const lMargin = {
    marginLeft: "84px"
}

const headStyle = {
    width: "1512px",
    height: "124px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid rgba(0,0,0,0.12)",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
}

const leftStyle = {
    width: "584px",
    height: "855px",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
}

const bodyStyle = {
    width: "927px",
    height: "855px",
    borderLeft: "1px solid rgba(0,0,0,0.12)",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    // scrollSnapType: "y mandatory",
}

const Projects = (props) => {

    const [card, setCard] = useState(null)
    const [hover, setHover] = useState(false)

    // const [bg, setBg] = useState(null);


    useEffect(() => {
        setCard((card) => card = props.card);
    }, );

    let sizing = {
        width: "1512px",
        height: "982px",
        margin: 0,
        backgroundColor: card === "netkno" ? "#F8F8FE" : card === "wowza" ? "#FFF9EF" : card === "onexp" ? "#FFE3E3" : "#F8F8FE",

        

        display: "flex",
        flexWrap: "wrap",
    }

// const child = {
//     scrollSnapAlign: "start",
//     height: "100%",
//     width: "100%",
// }
// const parent = {
//     scrollSnapType: "y mandatory",
// }

    // return (
    //     <div style={sizing} className="projects">
    //         <div className="projectHead" style={headStyle}>
    //             <Typography style={lMargin} fontSize="56px" lineHeight="40px"><b>Projects</b></Typography>
    //             <ArrowBtn hover={sizing.backgroundColor} page="404" /> {/* the property "page" takes in the name of the file without the extension */}
    //         </div>
    //         <div className="projectLeft" style={leftStyle}>
    //             {card === "netkno" ?
    //             <Typography fontSize="40px" lineHeight="16px"></Typography> : <div />
    //             }
    //             {card === "wowza" ?
    //             <Typography fontSize="40px" lineHeight="16px"></Typography> : <div />
    //             }
    //             {card === "onexp" ?
    //             <Typography fontSize="40px" lineHeight="16px"></Typography> : <div />
    //             }
    //         </div>
    //         <div className="projectBody" style={bodyStyle}>
    //             {card === "netkno" ?
    //                 <img src={NetKnoImg} alt={card}></img> : <div />
    //             }
    //             {card === "wowza" ?
    //                 <img src={WowzaImg} alt={card}></img> : <div />
    //             }
    //             {card === "onexp" ?
    //                 <img src={OneXpImg} alt={card}></img> : <div />
    //             }
    //         </div>
    //     </div>
    // )
let area;
let noRepeat = 0

const handleScroll = (event) => {
    if (hover){
        event.preventDefault();
    }
}

const handleOver = (event) => {
    setHover(true);
}

const handleOut = (event) => {
    setHover(false);
}

if (document.querySelector(".projects") && noRepeat === 0){
    area = document.querySelector(".projects");
    area.addEventListener("mouseover", handleOver)
    area.addEventListener("mouseover", handleOut)
    area.addEventListener("scroll", handleScroll)
    noRepeat = 1;
}



    return (
        <section style={sizing} className="projects"
        data-scroll-section
        >
            <div className="projectHead" style={headStyle}>
                <Typography style={lMargin} fontSize="56px" lineHeight="40px"><b>Projects</b></Typography>
                <ArrowBtn color="black" hover={sizing.backgroundColor} page="404" /> {/* the property "page" takes in the name of the file without the extension */}
            </div>
            <div className="projectLeft" style={leftStyle}>

                <Typography fontSize="40px" lineHeight="16px"></Typography> : <div />

                <Typography fontSize="40px" lineHeight="16px"></Typography> : <div />

                <Typography fontSize="40px" lineHeight="16px"></Typography> : <div />

            </div>
            <div className="projectBody" style={bodyStyle}>
                <div className="pBodyChild" >
                    <img src={NetKnoImg} alt={card}>1</img>
                </div>
                <div className="pBodyChild" >
                    <img src={WowzaImg} alt={card}>2</img>
                </div>
                <div className="pBodyChild" >
                    <img src={OneXpImg} alt={card}>3</img>
                </div>
            </div>
        </section>
    )

}

export default Projects