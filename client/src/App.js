import React     from 'react'
import { Route } from 'react-router-dom'
import './styles/Reset.css'
import './styles/App.css'

const App = () => <React.Fragment>
                    <div className="hdr bg-drkgry">
                        <button className="hdr-btn flt-rgt orng hdn anime-visible delay-animation-11">Hire Me</button>
                        <div className="intro-cntnr">
                            <h4 className="intro-msg off-wht hdn anime-visible delay-animation-1">
                                hi! I am...
                            </h4>
                            <div className="intro-cntnr hdn anime-visible delay-animation-1">
                                <h1 className="intro-msg off-wht hdn anime-visible delay-animation-2">
                                    Yevgeniy Skroznikov
                                </h1>
                                <div className="intro-cntnr hdn anime-visible delay-animation-2">
                                    <h4 className="intro-msg gry hdn anime-visible delay-animation-3">
                                        I am a
                                        <span className="neon">
                                            &nbsp;javascript full stack web developer&nbsp;
                                        </span>
                                        that can take a website idea 
                                        and code a front-end and a back-end.
                                    </h4>
                                    <div className="intro-cntnr hdn anime-visible delay-animation-3">
                                        <ul className="intro-lst">
                                            <li className="intro-lst-itm off-wht hdn anime-visible delay-animation-4">REACT</li>
                                            <li className="intro-lst-itm off-wht hdn anime-visible delay-animation-5">REDUX</li>
                                            <li className="intro-lst-itm off-wht hdn anime-visible delay-animation-6">EXPRESS</li>
                                            <li className="intro-lst-itm off-wht hdn anime-visible delay-animation-7">NODE</li>
                                            <li className="intro-lst-itm off-wht hdn anime-visible delay-animation-8">SQL</li>
                                        </ul>
                                        <div className="intro-cntnr hdn anime-visible delay-animation-4">
                                            <h4 className="intro-msg gry hdn anime-visible delay-animation-9">
                                                I will work close with you on your idea 
                                                and make it into an awesome reality. Your 
                                                website should represent the best product 
                                                possible. And I am the man for the job.
                                            </h4>
                                            <div className="intro-cntnr hdn anime-visible delay-animation-10"/>
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