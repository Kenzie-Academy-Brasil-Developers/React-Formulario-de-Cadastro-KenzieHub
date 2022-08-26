import styled, {createGlobalStyle, css} from 'styled-components';

export const Global = createGlobalStyle`
    body {
        background: #121214;
        display: flex;
        max-width: 100%;
        overflow-x: hidden;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 800px;
    align-items: center;

    background: #212529;
    height:850px;
    width: 400px;
    padding-bottom: 30px;
    
    label{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        color: #ffff;
    }

    input{
        margin-top: 5px;
        width: 329.93px;
        height: 48px;
        background: #343B41;
        border: 1.2182px solid #343B41;
        border-radius: 4px;
        color: #ffff;
    }

    h3{
        color: #ffff;
        font-weight: 700;
        font-size: 18px;
        margin-top: 40px
    }

    select{
        margin-top: 5px;
        width: 329.93px;
        height: 48px;
        background: #343B41;
        border: 1.2182px solid #343B41;
        border-radius: 4px;
        color:  #868E96;
    }

    button{
        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        width: 329.93px;
        height: 48px;
        color: #ffff;
        font-weight: 500;
        font-size: 16px;
        margin-top: 30px;
        cursor: pointer;
    }

    option{
        color:  #868E96
    }

    p{
        color: #868E96;
        font-weight: 400;
        font-size: 12px;
    }
    span{
        color:#ff0000;
    }

    .cadastrar{
        background:#868E96
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        margin-left: 230px;
        align-items: center;
        margin-right: 220px;

        background: #212529;
        height:850px;
        width: 400px;
        padding-bottom: 30px;
}
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:  580px;
    margin-top: 50px;

    h1{
        margin-left: 215px;
        color: #FF577F;
    }

    button{
        margin-left: 165px;
        width: 67.49px;
        height: 40.11px;
        background: #212529;
        border-radius: 4px;
        border-style:none;
        color: #ffff;
        cursor: pointer;

    }

    @media (max-width: 600px) {
        margin-left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
       
        h1{
            margin-left: 10px;
        }
    }
`

