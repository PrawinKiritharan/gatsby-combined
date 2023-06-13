import { transform } from 'lodash';
import React, { useState, useEffect } from 'react';
import '../components/css/liquidtoggle.css'
import anime from 'animejs/lib/anime.es.js';

import { interpolate } from 'flubber'
import { useSpring, animated } from 'react-spring'

import Coords from '../images/liquid/coordinator.json'


// import disabled from '../images/liquid/disabled.svg'
// import forward1 from '../images/liquid/forward1.svg'
// import forward2 from '../images/liquid/forward2.svg'
// import enabled from '../images/liquid/enabled.svg'
// import back1 from '../images/liquid/back1.svg'
// import back2 from '../images/liquid/back2.svg'


import Handle from '../images/liquid/Handle.svg'
import SVGMorpher from "svg-morpher";

// let s = Snap(Handle);

// let disabled = Snap.select("#disabled")
// let disabledPoints = disabled.node.getAttribute('d');

// let forward1 = Snap.select("#forward1")
// let forward1Points = forward1.getAttribute('d');

let disabled = Coords[0];
let forward1 = Coords[1];
let forward2 = Coords[2];
let enabled = Coords[3];
let back1 = Coords[4];
let back2 = Coords[5];


export const SnapSvg = () => <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js"></script>

const LiquidToggle = () => {

    const [checked, setChecked] = useState(false);
    const [frame, setFrame] = useState(0);

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(1);

    const frames = [disabled, forward1, forward2, enabled, back1, back2, disabled];

    let interval;

    const { t, x } = useSpring({
        t: checked ? 1 : 0,
        x: "#fff",
        config: {
            tension: 270
        },
    })

    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1
    })





    return (
        <div className="liquidToggle">
            <input
                type="checkbox"
                id="hiddenCheck"
                name="hiddenCheck"
                toggled={String(checked)}
                onClick={() => {

                   
                    setChecked(prev => !prev)


                }}></input>
            <label className="background" htmlFor="hiddenCheck">
                {/* {checked ?
                    <div className="handleOn"></div> : <div className="handleOff"></div>
                } */}
                {/* <img src={frames[frame]}></img> */}
                {/* <img className="frame" ></img> src={Handle}  */}
                <svg className="mode-icon" width="320" height="320" viewBox="0 0 320 320" onClick={() => setChecked(prev => !prev)}>
                    <animated.path
                        style={{
                            fill: x.to(x => `${x}`),
                            ...fadeIn
                        }}
                        d={()=>{
                            for( let i = 0; i<3; setTimeout(i++,50)){
                                setTimeout(t.to(interpolate(frames[i], frames[(i+1)])), 50)
                            }
                        }}
                        />
                             
                </svg>
            </label>
                <p>{frame}</p>
                <p>{String(checked)}</p>
        </div>
            )

}

            export default LiquidToggle;