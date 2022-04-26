import react from "react"
import "./App.css";
import logo from "./logo.svg";

function Header(){
    return (
        <>
            <div className="headerbody">
                <div>
                    <h1 className="funfact">Fun facts about React</h1>
                    <ul className="list">
                        <li>Was first release in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well 100k start on Github</li>
                        <li>Is maintained by Facebook</li>
                        <li>Power thousand of enterprise app, including mobile apps</li>
                    </ul>
                </div>
                <div>
                    <img src={logo} width="600px"/>
                </div>
            </div>

        </>
    )
}

export {Header}