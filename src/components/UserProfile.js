import React from "react"
import "../App.css"
import Logo from "../assets/Logo.jpeg"

export const UserProfile = (props) => (
    <div className="leftside">
        <div className="leftside--container">
            <div>
                <img src={Logo} alt="user profile" with={100} height={100} />
            </div>
            <div className="leftside--name--large">Hi, I'm Avinash!</div>
            <div className="leftside--position--large">Full Stack Developer</div>
            <div className="media--container">
                <div className="media--container--item">
                    <i className="fa fa-envelope fa-2x" />
                </div>
                <div className="media--container--item">
                    <i className="fa fa-twitter fa-2x" />
                </div>
                <div className="media--container--item">
                    <i className="fa fa-github fa-2x" />
                </div>
                <div className="media--container--item">
                    <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
)