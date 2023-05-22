import { useState } from 'react'
import seta from '../../assets/seta_play.png'
import styled from 'styled-components'
import virar from '../../assets/seta_virar.png'
import incorreto from '../../assets/icone_erro.png'
import parcialmente from '../../assets/icone_quase.png'
import correto from '../../assets/icone_certo.png'

export default function Pergunta({ pergunta, index ,setContagem,contagem}) {
    
    const imagens = [incorreto, parcialmente, correto]

    let [test,setTest] = useState("play-btn")
    
    let [tamanho,setTamanho] = useState('20px');
    let [color,setColor] = useState('#333333')
    let [decoracao,setDecoracao] = useState('normal')
    let [direcao,setDirecao] = useState('normal')
    let [espaco,setEspaco] = useState('space-between')


    const [indice, setIndice] = useState(-1)
    const [aparece, setAparece] = useState([true, false]);
    const [foto, setFoto] = useState(seta)

    function novo_array() {
        const novo_aparece = [...aparece]
        console.log(novo_aparece)
        if (novo_aparece[0] === true) {
            return [!(novo_aparece[0]), novo_aparece[1]]
        }
        else if (novo_aparece[1] === false) {
            return [(novo_aparece[0]), !(novo_aparece[1])]
        }
    }

    function aparecepergunta(imagem) {
        if (imagem === seta || imagem === virar) {
            imagem===seta ? setTest("turn-btn"):setTest("play-btn")
            if (aparece[0] === false && aparece[1] === false) {
                setDirecao('column')
                setEspaco('space-evenly')
            } else {
                setDirecao('normal')
                setEspaco('space-between')
            }

            setColor('#333333')
            setDecoracao('normal')
            setTamanho('23px');
            const novo_aparece = novo_array()
            const novo_foto = novo_aparece[0] ? seta : (novo_aparece[1] ? false : virar);
            setFoto(novo_foto)
            setAparece(novo_aparece)
        }

    }
    console.log(test)
    function verSeErrou() {
        const novo_indice = 0;
        const novo_aparece = [true, false]
        setDirecao('normal')
        setEspaco('space-between')
        const nova_foto = imagens[novo_indice]
        setColor('#FF3030')
        setDecoracao('line-through')
        setFoto(nova_foto)
        setAparece(novo_aparece)
        setIndice(novo_indice)
        setContagem(contagem+1)
        setTest("no-icon")

    }

    function verSeQuase() {
        const novo_indice = 1;
        setDirecao('normal')
        setEspaco('space-between')
        const novo_aparece = [true, false]
        const nova_foto = imagens[novo_indice]
        setColor('#FF922E')
        setDecoracao('line-through')
        setFoto(nova_foto)
        setAparece(novo_aparece)
        setIndice(novo_indice)
        setContagem(contagem+1)
        setTest("partial-icon")
    }

    function verSeAcertou() {
        const novo_indice = 2;
        setDirecao('normal')
        setEspaco('space-between')
        const novo_aparece = [true, false]
        const nova_foto = imagens[novo_indice]
        setColor('#2FBE34')
        setDecoracao('line-through')
        setFoto(nova_foto)
        setAparece(novo_aparece)
        setIndice(novo_indice)
        setContagem(contagem+1)
        setTest("zap-icon")
    }
    return (
        <Question data-test="flashcard-text" aparece={aparece} tamanho={tamanho} color={color} decoracao={decoracao} direcao={direcao} espaco={espaco} >

            <h2>{aparece[0] ? `Pergunta ${index + 1}` : (aparece[1] ? pergunta.answer : pergunta.question)}</h2>

            {foto ? <img src={indice === -1 ? foto : imagens[indice]} onClick={() => aparecepergunta(foto)} alt="seta" data-test={test}/> : <Botoes>
                <button onClick={verSeErrou} data-test="no-btn">Não lembrei</button> 
                <button onClick={verSeQuase} data-test="partial-btn">Quase não lembrei</button> 
                <button onClick={verSeAcertou} data-test="zap-btn">Zap!</button></Botoes>}

        </Question>
    )
}

const Question = styled.li`
    background-color:${props => props.aparece[0] ? '#FFFFFF' : '#FFFFD4'};
    border-radius:5px;
    width:300px;
    height:${props => props.aparece[0] ? '65px' : '131px'};
    display: flex;
    flex-direction: ${props => props.direcao};
    justify-content: ${props => props.espaco};
    align-content: space-between;
    align-items:${props => props.aparece[0] ? 'center' : ''};
    margin: 0px 0px 25px 0px;
    box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.15);
    h2{
        font-family: 'Recursive', sans-serif;
        font-size: ${props => props.aparece[0] ? '16px' : '18px'};
        font-weight: ${props => props.aparece[0] ? '700' : '400'};
        color: ${props => props.color};
        text-decoration: ${props => props.decoracao}; 
        margin-left:15px;
        margin-top:${props => props.aparece[0] ? '0px' : '15px'};
    }

    img{
        color:#333333;
        width: ${props => props.aparece[0] ? props.tamanho : '30px'};
        height: ${props => props.aparece[0] ? '23px' : '20px'};
        margin-right: 22px;
        margin-top:${props => props.aparece[0] ? '0px' : '105px'};
    }
    
`

const Botoes = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    button{
        border-radius:5px;
        width:86px;
        height:38px;
        font-family: 'Recursive', sans-serif;
        font-weight:400;
        font-size:12px;
        color:#FFFFFF;
        border:none;
    }

    & :nth-child(1){
        background-color:#FF3030;
    }

    & :nth-child(2){
        background-color:#FF922E;
    }

    & :nth-child(3){
        background-color:#2FBE34;
    }
`