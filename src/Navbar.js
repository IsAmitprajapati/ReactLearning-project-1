import logo from "./logo.svg";
import react from "react"
import "./App.css";

function Navbar(){
    return (
        <>
            <div className='Navbar'>
                <div className='logo'>
                    <img src={logo} className="logo-icon"/>
                     <h2>ReactFacts</h2>
                </div>
             <div className='nameProject'>
                 <p>React Course - Project 1</p>
            </div>
            </div>
        </>
    )
}

export {Navbar};