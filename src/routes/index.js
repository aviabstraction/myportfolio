import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HOME, BLOGS } from "./routes"
import { Home, Blogs } from "../screens"

export const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={BLOGS} component={Blogs} />
        </Switch>
    </BrowserRouter>
)