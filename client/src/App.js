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
                        <div className="indent hdn anime-visible delay-animation-8" style={{width: this.state.indentWidth}}>

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