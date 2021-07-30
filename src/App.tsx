import "./styles.css"
import IMG from "./react.png"
import LOGO from "./logo.svg"
import { ClickCounter } from "./ClickCounter"

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMG} alt="react-logo" />
      <img src={LOGO} alt="react-logo" width="300" />
      <ClickCounter />
    </>
  )
}
