import "./Footer.css"
import fbIcon from "../../assets/FacebookIcon.png"
import ghIcon from "../../assets/GitHubIcon.png"
import twIcon from "../../assets/TwitterIcon.png"
import inIcon from "../../assets/InstagramIcon.png"

function Footer() {
    return (
        <footer>
            <div className="footer-contain">

                <a href="#" target="_blank"><img src={twIcon}></img></a>
                <a href="#" target="_blank"><img src={fbIcon}></img></a>
                <a href="#" target="_blank"><img src={inIcon}></img></a>
                <a href="#" target="_blank"><img src={ghIcon}></img></a>
            </div>
        </footer>
        
    )
}

export default Footer