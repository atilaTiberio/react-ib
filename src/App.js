import React from 'react'
import Navbar from './components/Navbar'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Content from './components/Content'
import Post from './components/Post'

/*
* https://jsonplaceholder.typicode.com
* */
const MainComponent = () => {
    return (

        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch> {/*Only one match will happen */}
                    <Route exact path='/' component={Home}/>
                    <Route path='/content' component={Content}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/:post_id' component={Post} />
                </Switch>
            </div>
        </BrowserRouter>

    )
}

export default MainComponent;