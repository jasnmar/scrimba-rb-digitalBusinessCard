import "./Headshot.css"
import headshot from "../../assets/Laura.png"

function Headshot() {
    return (
        <header>
            <img className="headshot" src={headshot}></img>
        </header>
        
    )
}

export default Headshot