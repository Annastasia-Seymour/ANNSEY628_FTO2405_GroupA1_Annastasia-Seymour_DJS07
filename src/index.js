import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

//ReactDOM.createRoot(<App />, document.getElementById("root"))// changed render to createRoot updated React uses that instead of the .render method
//creates the root reminder render() was replaced by createRoot() for Reacts concurrent features
//root.render(<App />); //renders the App
ReactDOM.render(<App />, document.getElementById("root"))