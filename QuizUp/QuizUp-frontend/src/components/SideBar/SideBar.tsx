import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png';
import './sidebar.css'


function SideBar() {
    const [chosen, setChosen] = useState(2);
    const chosenClass = (i:number) => {
        if (i==chosen)
            return 'pagechosen';
        return 'page'
    }
    const chose = (i:number) => {
        setChosen(i);
        if (i==3){
            
        }
    }
    return (
    <div className="sidebar">
        <Link to='/'>
        <div onClick={()=>{setChosen(1)}}>
        <div className='sidebar-logo'>
         <img src={logo} alt="logo"/>
        </div>
        <Button onClick={() => {setChosen(1)}} className={chosenClass(1)}>Dashboard</Button>
        </div>
        <Button onClick={() => {setChosen(2)}} className={chosenClass(2)}>Explore</Button>
        </Link>
        <Link to='myquiz'>
        <Button onClick={() => {setChosen(3)}} className={chosenClass(3)}>My Quizzes</Button>
        </Link>
        <Button onClick={() => {setChosen(4)}} className={chosenClass(4)}><Link to="/create">Create quizes</Link></Button>
    </div>
    );
}

export default SideBar;