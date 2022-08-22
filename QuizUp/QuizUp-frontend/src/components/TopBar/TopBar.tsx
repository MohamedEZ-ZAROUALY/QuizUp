import {Button, TextField} from '@mui/material';
import { join } from 'path';
import React, { FC, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import './TopBar.css'
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

type topBar = {
    join: Function,
}

function TopBar () {
    const [joining, setJoining] = useState<boolean>(false);
    const join = () => {
        setJoining(true);
    }
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const mc = searchParams.get("motcle")
        if (mc)
        setMotcle(mc);
    },[searchParams.get("motcle")])
    

    const [motcle, setMotcle] = useState("");

    const getQuizzes =()=>{
        // navigate("search?motcle=" + encodeURIComponent(motcle.split(" ").join(",")))
        navigate("search?motcle=" + encodeURIComponent(motcle))

    }
   
    const onTextChange = (e) => {
        setMotcle(e.target.value);
    }

    const search= (e)=> {
        if(e.keyCode === 13) {
            getQuizzes();
        }
    }

    return (
        <div className='topBar' onClick={()=>{}}>
            <div className='searchBar'>
            <TextField
                id="mainSearch"
                variant="outlined"
                fullWidth
                label="Search"
                margin='none'
                size="small" 
                value={motcle}
                onChange={onTextChange}
                onKeyUp = {search}
            />
 
            </div>
           
            <Button variant="contained"
            style={{textTransform: 'none'}}
            onClick={join}
            >Join a quiz</Button>

            <PopUp open={joining} setOpen={setJoining}/>

            
        </div>
    );

}


export default TopBar;