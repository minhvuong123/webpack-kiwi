import './style.css'
import Logo from './logo.png'
import LogoSVG from './icons8-react.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const name = 'kiwi'
  return (
    <>
      <h1>
        React App - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={Logo} alt="" />
      <img src={LogoSVG} alt="" />
      <ClickCounter />
    </>
  )
}
