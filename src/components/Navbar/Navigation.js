import React from "react";
import {NavLink} from "react-router-dom";

export const Navigation = () =>
    (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>RICK & MORTY</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                to='/chars'
                            >Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                to='/episodes'
                            >Episodes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                to='/locations'
                            >Locations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                to='/watch-list'
                            >My watch list
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )

