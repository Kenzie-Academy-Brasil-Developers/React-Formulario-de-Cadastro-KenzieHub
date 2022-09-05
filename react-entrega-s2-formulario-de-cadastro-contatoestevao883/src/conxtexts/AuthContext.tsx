import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { ILogin } from "../components/FormLogin";
import { IRegister } from "../components/FormRegister";
import  { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Location } from "history";

export interface IAuthCoxtextProps{
    children: ReactNode
}

export interface IUser {
  id: string
  avatar_url?: null
  name: string
  bio: string
  contact: string
  course_module: string
  created_at: Date
  email: string
  techs: ITechs[]
  updated_at: Date
  works: []
}

export interface ITechs{
  created_at: string | Number
  id: string
  status: string
  title: string
  updated_at: Date
}

export interface IData{
  token: string
  user: IUser
}

export interface IDataResponse{
  id: string
  name: string
  bio: string
  contact: string
  course_module: string
  created_at: Date
  email: string
  techs: ITechs[]
  updated_at: Date
  works: []
}

export interface IAuthContext {
  user: IUser
  signIn:(data: ILogin) => void
  loading: boolean
  onSubmit: (data: IRegister) => void
  logout: any
  techs: ITechs[]
  setTechs: (value: ITechs[]) => void
  setUser: (value: IUser) => void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext) 

const AuthProvider = ( {children}: IAuthCoxtextProps ) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [loading, setLoading] = useState(true)
    const [techs, setTechs] = useState<ITechs[]>({} as ITechs[])
    const navigate = useNavigate()
    const location = useLocation()

  
   
    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('token');
            
      
            if (token) {
              try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;
      
                const { data } = await api.get('/profile');
      
                setUser(data);
                setTechs(data.techs)
              } catch (error) {
                console.error(error);
              }
            }
            setLoading(false);
          }
      
          loadUser();
        }, []);

    const signIn = (data: ILogin) => {
           api.post<IData>("/sessions", data)
           .then(response => {
                console.log(response)
                window.localStorage.clear()
                window.localStorage.setItem("token", response.data.token)
                window.localStorage.setItem("userId", response.data.user.id)
                window.localStorage.setItem("user", response.data.user.name)
                window.localStorage.setItem("course", response.data.user.course_module)
                setTechs([...response.data.user.techs]) 
                console.log(techs)
                toast.success('Login realizado com sucesso.', {position: toast.POSITION.TOP_RIGHT})
        
                
                api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
                
                navigate("/home" , {replace: true})
                
                })
                  .catch((error) => {
                    console.error(error)
                    toast.error('Opss! Não conseguimos realizar o seu login.',  {position: toast.POSITION.TOP_RIGHT})
                  })
          }
      

          const onSubmit = (data: IRegister) => {
            
            api.post<IDataResponse>("users", data)
            .then((response) => {
            console.log(response)

            toast.success('Cadastro realizado com sucesso.', {position: toast.POSITION.TOP_RIGHT})
            navigate("/")

          })
          .catch((error) =>  {
            console.error(error)
            toast.error('Opss! Não foi possível realizar o seu cadastro.',  {position: toast.POSITION.TOP_RIGHT})
             })
      }

      const logout = () => {
        
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userId")
        navigate("/")
      }
    
    return(
        <AuthContext.Provider value ={{ user, signIn, loading, onSubmit, logout, techs, setTechs, setUser }}>
            {children}
        </AuthContext.Provider>
    )


    
}

export default AuthProvider;