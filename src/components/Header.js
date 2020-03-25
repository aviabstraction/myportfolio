import React from "react"
import { NavLink } from "react-router-dom"
import "../App.css"

export const Header = (props) => (
    <div className="header">
        <div className="header--text">
            <NavLink to="/">
                <span>
                    About
             </span>
            </NavLink>
            <span> / </span>
            <NavLink to="/blogs">
                <span>
                    Blogs
            </span>
            </NavLink>
        </div>
    </div>
);