import  { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import ProtectedRoutes from '../components/ProtectedRoutes';

const RoutesMain = () => (
            <Routes>
                <Route  path = '/' element={<Login />}/>
                <Route  path = '/register' element={<Register />}/>
                <Route element={<ProtectedRoutes />}>
                    <Route  path = '/home' element={<Home />}/>
                </Route>
            </Routes>
);


export default RoutesMain;