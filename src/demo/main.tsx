import React from "react"
import ReactDOM from "react-dom/client"
import "the-new-css-reset/css/reset.css"
import "./styles/global.css"
import "./styles/grid.css"
import Theme from "./Theme"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
)
