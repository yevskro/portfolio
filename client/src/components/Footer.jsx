import React from 'react'

const Indent            = (props) => <div className="indent" style={{width: props.width}}/>
const Email             = (props) => <span className="email gry">{props.email}</span>
const FooterHireButton  = (props) => <a className="ftr-btn" href={`mailto:${props.email}?Subject=Hello Yevgeniy`}>{props.text}</a>

const Footer = (props) => {
    return <div className="ftr bg-drkgry">
                <Indent width={props.indentWidth}/>
                <FooterHireButton text="Hire Me" email="yevskro@gmail.com"/>
                <Email email={"yevskro@gmail.com"}/>
            </div>
}

export default Footer
