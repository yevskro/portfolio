import React, { Component }     from 'react'
import { Route } from 'react-router-dom'
import Header    from './components/Header'
import Footer    from './components/Footer'
import Body      from './components/Body'

import './styles/Reset.css'
import './styles/App.css'
import './styles/Queries.css'

class App extends Component {
    state = { indentWidth: 0, widthOfPage: 0 }

    onGotResponsiveIndentWidth = (width) => {
        const e = document.getElementsByClassName("app")
        this.setState({indentWidth: width})
    }

    render(){
        return <div className="app">
                    <Header onGotResponsiveIndentWidth={this.onGotResponsiveIndentWidth}/>
                    <Container indentWidth={this.state.indentWidth}/>
                    <Footer indentWidth={this.state.indentWidth}/>
                </div>
    }
}

export default App

/*
    TODO: document.findByClassName("js-lst-intr-cntnr")
    https://medium.com/@chung.andrew7/finding-the-absolute-positions-of-react-components-fda1c5bc9ab
    check out ^ if not able to hook into react
*/

    /*<div className="prj anime-shift-from-right delay-animation-10">
                                <div className="prj-hdr f-size-lg orng">hangroulette.dev</div>
                                <p className="prj-txt">highlights include a 2d game, protected backend, multiplayer, and responsiveness. react express websockets nginx aws</p>
                                <div className="prj-wnd">
                                    <div className="prj-bar">
                                    <span className="prj-circle bg-red"></span><span className="prj-circle bg-orange"></span><span className="prj-circle bg-green"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    */