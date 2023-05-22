import styled from 'styled-components'
import deck from '../../Deck'
import Pergunta from './Pergunta'

export default function Perguntas({contagem, setContagem}) {
    return (
        <Container_rolling>
            <Questions>

                {deck.map((pergunta, index) => <Pergunta key={index} contagem= {contagem} setContagem={setContagem} pergunta={pergunta} index={index} />)}
            </Questions>
        </Container_rolling>
    )
}

const Container_rolling = styled.div`
    overflow-y:scroll;
    height:68.97%;
    &::-webkit-scrollbar {
    width: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgb(174, 184, 184);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(109, 109, 109);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`

const Questions = styled.ul`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-right:12px;
`

