import React     from 'react'
import { Route } from 'react-router-dom'
import './styles/Reset.css'
import './styles/App.css'

const App = () => <div className="app">
                    <div className="hdr bg-drkgry">
                        <button className="hdr-btn flt-rgt orng hdn anime-visible delay-animation-10">Hire Me</button>
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
                                            <div className="intro-cntnr js-lst-intr-cntnr hdn anime-visible delay-animation-9"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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