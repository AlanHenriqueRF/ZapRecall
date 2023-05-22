import styled from "styled-components"
import deck from "../Deck" 

export default function Footer({contagem}){
    return (
        <Conclusionbar>
            <h3>{contagem}/{deck.length} CONCLUÍDOS</h3>
        </Conclusionbar>
    )
}

const Conclusionbar = styled.div`
    height:10.49%;
    width:100%;
    background-color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    h3{
        font-family: 'Recursive', sans-serif;
        font-size:18px;
        font-weight:400;
        color: #333333;
    }
`