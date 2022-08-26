import './App.css';
import { Global } from './styles/Global/global';
import AuthProvider from './conxtexts/AuthContext';
import Routes from './routes';
import ToastContainer from './components/ToastContainer';
import Provider from './conxtexts';

function App() {

  return (
    <Provider>
      <Global />
      <Routes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
