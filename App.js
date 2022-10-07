// import FirstExample from './Components/FirstExample';
// import FunctionalComp from './Components/FunctionalComp';
// import StateFunction from './Components/StateFunction';
// import EventsAction from './Components/EventsAction';
//import Constructor from './Components/Constructor';
// import Updating from './Components/Updating';
// import HOC from './Components/HigherOrderComponent';
// import ReactRouter from "./Components/ReactRouter";
import Portfolio from "./Portfolio/Portfolio";
import About from "./Portfolio/About";
import Contact from "./Portfolio/Contact";
import Works from "./Portfolio/Works";
import Blog from "./Portfolio/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Portfolio/Navbar";
import ThemeContext, { theme } from "./context-theme";
import { useState } from "react";
import ToggleSwitch from "./Portfolio/ToggleSwitch";
import { FaMoon, FaSun } from "react-icons/fa";
// import React from "react";
// import Fetch from './Components/Fetch'
// import Axios from './Components/Axios'
// import Project20 from './Components/Project20'
// import Egypt from './Components/Egypt'
// import Greece from './Components/Greece'
// import UseStateHooks from './Components/UseStateHooks'
// import FetchHooks from './Components/FetchHooks'
// import Project28 from './Components/Project28'

function App() {
  // const data = {
  //   firstName:'Ranjan',
  //   lastName:'Sharma'
  // }
  // const span = {
  //   span:'Senior Developer, India',
  // }
  // const join = {
  //   join:'Joining on Aug 1,2022'
  // }
  // const click = {
  //   text:'Click'
  // }
  // const style = {
  //   height:'200px'
  // }
  const name = {
    text: "Ranjan",
  };
  // const Home = {
  //   text:'Welcome'
  // }
  // const list ={
  //   text:'Temperament:',
  //   lifeSpan:'Life-Span:',
  //   weight:'Weight:',
  //   description:'Description:'
  // }
  // const twitter = {
  //   name:'Ranjan Sharma',
  //   user:'@ranjan.ind',
  // }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [themes, setTheme] = useState(theme.light);
  const [icon, setIcon] = useState(<FaMoon />);

  const handleTheme = () => {
    if (themes === theme.light) {
      setTheme(theme.dark);
      setIcon(<FaSun />);
    } else {
      setTheme(theme.light);
      setIcon(<FaMoon />);
    }
  };
  // themes === theme.dark
  //   ? setTheme(theme.light)
  //   : setTheme(theme.dark);

  // const Theme = useContext(ThemeContext)
  return (
    // {/* <FunctionalComp data={data} span={span} join={join}/> */}
    // {/* <StateFunction click={click} style={style}/> */}

    // {/* <EventsAction/> */}
    // {/* <Constructor/> */}
    // {/* <Updating/> */}
    // {/* <HOC/> */}
    // {/* <ReactRouter /> */}
    <div style={themes}>
      <ThemeContext.Provider value={themes}>
        <ToggleSwitch name={icon} click={handleTheme} />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Portfolio
                  category="portfolio"
                  name={name}
                  capital={capitalizeFirstLetter}
                />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <About category="about" capital={capitalizeFirstLetter} />
              }
            ></Route>
            <Route
              exact
              path="/contact"
              element={
                <Contact category="contact" capital={capitalizeFirstLetter} />
              }
            ></Route>
            <Route
              exact
              path="/works"
              element={
                <Works category="works" capital={capitalizeFirstLetter} />
              }
            ></Route>
            <Route
              exact
              path="/blog"
              element={
                <Blog
                  category="blog"
                  capital={capitalizeFirstLetter}
                  name="Create Your Blog"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>

    // <BrowserRouter>
    // <Project20/>
    //   <Routes>
    //     <Route path="/" element={<Egypt temperament={list}/>}></Route>
    //   </Routes>
    //   <Routes>
    //     <Route path="/greece" element={<Greece temperament={list}/>}></Route>
    //   </Routes>
    // </BrowserRouter>
    // <div>
    //   <UseStateHooks/>
    // </div>
    // <div>
    //   <Project28 name={twitter}/>
    // </div>
  );
}

export default App;
