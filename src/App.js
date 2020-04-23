import React from 'react';
import Navbar from './components/Navbar'
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Content from "./components/Content";

const MainComponent = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Route path='/home' component={Home}/>
                <Route path='/content' component={Content}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>

            </div>
        </BrowserRouter>

    )
}

export default MainComponent;