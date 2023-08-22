import './App.css';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addTask' element ={<AddTask/>}></Route>
          <Route path='/edit/:id' element ={<EditTask/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
