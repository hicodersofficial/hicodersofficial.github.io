import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useReducer } from "react";
import AppContext, { initialAppState, appReducer } from "./shared/AppContext";
import Home from "./components/home/Home";
import NotFound404 from "./components/notFound/404NotFound";
import Nav from "./components/header/Nav";
import "./App.scss";

export default function App() {
    const { app, dispatchApp } = useReducer(initialAppState, appReducer);
    return (
        <AppContext.Provider
            value={{
                app,
                dispatchApp,
            }}
        >
            <Router>
                <Nav />
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route component={NotFound404} />
                </Switch>
            </Router>
        </AppContext.Provider>
    );
}
