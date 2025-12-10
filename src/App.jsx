import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Submit from './pages/Submit'; import Tournament from './pages/Tournament'; import Admin from './pages/Admin';
export default function App(){
 return(<BrowserRouter><Routes>
 <Route path='/' element={<Tournament/>}/>
 <Route path='/submit' element={<Submit/>}/>
 <Route path='/admin' element={<Admin/>}/>
 </Routes></BrowserRouter>);
}