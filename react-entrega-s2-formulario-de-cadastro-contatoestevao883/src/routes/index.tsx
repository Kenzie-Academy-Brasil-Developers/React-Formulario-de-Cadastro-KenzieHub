import  { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';

const RoutesMain = () => (
            <Routes>
                <Route  path = '/' element={<Login />}/>
                <Route  path = '/register' element={<Register />}/>
                <Route  path = '/home' element={<Home />}/>
            </Routes>
);


export default RoutesMain;