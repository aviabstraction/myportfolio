import React from "react"
import { UserProfile, Header } from "../components"
import "../App.css"


export const Home = (props) => {
    return (
        <div className="main">
            <Header />
            <div className="main--container">
                <UserProfile />
                <div className="rightside bar">
                    <section id="who">
                        <h3 className="headers">Who?</h3>
                        <ul>
                            <li>
                                Web Developer
                            </li>
                            <li>
                                Tech Enthusiast
                            </li>
                            <li>
                                Active Learner
                            </li>
                        </ul>
                    </section>
                    <section id="projects">
                        <h3 className="headers">Project I've worked on</h3>
                        <ul>
                            <li>
                                DPHPM
                                <div>An App which provides Sanitary Certificate for schools and college</div>
                            </li>
                            <li>
                                Pinecrow
                                <div>An App which assigns projects & tasks to a particular member or team</div>

                            </li>
                            <li>
                                Stylori
                                <div>An e-commerce Application</div>
                            </li>
                        </ul>
                    </section>
                    <section id="devstack">
                        <h3 className="headers">Current Dev Stack</h3>
                        <ul>
                            <li>
                                HTML5/CSS3
                            </li>
                            <li>
                                Material-UI/ReactStrap(Bootstrap)
                            </li>
                            <li>
                                Javascript - ReactJS
                            </li>
                            <li>
                                ApolloGraphQL
                            </li>
                            <li>
                                NodeJS / ExpressJS
                            </li>
                            <li>
                                Sequelize(ORM)
                            </li>
                            <li>
                                Postgres
                            </li>

                        </ul>
                    </section>
                    <section id="technologies">
                        <h3 className="headers">Technologies I've worked on</h3>
                        <ul>
                            <li>
                                Sample
                            </li>
                        </ul>
                    </section>
                    <section id="achievements">
                        <h3 >Some Achievements</h3>
                        <ul>
                            <li>
                                6kyu holder in codewards
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}