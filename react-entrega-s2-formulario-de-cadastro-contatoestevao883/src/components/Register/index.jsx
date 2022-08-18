import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Div } from '../../styles/Global/global'
import { useHistory } from 'react-router-dom'
import axios from 'axios'



const Register = () => {
    const history = useHistory();
    

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        
        email: yup.string().required("Email obrigatório"),
        
        password: yup.string().required("Senha obrigatória").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
            "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"),
        
            confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password"), null], "As senhas precisam ser idênticas"),
       
            bio: yup.string().required("Campo obrigatório"),

            contact: yup.string().required("Campo obrigatório"),

            course_module: yup.string().required("Campo obrigatório")

    })

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm({
        resolver: yupResolver(formSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
        
        axios.post("https://kenziehub.herokuapp.com/users", data)
            .then((response) => {
            console.log(response)
            })
            .catch((error) => console.log(error))
            history.push("/")
        }

    return (
        <>
            <Div>
                <h1>Kenzie Hub</h1>
                <button onClick={() => history.push("/")}>Voltar</button>
            </Div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3>Crie sua conta</h3>
                <p>Rapido e grátis, vamos nessa</p>
                <label>Nome
                    <input type="text" placeholder='Digite aqui seu nome' {...register("name")}/>
                </label>
                <span>{errors.name?.message}</span>
                
                <label>Email
                    <input type="email" placeholder='Digite aqui seu email' {...register("email")}/>
                </label>
                <span>{errors.email?.message}</span>

                <label>Senha
                    <input type="password" placeholder='Digite aqui sua senha' {...register("password")} />
                </label>
                <span>{errors.password?.message}</span>

                <label>Confirmar Senha
                    <input type="password" placeholder='Digite aqui sua senha' {...register("confirmPassword")} />
                </label>
                <span>{errors.confirmPassword?.message}</span>
                <label>Bio
                    <input type="text" placeholder='Fale sobre você' {...register("bio")} />
                </label>
                <span>{errors.bio?.message}</span>
                <label>Contato 
                    <input type="text" placeholder='Opção de contato' {...register("contact")} />
                </label>
                <span>{errors.contact?.message}</span>
                <label>Selecionar módulo
                    <select {...register("course_module")}>
                        <option>Primeiro módulo: Introdução ao Frontend</option>
                        <option>Segundo módulo: Frontend Avançado</option>
                        <option>Terceiro módulo: Introdução ao Backend</option>
                        <option>Quarto módulo: Backend Avançado</option>
                    </select>
                </label>
                <span>{errors.course_module?.message}</span>

                <button type="submit">Cadastrar</button>
            </Form>
        </>
    )
}

export default Register;