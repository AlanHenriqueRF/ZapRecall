import logo_img from '../assets/logo.png'
import styled from 'styled-components'

export default function Logo() {
    return (
        <Logostyle>
            <img src={logo_img} alt="logo" />
            <h1>ZapRecall</h1>
        </Logostyle>
    )
}

const Logostyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:15px;
    margin-bottom:35px;
    img {
        width: 52px;
        height: 60px;
        margin-right:14px;
    }
    h1 {
        font-family: 'Righteous', cursive;
        color: #FFFFFF;
        font-size: 36px;
        font-weight: 400;
        text-align:center;
    }
    
`