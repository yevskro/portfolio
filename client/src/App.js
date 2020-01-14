import React     from 'react'
import { Route } from 'react-router-dom'
import Header    from './components/Header'

import './styles/Reset.css'
import './styles/App.css'

const App = () => <div className="app">
                    <Header/>
                    <div className="bdy">
                        <div className="prjs-cntnr">
                        </div>
                    </div>
                    <div className="ftr">

                    </div>
                </div>

export default App

/*
    TODO: document.findByClassName("js-lst-intr-cntnr")
    https://medium.com/@chung.andrew7/finding-the-absolute-positions-of-react-components-fda1c5bc9ab
    check out ^ if not able to hook into react
*/