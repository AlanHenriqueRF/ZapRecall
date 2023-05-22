import Logo from './components/Logo'
import Perguntas from './components/perguntas/Perguntas'
import Footer from './components/Footer'
import styled from 'styled-components'
import { useState } from 'react'

export default function App() {
  const [contagem,setContagem] = useState(0)
  // console.log(setContagem)
  return (
    <Container>
      <Menu_box>

        <Logo />

        <Perguntas contagem = {contagem} setContagem ={setContagem}/>

        <Footer contagem = {contagem} />

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
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;

`