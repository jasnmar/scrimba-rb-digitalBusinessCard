import "./Main.css"
import emailicon from "../../assets/Email.png"
import inicon from "../../assets/LinkedIn.png"


function Main() {
    return (
        <main>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <a href="#">laurasmith.website</a>
            <div className="contact">
                <button className="btn email"><img className="btn-icon" src={emailicon}></img>Email</button>
                <button className="btn linkedin"><img className="btn-icon" src={inicon}></img>LinkedIn</button>
            </div>
            <div className="paragraphs">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}

export default Main