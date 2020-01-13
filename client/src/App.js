import React     from 'react'
import { Route } from 'react-router-dom'
import './styles/Reset.css'
import './styles/App.css'

const App = () => <React.Fragment>
                    <div className="hdr bg-drkgry">
                        <button className="hdr-btn flt-rgt wht">Hire Me</button>
                        <div className="intro-cntnr">
                            <h4 className="intro-msg off-wht">
                                hi! I am...
                            </h4>
                            <div className="intro-cntnr">
                                <h1 className="intro-msg off-wht">
                                    Yevgeniy Skroznikov
                                </h1>
                                <div className="intro-cntnr">
                                    <h4 className="intro-msg gry">
                                        I am a
                                        <span className="neon">
                                            &nbsp;javascript full stack web developer&nbsp;
                                        </span>
                                        that can take your website idea 
                                        and code you a front-end and a back-end.
                                    </h4>
                                    <div className="intro-cntnr">
                                        <ul className="intro-lst">
                                            <li className="intro-lst-itm off-wht">REACT</li>
                                            <li className="intro-lst-itm off-wht">REDUX</li>
                                            <li className="intro-lst-itm off-wht">EXPRESS</li>
                                            <li className="intro-lst-itm off-wht">NODE</li>
                                            <li className="intro-lst-itm off-wht">SQL</li>
                                        </ul>
                                        <div className="intro-cntnr">
                                            <h4 className="intro-msg gry">
                                                I will work close with you on your idea 
                                                and make it into an awesome reality. Your 
                                                website should represent the best product 
                                                possible. And I am the man for the job.
                                            </h4>
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