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

const Container_rolling = styled.div`
    overflow-y:scroll;
    height:460px;
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

const Question = styled.li`
    background-color:#FFFFFF;
    border-radius:5px;
    width:300px;
    height:65px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 0px 0px 25px 0px ;
    box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.15);
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