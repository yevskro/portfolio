import React, { Component }     from 'react'
import { Route } from 'react-router-dom'
import Header    from './components/Header'

import './styles/Reset.css'
import './styles/App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            indentWidth: 0
        }
    }

    onGotResponsiveIndentWidth = (width) => {
        this.setState({indentWidth: width})
    }

    render(){
        return <div className="app">
                    <Header onGotResponsiveIndentWidth={this.onGotResponsiveIndentWidth}/>
                    <div className="bdy">
                        <div className="prjs-cntnr hdn anime-visible delay-animation-8" style={{"margin-left": this.state.indentWidth}}>
                            <div className="prj">
                                <div className="prj-hdr f-size-lg">www.yevdev.io</div>
                                <p className="prj-txt">fdsfkdsfksdjfsjdfsdjfksdjfksdjfksdjfsdjfkdsjkfkfjskdjf</p>
                                <div className="prj-wnd">
                                    <div className="prj-bar">
                                        <span className="prj-circle bg-red"></span><span className="prj-circle bg-orange"></span><span className="prj-circle bg-green"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="prj">
                                <div className="prj-hdr f-size-lg">hangroulette.dev</div>
                                <p className="prj-txt">fdsfkdsfksdjfsjdfsdjfksdjfksdjfksdjfsdjfkdsjkfkfjskdjf</p>
                                <div className="prj-wnd">
                                    <div className="prj-bar">
                                    <span className="prj-circle bg-red"></span><span className="prj-circle bg-orange"></span><span className="prj-circle bg-green"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default App

/*
    TODO: document.findByClassName("js-lst-intr-cntnr")
    https://medium.com/@chung.andrew7/finding-the-absolute-positions-of-react-components-fda1c5bc9ab
    check out ^ if not able to hook into react
*/