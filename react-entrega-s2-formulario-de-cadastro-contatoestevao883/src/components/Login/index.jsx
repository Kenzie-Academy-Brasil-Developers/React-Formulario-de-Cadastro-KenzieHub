import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginForm, DivH1 } from '../../styles/Global/global';
import { useHistory } from 'react-router-dom';
import axios from 'axios';




const Login = () => {
    const history = useHistory();

    const formSchema = yup.object().shape({
        email: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")
    })

    const{ 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm({
        resolver: yupResolver(formSchema),
    })

    const signUp = (data) => {
        axios.post("https://kenziehub.herokuapp.com/sessions", data)
            .then((response) =>  {
                console.log(response)
                window.localStorage.clear()
                window.localStorage.setItem("token", response.data.token)
                window.localStorage.setItem("userId", response.data.user.id)
                window.localStorage.setItem("user", response.data.user.name)
                history.push(`/home`)
        })
        .catch((error) => error)
    
    }

    return (
        <>
            <DivH1>
                <h1>Kenzie Hub</h1>
            </DivH1>
            <LoginForm onSubmit={handleSubmit(signUp)}>
                <h3>Login</h3> 
                <label>Email
                    <input type="email" placeholder='Digite aqui seu email' name="email" {...register("email")}/>
                </label>
                <span>{errors.email?.message}</span>

                <label>Senha
                    <input type="password" placeholder='Digite aqui sua senha' name="password" {...register("password")} />
                </label>
                <span>{errors.password?.message}</span>

                <button type="submit">Entrar</button>
                
                <p>Ainda não possui uma conta?</p>
                
                <button className="cadastrar" onClick={() => history.push("/register")}>Cadastre-se</button>
            </LoginForm>
        </>
    )
}

export default Login;