import seta from '../assets/seta_play.png'
import styled from 'styled-components'

export default function Perguntas() {
    return (
        <Container_rolling>
        <Questions>
            <Question>
                <h2>Pergunta 1</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 2</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 3</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
            <Question>
                <h2>Pergunta 4</h2>
                <img src={seta} alt="seta" />
            </Question>
        </Questions>
        </Container_rolling>
    )
}

const Container_rolling= styled.div`
    overflow:scroll;
    height:460px;
    
    `

const Questions = styled.ul`
    display: flex;
    flex-direction:column;
    align-items:center;
    overflow:scroll;
`

const Question = styled.li`
    background-color:#FFFFFF;
    border-radius:5px;
    width:300px;
    height:65px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 13px 0px;
    h2{
        font-family: 'Recursive', sans-serif;
        font-size:16px;
        font-weight:700;
        color: #333333;
        margin-left:15px;
    }

    img{
        color:#333333;
        width:20px;
        height:23px;
        margin-right:22px;
    }
`