import * as React from "react"

const navBar = {
    backgroundColour: "#ddd",
    height: "250px",
    width: "1000px",
}

const MainPage = () => {
    return (
        <main>
            <div style = {navBar}>
                <p>Layers</p>
            </div>
        </main>
    )
}

export default MainPage

export const Head = () => <title>Layers</title>