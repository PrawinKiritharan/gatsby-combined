import React, { useState } from 'react'
import { Spring, useSpring, animated, config } from 'react-spring'
import '../components/liquidtoggle.css'

import Coords from '../images/liquid/coordinator.json'

// let disabled = Coords[0];
// let forward1 = Coords[1];
// let forward2 = Coords[2];
// let enabled = Coords[3];
// let back1 = Coords[4];
// let back2 = Coords[5];



import ReactDOM from 'react-dom'
import { interpolate } from 'flubber'

class Test extends React.Component {
    state = {
        paths: [
            "M0,160a160,160 0 1,0 320,0a160,160 0 1,0 -320,0",
            "M469 160C469 248.366 397.366 320 309 320C220.634 320 0.5 248.366 0.5 160C0.5 71.6344 220.634 0 309 0C397.366 0 469 71.6344 469 160Z",
            "M212 160C212 248.366 164.542 320 106 320C0 320 0 248.366 0 160C0 71.6344 0 -1.0125e-05 106 0C168.5 5.96993e-06 212 71.6344 212 160Z",
            "M0,160a160,160 0 1,0 320,0a160,160 0 1,0 -320,0",
            "M474 160C474 248.366 248.366 320 160 320C71.6344 320 0 248.366 0 160C0 71.6344 71.6344 0 160 0C248.366 0 474 71.6344 474 160Z",
            "M198 160C198 248.366 183.5 320 99 320C44.3238 320 0 248.366 0 160C0 71.6344 44.3238 0 99 0C181 0 198 71.6344 198 160Z",
        ],
        index: 0
    }
    goNext = () => this.setState(state => ({ index: state.index + 1 >= state.paths.length ? 0 : state.index + 1 }))
    render() {
        const { paths, index } = this.state
        const interpolator = interpolate(paths[index], paths[index + 1] || paths[0], { maxSegmentLength: 0.1 })
        return (
            <svg width="500" viewBox="0 0 22 22">
                    <Spring reset native from={{ t: 0 }} to={{ t: 1 }} onRest={this.goNext}>
                        {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
                    </Spring>
            </svg>
        )
    }
}

export default Test;