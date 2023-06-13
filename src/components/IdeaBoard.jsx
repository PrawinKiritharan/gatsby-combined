import React, { useEffect, useState, useRef } from 'react';
import '../components/css/ideaboard.css'
import { Button, Typography, Slider, Alert } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import scribbleIcon from '../images/scribbleIcon.svg';
import postItIcon from '../images/postIt.png';
// import { ErrorSharp } from '@mui/icons-material';

let rect;
let controls;
let overlay;
let postIt;
let formSizing;

const IdeaBoard = () => {

    // States for canvas manipulation
    const canvasRef = useRef(null);
    const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
    const [canvasCTX, setCanvasCTX] = useState(null);
    const [empty, setEmpty] = useState(true);

    // States for form manipulation
    const [included, setIncluded] = useState(false);
    const [formPage, setFormPage] = useState(1);
    const [errorAlert, setErrorAlert] = useState(false);
    const [errorList, setErrorList] = useState(null);
    const [canvasImgUrl, setCanvasImgUrl] = useState(null)

    try {
        const page = document.querySelector(".ideaBoard") // used to get distance between component and the edge of the browser (aka whitespace)

        rect = page.getBoundingClientRect(); // same as above


        // Style for drawing controls
        controls = {
            position: "absolute",
            zIndex: 99,
            bottom: "40px",
            // left: `${(rect.left + 1512 - 200 - 20)}px`,   // (distance to left of page) + (component width) + (element width) + (desired margin)
            left: `${(rect.left + 100)}px`,

        }

        //  style for overlayed sections
        overlay = {
            position: "absolute",
            top: "416px",
            left: `${(rect.left + 280)}px`,
            zIndex: "0",
            display: "flex",
            justifyContent: "space-between",
            width: "430px",
        }

        // Style for the post-it note image
        postIt = {
            position: "absolute",
            top: "40px",
            left: `${(rect.left + 110)}px`,
            zIndex: "0",
        }

        // Style for sizing the form
        formSizing = {
            width: "480px",
            height: errorAlert ? "669px" : "624px"
        }

        // Other styling in ideaboard.css

    }
    catch (e) {

    }



    // Set the canvas ctx as the state
    useEffect(() => {
        const canvas = canvasRef.current; // Select the canvas element
        const ctx = canvas.getContext("2d"); // The canvas context
        canvas.width = "864"; // Set width of the canvas to the width of the screen
        canvas.height = "1030";// Set height of the canvas to the height of the screen
        setCanvasCTX(ctx); // Finally, set the state
    }, [canvasRef]); // Do this everytime the canvas element is changed

    const SetPos = (e) => {
        // The e variable is the event
        try {
            setMouseData({
                x: e.clientX - rect.left, // Mouse X position
                y: e.clientY - rect.top, // Mouse Y position
            });
        }
        catch (e) { }
    };

    const [color, setColor] = useState("#000000"); // Default color is black
    const [size, setSize] = useState(6); // Default size is 10

    const Draw = (e) => {
        if (e.buttons !== 1) return; // The left mouse button should be pressed
        setEmpty(false);
        const ctx = canvasCTX; // Our saved context
        ctx.beginPath(); // Start the line
        ctx.moveTo(mouseData.x, mouseData.y); // Move the line to the saved mouse location
        try {
            setMouseData({
                x: e.clientX - rect.left, // Update the mouse location
                y: e.clientY - rect.top, // ^^^^^^^^^^^^^^^^^^^^^^^^^^^
            });
        }
        catch (e) { }
        ctx.lineTo((e.clientX - rect.left), (e.clientY - rect.top)); // Again draw a line to the mouse postion
        ctx.strokeStyle = color; // Set the color as the saved state
        ctx.lineWidth = size; // Set the size to the saved state
        // Set the line cap to round
        ctx.lineCap = "round";
        ctx.stroke(); // Draw it!
    };

    const formSubmit = (event) => {
        event.preventDefault(); // Stop page refresh and submitting the form into the URI

        // setting variables from the form data
        let name = event.target[0].value
        let email = event.target[1].value
        let projectType = event.target[2].value
        let notes = event.target[3].value
        let acceptPP = event.target[4].value
        let scribbleImage



        //  If the form has "include scribbles" selected
        if (included) {

            let canvas = document.querySelector("canvas")

            scribbleImage = canvas.toDataURL("image/png") // Convert canvas' current image state to png

            setCanvasImgUrl(scribbleImage) // Set state to the png src
        }

        // Possible data object for passing form data back to database
        let info = {
            name: name,
            email: email,
            projectType: projectType,
            notes: notes,
            acceptPP: acceptPP,
            image: scribbleImage,
        }


    }



    return (
        <section className="ideaBoard"
        data-scroll-section
        >

            <div className="drawingArea">

                <canvas
                    ref={canvasRef}
                    onMouseEnter={(e) => SetPos(e)}
                    onMouseMove={(e) => { SetPos(e); Draw(e) }}
                    onMouseDown={(e) => SetPos(e)}
                    width="864px"
                    height="1030px">
                </canvas>

            </div>
            <form className="form" onSubmit={formSubmit} style={formSizing}>

                <Typography className="formHead" fontFamily="Inter" fontSize="32px" fontWeight="700" width="369px">Discuss your next project</Typography>
                <Typography className="formSubHead" fontFamily="Inter, sans-serif" fontSize="16px" fontWeight="400" width="377px">Pick our brains about your project or idea, fill out this form and we will be in touch:</Typography>

                {/* Page 1 of the form inputs */}

                <div className={formPage === 1 ? "formBody1 slide-in " : "slide-out hidden"}>
                    <div className="inputs">
                        <div className="inputContainer">
                            <label htmlFor="name"><Typography height="32px" fontFamily="Inter, sans-serif" fontSize="13px" fontWeight="600">Name*</Typography></label>

                            <input name="name" id="name" type="text" className="formInput" required />
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="email"><Typography height="32px" fontFamily="Inter, sans-serif" fontSize="13px" fontWeight="600">Email*</Typography></label>

                            <input name="email" id="email" type="email" className="formInput" required />
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="pType"><Typography height="32px" fontFamily="Inter, sans-serif" fontSize="13px" fontWeight="600">Project Type</Typography></label>

                            <input name="pType" id="pType" type="text" className="formInput" />
                        </div>
                    </div>


                </div>


                {/* Page 2 of the form inputs */}
                <div className={formPage === 2 ? "formBody2 slide-inR" : "slide-outR hidden"}>
                    <div className="inputs">
                        <div className="inputContainer">
                            <label htmlFor="notes"><Typography height="32px" fontFamily="Inter, sans-serif" fontSize="13px" fontWeight="600">Notes</Typography></label>

                            <textarea name="notes" id="notes" className="formInput" />
                        </div>

                        <div className="inputContainerFlex">
                            <input type="checkbox" name="acceptpp" id="acceptpp" required />
                            <label htmlFor="acceptpp"><Typography height="19px" fontFamily="Inter, sans-serif" fontSize="13px" fontWeight="600">Accept <u>Privacy Policy</u></Typography></label> // REPLACE "<u></u>" WITH "<a></a> for link"

                        </div>


                    </div>


                </div>

                {errorAlert ?  // When there are errors in the inputted form data
                    <div className="errorBox">
                        <Alert onClose={() => { setErrorAlert(false) }} severity="error">{errorList}</Alert>
                    </div> : null
                }

                <div className="formFoot">
                    <div className="include">
                        <input type="checkbox" id="hiddenCheck" name="hiddenCheck"
                            onClick={() => { setIncluded(prev => !prev) }}></input>
                        {!included ?
                            <label className="background" htmlFor="hiddenCheck"><div className="circle"></div></label> : <label className="backgroundchecked" htmlFor="hiddenCheck"><div className="circle"></div></label>
                        }
                        <Typography className="scribbleFont" lineHeight="16px" fontFamily="Inter, sans-serif" fontSize="11x" fontWeight="200">Include Scribbles</Typography>
                    </div>


                    <div className={formPage === 2 ? "formBtns" : "hidden"}>
                        <Button variant="text" color="black" onClick={() => { setFormPage(1) }}>
                            <Typography
                                fontFamily="Inter, Sans-Serif"
                                fontSize="14px"
                                fontWeight="600"
                                lineHeight="16px"
                                letterSpacing="1.25px"
                                textAlign="center"
                            >
                                BACK</Typography></Button>
                        <Button className="nextBtn" variant="outlined" color="black" type="submit" >
                            <Typography
                                fontFamily="Inter, Sans-Serif"
                                fontSize="14px"
                                fontWeight="600"
                                lineHeight="16px"
                                letterSpacing="1.25px"
                                textAlign="center"
                            >
                                SUBMIT
                            </Typography></Button>
                    </div>

                    <div className={formPage === 1 ? "formBtns" : "hidden"}>
                        <Button variant="text" color="black" disabled>
                            <Typography
                                fontFamily="Inter, Sans-Serif"
                                fontSize="14px"
                                fontWeight="600"
                                lineHeight="16px"
                                letterSpacing="1.25px"
                                textAlign="center"
                            >
                                BACK
                            </Typography></Button>

                        {/* Submit button */}
                        <Button className="nextBtn" variant="outlined" color="black" onClick={() => {

                            let nameIn = document.querySelector("#name").value;
                            let emailIn = document.querySelector("#email").value;

                            let errors = []

                            // Checking if name is empty, if it is return the corrosponding error
                            if (nameIn === "") {  //check if name empty 

                                errors.push("Name cannot be empty. ")


                            }

                            // Checking if name includes symbols/numbers, if it does return the corrosponding error
                            if (!(/^[A-Za-z\s]*$/.test(nameIn))) {
                                errors.push("Name cannot include numbers or symbols. ")
                            }


                            // Checking the the email is feasible, if it is not then return the corrosponding error
                            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailIn))) {

                                errors.push("Email must be valid. ")


                            }

                            // If there are no errors in the inputs, continue to the next form page
                            if (errors.length === 0) {
                                setErrorAlert(false)
                                setFormPage(2)
                            }

                            // If there are errors then set them as a state and then set the errorAlert state to true, this makes an errorbox appear on the form
                            else {
                                setErrorList(errors)
                                setErrorAlert(true)
                            }

                        }}>

                            <Typography
                                fontFamily="Inter, Sans-Serif"
                                fontSize="14px"
                                fontWeight="600"
                                lineHeight="16px"
                                letterSpacing="1.25px"
                                textAlign="center"
                            >
                                NEXT
                            </Typography></Button>
                    </div>


                </div>
            </form>


            <div
                className="controls"
                style={controls}
            >
                <input
                    type="range"
                    value={size}
                    max={40}
                    onChange={(e) => {
                        setSize(e.target.value);
                    }}
                />
                <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const ctx = canvasCTX;
                        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                    }}
                >
                    Clear
                </button>
            </div> */


            {empty === false ?
                <div className="control" style={controls}>
                    <Button
                        className="clearBtn"
                        sx={{
                            width: "100px",
                            height: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            ":hover": { bgcolor: "#fff" }
                        }}
                        color="secondary"
                        fontFamily="Inter, sans-serif"
                        fontWeight="600"

                        variant="text"

                        onClick={() => {
                            const ctx = canvasCTX;
                            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                            setEmpty(true)
                        }}
                    >
                        <DeleteIcon className="clearBtnIcon" width="24px" height="24px" />
                        <Typography
                            fontFamily="Inter, Sans-Serif"
                            fontSize="14px"
                            fontWeight="600"
                            lineHeight="16px"
                            letterSpacing="1.25px"
                            textAlign="center"
                        >
                            Clear
                        </Typography>
                    </Button>

                    {/* Input slider for pen width */}
                    <Slider
                        color="white"
                        value={size}
                        max={20}
                        onChange={(e) => {
                            setSize(e.target.value);
                        }}

                    />


                </div> : null
            }

            {/* If the form is empty then display the canvas overlay */}
            {empty === true ?
                <div className="overlay" style={overlay}>
                    <img src={scribbleIcon} alt="pen icon"></img>
                    <Typography width="300px" fontFamily="Inter, sans-serif" fontStyle="normal" fontSize="40px" color="rgba(0, 0, 0, 0.24)">Scribble some notes</Typography>
                </div> : null
            }

            {/* Code for the post-it note image */}
            <div className="postit" style={postIt}>
                <img src={postItIcon} alt="Ideas Board" width="136.57px" height="136.57px" />
            </div>

        </section>

    )
}

export default IdeaBoard