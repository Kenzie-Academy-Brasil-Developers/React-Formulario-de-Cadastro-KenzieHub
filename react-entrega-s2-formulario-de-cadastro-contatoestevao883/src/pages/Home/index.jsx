import { useContext, useState } from "react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { DivDashboard, DivHr, DivUser, Modal, ModalForm, DivModal, DivTecnology, DivTech, DivCard, DivAbsolute } from "../../styles/Global/global";
import { AuthContext } from "../../conxtexts/AuthContext";
import api from "../../services/api";
import { ToastContext } from "../../conxtexts/ToastContext";


const Home = () => {
    const [modal, setModal] = useState(false)
    const { logout, user} = useContext(AuthContext)
    const {  addToast } = useContext(ToastContext)
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
        } = useForm({
        resolver: yupResolver(formSchema),
    })

    const techRegister = (data) => {
               
           api.post("/users/techs",  data)
        .then((response) => {
            console.log(response)
          addToast({
            type: 'success',
            title: 'Tecnologia criada com sucesso',
          })
          setModal(false)
        })
        .catch((error) =>{
          console.error(error)
            addToast({
              type: 'success',
              title: 'Tecnologia inválida',
            });
        })
    
      }

      const techDelete = (tech_id) => {
        api.delete(`/users/techs/${tech_id}`, tech_id)
        .then((response) => {
          console.log(response)
          const newList = techs.filter((tech) => {
            return tech.id !== tech_id
          })
          setTechs(newList)
        })
        .catch((error) => {
          console.error(error)
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
                    <p>Olá, {user}</p>
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
                        {techs.length < 1 ? ( 
                           <h2>Você não possui nenhuma tecnologia.</h2>
                    ) : (
                    techs?.map((tech, index)  => {
                        
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