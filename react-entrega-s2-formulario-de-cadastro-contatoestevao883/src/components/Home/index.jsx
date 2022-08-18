import { useHistory } from "react-router-dom";
import { DivDashboard, DivSpan, DivHr, DivUser } from "../../styles/Global/global";
const Home = () => {

    const user = window.localStorage.getItem("user")
    const history= useHistory()

    return(
        <>
            <DivHr>
                <DivDashboard>
                    <h1>Kenzie Hub</h1>
                    <button onClick={() => history.push("/")}>Sair</button>
                </DivDashboard>
                <hr />
                <DivUser>
                    <p>Olá, {user}</p>
                    <span> Primeiro módulo: Introdução ao Frontend</span>
                </DivUser>
                
                <hr />
                <DivSpan>
                    <h3>Que pena! Estamos em desevolvimento</h3>
                    <span>Nossa aplicação está em desevolvimento, em breve teremos novidades.</span>
                </DivSpan>
            </DivHr>
        </>
    )
}

export default Home;