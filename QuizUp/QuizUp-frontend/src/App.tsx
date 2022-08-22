import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/SignUp-In/login.component';
import Signup from './components/SignUp-In/signup.component';
import Details from './components/Details/Details';
import Search from './components/Search/Search';
import TopBar from './components/TopBar/TopBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Question from './components/Question/Question';
import SideBar from './components/SideBar/SideBar';
import HostWait from './components/HostWait/HostWait';
import Join from './components/Join/Join';
import AnswerState from './components/AnswerState/AnswerState';
import Score from './components/Score/Score';
import PlayerWait from './components/PlayerWait/PlayerWait';
import PlayerTest from './testComponents/HostTest/PlayerTest';
import PlayerWaiting from './components/PlayerWait/PlayerWaiting';
import UploadQuiz from './components/UploadQuiz/UploadQuiz';
import Form from './components/Quiz_creator/Form_sec';

function App() {
  return (
    <div className="AppSidebar">
      <SideBar/>
      <div className="App">
      <TopBar/>
      <Routes>
          <Route path='/' element={<Search/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/quiz/:id' element={<Details/>}></Route>
          <Route path='/play/:id' element={<Question/>} />
          <Route path='/host/:id' element={<HostWait/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/score' element={<Score/>} />
          <Route path='/state' element={<AnswerState/>} />
          <Route path='/playwait' element={<PlayerWait/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/playertest' element={<PlayerTest/>} />
          <Route path='/playwaiting' element={<PlayerWaiting/>} />
          <Route path='/myquiz' element={<UploadQuiz/>} />
          <Route path='/create' element={<Form/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
