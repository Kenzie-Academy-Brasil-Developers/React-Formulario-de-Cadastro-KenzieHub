import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContext } from "./ToastContext";


export const AuthContext = createContext({}) 

const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [techs, setTechs] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const { addToast } = useContext(ToastContext);
  

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('token');
            
      
            if (token) {
              try {
                api.defaults.headers.authorization = `Bearer ${token}`;
      
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

    const signIn = (data) => {
           api.post("/sessions", data)
           .then(response => {
                console.log(response)
                window.localStorage.clear()
                window.localStorage.setItem("token", response.data.token)
                window.localStorage.setItem("userId", response.data.user.id)
                window.localStorage.setItem("user", response.data.user.name)
                window.localStorage.setItem("course", response.data.user.course_module)
                setUser(response.data.user.name)
                setTechs([...techs, response.data.user.techs]) 
                console.log(techs)
                
                api.defaults.headers.authorization = `Bearer ${response.data.token}`;
            
                
                addToast({
                    type: 'success',
                    title: 'Login realizado com sucesso',
                  });

                 const toNavigate = location.state?.from?.pathname || '/home'

                navigate(toNavigate, {replace: true})
                
                })
                  .catch((error) => {
                    console.error(error)
                        addToast({
                                type: 'error',
                                title: 'Erro ao realizar login',
                                description: 'Verifique o e-mail e a senha.',

                  })})
          }
      

          const onSubmit =(data) => {
            
            api.post("users", data)
            .then((response) => {
            console.log(response)

            addToast({
              type: 'success',
              title: 'Cadastro realizado com sucesso',
            });

            navigate("/")

          })
          .catch((error) =>  {
            console.error(error)
            addToast({
                      type: 'error',
                      title: 'Cadastro inválido',
                      description: 'Verifique se os dados estão certos.'
          
            })})
      }

      const logout = () => {
        
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userId")
        navigate("/")
      }
    
    return(
        <AuthContext.Provider value ={{ user, signIn, loading, onSubmit, logout, techs }}>
            {children}
        </AuthContext.Provider>
    )


    
}

export default AuthProvider;