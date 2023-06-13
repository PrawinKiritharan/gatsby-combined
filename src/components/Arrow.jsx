import React from 'react';
import { Typography, Button } from '@mui/material';
import Arrow from '../images/Arrow.svg';
import '../components/css/arrow.css';

const style = {
    display: "flex",
    flexDirection: "row",
    width: "120px",
    height: "24px",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    
}

// sx={{":hover": { bgcolor: "#75FFDC" }}}


const ArrowBtn = (props) => {
    return (
        <div className="arrowBtn" style={style}>
            <Button sx={{":hover": { bgcolor: props.hover }}} color={props.color} variant="text" minwidth="131px" onClick = {()=>{ window.location.href = `./${props.page}`}}>
                <Typography color="black" fontWeight="700" fontSize="14px" lineHeight="16px">VIEW ALL</Typography>
                <div className="arrow">
                    <img src={Arrow} alt="right facing arrow" width="16px" height="8px"></img>
                </div>
            </Button>

        </div>
    )
}

export default ArrowBtn;