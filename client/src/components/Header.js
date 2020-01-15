import React, { Component } from 'react'

const HeaderButton = (props) => <button className="hdr-btn flt-rgt orng hdn anime-visible delay-animation-10">{props.title}</button>
const Highlight = (props)=> <span className="neon">&nbsp;{props.text}&nbsp;</span>
const IntroContainer = (props) => {
    const animateClasses = props.index > 0 ? `hdn anime-visible delay-animation-${props.content.props.delay - 1}` : ""
    return <div className={`intro-cntnr ${animateClasses}`} onAnimationStart={props.onAnimationStart}>{props.content}{props.children}</div>
}
const IntroMessage = (props) => {
    return <span className={`intro-msg ${props.color} ${props.size} hdn anime-visible delay-animation-${props.delay}`}>{props.children}</span>
}
const generateIntroContainerFromMsgs = (contents, onAnimationStart) => {
    const generate = (index) => {
        if(index === contents.length){
            return
        }

        return <IntroContainer index={index} content={contents[index]} onAnimationStart={onAnimationStart}>
                    {generate(index + 1)}
                </IntroContainer>
    }

    return generate(0)
}

const IntroList = (props) => <ul className="intro-lst">{props.children}</ul>
const IntroItem = (props) => <li className={`intro-lst-itm ${props.color} hdn anime-visible delay-animation-${props.delay}`}>{props.text}</li>
const onAnimationStart = (e, onGotResponsiveIndentWidth) => {
    e.stopPropagation()
    const className = e.target.className
    if(className.includes("delay-animation-8") && className.includes("intro-cntnr")){
        onGotResponsiveIndentWidth(e.target.offsetLeft)
    }
}

class Header extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount = () => {
        const e = document.getElementsByClassName("intro-cntnr delay-animation-8")
        window.addEventListener("resize", () => {
            this.props.onGotResponsiveIndentWidth(e[0].offsetLeft)
            console.log(e[0].offsetLeft)
        })
    }

    render = () => {
        const contents = [
            <IntroMessage color="off-wht" size="f-size-md" delay={1}>
                hi! I am...
            </IntroMessage>,
            <IntroMessage color="off-wht" size="f-size-lg" delay={2}>
                Yevgeniy Skroznikov
            </IntroMessage>,
            <IntroMessage color="gry" size="f-size-md" delay={3}>
                I am a
                <Highlight text="javascript full stack web developer"/>
                that can take your website idea 
                and code a front-end and a back-end.
            </IntroMessage>,
            <IntroList delay={4}>
                <IntroItem color="off-wht" text="REACT" delay={4}/>
                <IntroItem color="off-wht" text="REDUX" delay={5}/>
                <IntroItem color="off-wht" text="EXPRESS" delay={6}/>
                <IntroItem color="off-wht" text="NODE" delay={7}/>
                <IntroItem color="off-wht" text="SQL" delay={8}/>
            </IntroList>,
            <IntroMessage color="gry" size="f-size-md" delay={9}>
                I will work close with you on your idea 
                and make it into an awesome reality. Your 
                website should represent the best product 
                possible. And I am the man for the job.
            </IntroMessage>
        ]

        return <div className="hdr bg-drkgry">
                    <HeaderButton title="Hire Me" delay={10} color="orng"/>
                    {generateIntroContainerFromMsgs(contents, (e) => onAnimationStart(e, this.props.onGotResponsiveIndentWidth))}
                </div>
    }
}

export default Header