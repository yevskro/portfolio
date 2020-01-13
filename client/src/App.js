import React     from 'react'
import { Route } from 'react-router-dom'
import './styles/Reset.css'
import './styles/App.css'

const App = () => <React.Fragment>
                    <div className="hdr bg-drkgry">
                        <div className="nav"><button>Hire Me</button></div>
                        <div className="intro-cntnr">
                            <div className="intro-msg wht">
                                hi! I am...
                            </div>
                            <div className="intro-cntnr">
                                <span className="intro-msg big wht">
                                    Yevgeniy Skroznikov
                                </span>
                                <div className="intro-cntnr">
                                    <span className="intro-msg gry">
                                        I am a
                                        <span className="neon">
                                            &nbsp;javascript full stack web developer&nbsp;
                                        </span>
                                        that can take your website idea 
                                        and code you a front-end and a back-end.
                                    </span>
                                    <div className="intro-cntnr">
                                        <ul className="intro-lst">
                                            <li className="intro-lst-itm">REACT</li>
                                            <li className="intro-lst-itm">REDUX</li>
                                            <li className="intro-lst-itm">EXPRESS</li>
                                            <li className="intro-lst-itm">NODE</li>
                                            <li className="intro-lst-itm">SQL</li>
                                        </ul>
                                        <div className="intro-cntnr">
                                            <span className="intro-msg gry">
                                                I will work close with you on your idea 
                                                and make it into an awesome reality. Your 
                                                website should represent the best product 
                                                possible. And I am the man for the job.
                                            </span>
                                            <div className="intro-cntnr"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bdy">

                    </div>
                    <div className="ftr">

                    </div>
                </React.Fragment>

export default App
/*
<div className="intro-cntnr">
    <span className="intro-msg wht"></span>
    <div className="intro-cntnr">
        <span className="intro-msg big wht"></span>
        <div className="intro-cntnr">
            <span className="intro-msg gry">
                <span className="neon"></span>
            </span>
            <div className="intro-cntnr">
                <div className="intro-cntnr">
                    <span className="intro-msg gry"></span>
                </div>
            </div>
        </div>
    </div>
</div>*/