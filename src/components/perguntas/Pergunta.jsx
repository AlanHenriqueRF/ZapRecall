import seta from '../../assets/seta_play.png'
import styled from 'styled-components'

export default function Pergunta({pergunta,index}) {
    function aparecepergunta(){
        alert(`oi ${index}`)
    }
    return (
        <Question>
            <h2>Pergunta {index+1}</h2>
            <img src={seta} onClick={()=>aparecepergunta()} alt="seta" />
        </Question>
    )
}

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