export const DivH1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:  580px;
    margin-top: 50px;

    h1{
        margin-left: 215px;
        color: #FF577F;
    }


    @media (max-width: 600px) {
        margin-left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    
        h1{
            margin-left: 20px;
        }
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 800px;
    align-items: center;

    background: #212529;
    height: 500px;
    width: 400px;
    padding-bottom: 30px;

    label{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        color: #ffff;
    }

    input{
        margin-top: 5px;
        width: 329.93px;
        height: 48px;
        background: #343B41;
        border: 1.2182px solid #343B41;
        border-radius: 4px;
        color: #ffff;
    }

    h3{
        color: #ffff;
        font-weight: 700;
        font-size: 18px;
        margin-top: 40px
    }

    button{
        background: #FF577F;
        border-style:none;
        border-radius: 4px;
        width: 329.93px;
        height: 48px;
        color: #ffff;
        font-weight: 500;
        font-size: 16px;
        margin-top: 10px;
        cursor: pointer;
    }

    p{
        color: #868E96;
        font-weight: 400;
        font-size: 12px;
    }
    span{
        color:#ff0000;
    }

    .cadastrar{
        background:#868E96
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        margin-left: 230px;
        align-items: center;
        margin-right: 220px;

        background: #212529;
        height:500px;
        width: 400px;
        padding-bottom: 30px;
}
`

export const DivDashboard = styled.div`
    
    display: flex;
    align-itens: center;
    flex-direction: center;
    justify-content: space-around;
    width: 1920px;

    h1{
        margin-left: 25px;
        color: #FF577F;
    }

    button{
        width: 55.49px;
        height: 32px;
        background: #212529;
        border-radius: 4px;
        color:#ffff;
        margin-top: 30px;
        border-style:none;
        cursor: pointer;
    }

    p{
     color: #ffff
    }

    span{
        color: #868E96;
        line-height: 50px;
    }

    @media (max-width: 600px) {
        display: flex;
        margin-rigth: 0px;
        align-itens: center;
        flex-direction: center;
        justify-content: flex-start;
        width: 600px;
    

        h1{
            margin-right: 400px;
            color: #FF577F;
            font-size: 18px;
    }
    button{
        width: 40px;
        height: 29px;
        background: #212529;
        border-radius: 4px;
        color:#ffff;
        margin-top: 10px;
        border-style:none;
        cursor: pointer;
        font-size: 12px
    }

`
export const DivSpan = styled.div`
    margin-left 290px;
    margin-top 50px;
    color:#ffff;
    
    @media (max-width: 600px) {
        display:block;
        align-itens: center;
        flex-direction: center;
        margin-left: 10px;
        font-size 12px;
     
`

export const DivHr = styled.div`
    hr{
        height: 1px;
        background-color: #212529;
        border: none;
    }
    @media (max-width: 600px){
        width: 650px
    }
`
export const DivUser = styled.div`
    display: flex;
    align-itens: center;
    flex-direction: center;
    justify-content: space-around;
    width: 1920px;

    p{
        color: #ffff
    }

    span{
        color: #868E96;
        line-height: 50px;
    }

    @media (max-width: 600px) {
        display:block;
        width: 400px;
        margin-left: 10px;

    }
`
export const DivAbsolute = styled.div`
    position: absolute;
`
export const Modal = styled.div`
    background: #212529;
    display: flex;
    flex-direction: column;
    width: 369px;
    height: 200px;
    margin-left: 800px;


    
    div{
        display: flex;
        align-itens: center;
        justify-content:center;
        width: 369px;
        height: 300px;
        background: #343B41
        margin-bottom: 0px;
    }

    h3{
        color: #F8F9FA;
    }
    
    button{
        background:#343B41;
        border-style:none;
        margin-left: 120px;
        margin-top: 0px;
        cursor: pointer;
        color: #868E96;
    }
`


export const ModalForm = styled.form`
    display: flex;
    align-itens: center;
    justify-content:center;
    background: #212529;


    button{
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        color: #FFFFFF;
        width: 324px;
        height: 48px;
        margin-left: 20px;
        margin-top: 20px;
        font-size: 16px;
    }

`

export const DivModal = styled.div`
        display:flex;
        flex-direction: column;
        width: 400px;
        height: 400px;
        

        label{
            margin-bottom: 10px;
            font-size: 12px;
            color: #F8F9FA;
            margin-left: 20px;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        input{
            width: 329.93px;
            height: 48px;
            background: #343B41;
            border: 1.2182px solid #F8F9FA;
            border-radius: 4px;
            color:#ffff;
            margin-left: 0px;
            font-size: 16px;
            
        }

        select{
            width: 338.93px;
            height: 50px;
            background: #343B41;
            border: 1.2182px solid #F8F9FA;
            border-radius: 4px;
            color:#ffff;
            margin-left: 0px;
            font-size: 16px;
            
        }
        span{
            color:#F10;
            margin-left: 110px;
        }
`

export const DivTecnology = styled.div`
        background:#343B41;
`

export const DivTech = styled.div`
    display: flex;
    align-itens: center;
    flex-direction: center;
    justify-content: space-around;
    width: 1820px;
    color: #ffff;

    button {
        width: 40px;
        height: 29px;
        background: #212529;
        border-radius: 4px;
        color:#ffff;
        margin-top: 10px;
        border-style:none;
        cursor: pointer;
        font-size: 24px
    }
`

export const DivCard = styled.div`
    background: #343B41;
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 780px;
    height: 416px;
    margin-left: 565px;
    margin-top: 50px;
    overflow-y: scroll;
    
    
    div{
        marigin-top:50px;
        background: #121214;
        display:flex;
        align-items: center;
        width: 732px;
        height: 49px;
        margin-bottom: 5px;
        margin-top: 20px;
        border-radius: 4px;
    }

    h3{
        color: #FFFFFF;
        margin-left: 20px;
        font-size: 14.2123px;
    }
    span {
        color: #868E96;
        margin-top: 0px;
        margin-left: auto;
        font-size: 12.182px;

    }
    button{
        background: #121214;
        border-style:none;
        color:#ffffff;
        margin-top: 3px;
        cursor:pointer;
    }
    h2{
        color:#ffffff;
    }
`