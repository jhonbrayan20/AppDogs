
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Landing from './Wiews/Landing/Landing';
import Home from './Wiews/Home/Home';
import Create from './Wiews/Create/Create';
import Detail from './Wiews/Detail/Detail';
import Search  from "./Wiews/Search/Search"
import LisBreeds from './Wiews/LisBreeds/LisBreeds';
import Cheked from './Components/Cheked/Cheked';
import axios from "axios";
axios.defaults.baseURL="https://app-dogs-lzaz.vercel.app/";


function App() {
  return(
    <div>
       <Routes>
        <Route exact path='/' element={<Landing/>} />         
        <Route path='/Home' element={<Home/>} />
        <Route path='/Create' element={<Create/>} />
        <Route path='/Dogs/:id' element={<Detail/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/DogsTemperamentos/:temperamento' element={<LisBreeds/>} />
        <Route path='/Cheked' element={<Cheked/>} />        
       </Routes>
    </div>
  )
}

export default App;
