import { useContext, useState } from "react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { DivDashboard, DivHr, DivUser, Modal, ModalForm, DivModal, DivTecnology, DivTech, DivCard, DivAbsolute } from "../../styles/Global/global";
import { AuthContext } from "../../conxtexts/AuthContext";
import api from "../../services/api";
import { ITechs } from "../../conxtexts/AuthContext";
import  { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface IRegisterTech{
  title: string
  status: string
  created_at: Date
  id: string
  updated_at: Date
  user:  {}
}


export interface ITechCreateData{
  created_at: Date
  id: string
  status: string
  title: string
  updated_at: Date
  user: {}
}

export interface ITechResponse{
  title: string
  status: string
  data: string
  techs: ITechs[]
  created_at: string | Number
  id: string
  updated_at: Date
  user:  {}
}


const Home = () => {
    const username = window.localStorage.getItem("user")
    const [modal, setModal] = useState(false)
    const { logout } = useContext(AuthContext)
    const { techs, setTechs } = useContext(AuthContext)

    const course = window.localStorage.getItem("course")
    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        
        status: yup.string().required("Campo obrigatório"),
    })
        
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm<IRegisterTech>({
        resolver: yupResolver(formSchema),
    })

    const techRegister = (data: ITechCreateData) => {
     
               
           api.post<ITechResponse>("/users/techs",  data)
        .then((response) => {
            console.log(response)
            toast.success('Tecnologia cadastrada com sucesso!', {position: toast.POSITION.TOP_RIGHT})
          setModal(false) 
          setTechs([...techs, response.data])
        
        })
        .catch((error) =>{
          console.error(error)
          toast.error('Erro ao cadastrar tecnologia.', {position: toast.POSITION.TOP_RIGHT})
        })
    
      }

      const techDelete = (tech_id: any) => {
        console.log(tech_id)
        api.delete(`/users/techs/${tech_id}`, tech_id)
        .then((response) => {
          console.log(response)
          const newList = techs.filter((tech) => {
            return tech.id !== tech_id
          })
          setTechs(newList)
          toast.success('Tecnologia deletada com sucesso!', {position: toast.POSITION.TOP_RIGHT})
        })
        .catch((error) => {
          console.error(error)
          toast.error('Erro ao deletar tecnologia.', {position: toast.POSITION.TOP_RIGHT})
        })
      }
      


    return(
        <>
            <DivHr>
                <DivDashboard>
                    <h1>Kenzie Hub</h1>
                    <button onClick={() => logout()}>Sair</button>
                </DivDashboard>
                <hr />
                <DivUser>
                    <p>Olá, {username}</p>
                    <span> {course}</span>
                </DivUser>
                
                <hr />

            </DivHr>
            <DivTech>
                <h3>Tecnolgias</h3>
                <button onClick={() => setModal(true)}>+</button>
            </DivTech>
            <DivAbsolute>
                {modal && (
                    <Modal>
                        <DivTecnology>
                            <h3>Cadastrar Tecnologia</h3>
                            <button onClick={() => setModal(false)}>X</button>
                        </DivTecnology>
                        
                        <ModalForm onSubmit={handleSubmit(techRegister)}>
                            <DivModal>
                                <label>Nome
                                    <input type="text" {...register("title")} />
                                </label>
                                <span>{errors.title?.message}</span>
                                <label>Selecionar status
                                    <select {...register("status")}>
                                        <option>Iniciante</option>
                                        <option>Intermediário</option>
                                        <option>Avançado</option>
                                    </select>
                                </label>
                                <span>{errors.status?.message}</span>
                                <button type="submit">Cadastrar Tecnologia</button>
                            </DivModal>
                        </ModalForm>
                        
                    </Modal>
                )}
                </DivAbsolute>
                <DivCard>
                 
                        {techs.length === 0 ?  ( 
                        
                            <h2>Você não possui nenhuma tecnologia.</h2>
          
                    ) : (
                    techs.map((tech, index)  => {
                            return(
                                <div key={index}>
                                    <h3>{tech.title}</h3>
                                    <span>{tech.status}</span>
                                    <button onClick={() => techDelete(tech.id)}>X</button>
                                </div> 
                             )
                    
                        }))}
                </DivCard>
        </>
        
    )
}

export default Home;