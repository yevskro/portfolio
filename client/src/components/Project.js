
const Header = (props) => <div className="prj-hdr f-size-lg orng">{props.title}</div>
const Summary = (props) => <p className="prj-txt">{props.text}</p>
const Window = (props) => <div className="wnd">
                            <WindowBar/>
                            <WindowImage/>
                        </div>
const WindowBar = (props) => <div className="wnd-bar">
                            <BarCircle color="bg-red"/>
                            <BarCircle color="bg-orange"/>
                            <BarCircle color="bg-green"/>
                        </div>
const BarCircle = (props) => <span className={`bar-circle ${props.color}`}></span>
const WindowImage = (props) => <React.Fragment/>

const Project = (props) => {
    // props.header props.text props.image
    return <div className="prj anime-shift-from-right delay-animation-9">
                <Header title={props.header}/>
                <Summary text={props.text}/>
                <Window image={props.image}/>
            </div>
}