import * as React from 'react'
import Navbar from '../components/navbar'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import Doughnut from '../components/doughnut'
import Experience from '../components/experience'
import Process from '../components/process'
import Projects from '../components/projects'
import IdeaBoard from '../components/IdeaBoard'
import Gallery from '../components/Gallery'

const theme = createTheme({
  palette: {
    primary:{
      main: "#75FFDC"
    },
  black:{
   main: "#000" 
  }
  }
})

const doughnutPage = {
  width: "1512px",
}

const processPage = {
  position: "relative",
  width: "1512px",
}

const experiencePage = {
  position: "relative",
  width: "1347px",
  height:"656px",
}

const projectsPage = {
  position: "relative",
}

const ideaboardPage = {
  position: "relative",
}

const galleryPage = {
  position: "relative",
}

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#fff",
  backgroundImage: "radial-gradient(circle, #ddd 1%, transparent 10%), radial-gradient(circle, #ddd 1%, transparent 10%)",
  backgroundSize: "50px 50px",
  backgroundPosition:"0 0, 1px 1px",
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={style}>
        <div>
          <Navbar/>
        </div>
        <div style = {doughnutPage}>
          <Doughnut/>
        </div>
        <div style = {processPage}>
          <Process/>
        </div>
        {/* <div style = {projectsPage}>
          <Projects/>
        </div> */}
        <div style = {ideaboardPage}>
          <IdeaBoard/>
        </div>
        <div style = {galleryPage}>
          <Gallery />
        </div>
        <div style = {experiencePage}>
          <Experience/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage