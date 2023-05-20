import Logo from './components/Logo'
import Perguntas from './components/Perguntas'
import Footer from './components/Footer'
import styled from 'styled-components'

export default function App() {

  return (
    <Container>
      <Menu_box>

        <Logo />

        <Perguntas />

        <Footer />

      </Menu_box>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  justify-content:center;
  align-items:center;
`

const Menu_box = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px;
  max-height: 667px;
  background-color:red;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  align-items:center;

`