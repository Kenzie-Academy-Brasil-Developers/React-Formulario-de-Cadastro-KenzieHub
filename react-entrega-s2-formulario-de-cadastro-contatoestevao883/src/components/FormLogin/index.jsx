import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginForm, DivH1 } from '../../styles/Global/global';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../conxtexts/AuthContext'




const FormLogin= () => {
    const navigate = useNavigate();

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
    
    const { signIn } = useContext(AuthContext);

    return (
        <>
            <DivH1>
                <h1>Kenzie Hub</h1>
            </DivH1>
            <LoginForm onSubmit={handleSubmit(signIn)}>
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
                
                <button className="cadastrar" onClick={() => navigate("/register")}>Cadastre-se</button>
            </LoginForm>
        </>
    )
}

export default FormLogin;