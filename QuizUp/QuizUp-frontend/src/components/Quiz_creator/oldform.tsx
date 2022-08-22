import React from "react";
import  { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Form_sec.css'

export default function Quiz_Form_sec(){
    type choice={
        text:string,
        score:string
    };
    type question={
        question:string,
        choices:choice[]
    };

    type quiz={
        name:string,
        description:string,
        questions:question[]
      
    }
    const exportData = (quiz:quiz) => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(quiz)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "questions.json";
        link.click();
    };
    const[max_question,setMaxq]=useState(1);
    const[max_answer,setMaxa]=useState(1);

    const [Read_answer,setReading]=useState("");
    const [Input_question,setQuestion]=useState("");
    const [Input_answer,setAnswer]=useState("");
    const [Input_score,setScore]=useState('0');

    const [Question_number,setQuestion_number]=useState(1);
    const [Answer_number,setAnswer_number]=useState(1);

    // useEffect(() => {
    //     localStorage.clear();
    //   },[]);
   async function setData(c:choice,Question_number:number,Answer_number:number){
        try {
            await localStorage.setItem(Question_number +","+Answer_number, JSON.stringify(c));
          
        } catch (error) {
            console.log(error);
        }
        
    }
    async function getData(Question_number:number,Answer_number:number):Promise<choice>{
        let c:choice={
            score:'0',
            text:'nothing'
        };
        try {
             const value= await localStorage.getItem(Question_number+","+Answer_number);
             if(value!==null){
                 c=JSON.parse(value);
                 return c
             }
             else{
                 return c
             }
            
        } catch (error) {
            
            console.log(error);
            return c
        }
    }

    return(
       
      
        <div className="distance_from_side_bar">
            <button onClick={()=>{}}>
                <Link to="/question"> Back </Link>
            </button>
            <div className="flexing">
            <button onClick={()=>{
                    if (Question_number>1){     
                        setQuestion_number(Question_number-1);
                        setAnswer_number(1);
                
                    }
                    else{
                        alert("No questions exist before question 1!");
                        console.log(Question_number);
                    }
                }} color="primary" > Previous question</button>
                {/* <=q */}
 
                {/* <div>
                     Question {Question_number} 
                </div> */}
                <button  onClick={()=>{

                    setQuestion_number(Question_number+1)
                    setAnswer_number(1);
                    localStorage.setItem(Question_number+"",Input_question)
                    if(Question_number>max_question){
                        setMaxq(Question_number)
                    }
                    
                    }}>Next question</button>
                    {/* q=> */}
            </div>
                {/* This div is for Answer entring and visualisation */}
            <div className="a_little_more_distancec_from_sidebar">
                <div>
                    <input className="input" value={Read_answer} placeholder="Read Only">

                    </input>
                </div>
                <div >
                <div >
                    <input className="input" onChange={event=>setQuestion(event.target.value)} placeholder="Question">
                        
                    </input>
                </div>
                    <input className="input" onChange={event=>setAnswer(event.target.value)} placeholder="Answer">
                        
                    </input>
                </div>
                <div >
                    <input className="input" onChange={event=>setScore(event.target.value)} placeholder="Score"   ></input>
                </div>
                {/* This div is for Answer navigation */}
            </div>
           
            
            <div className="flexing" >
                <button onClick={()=>{
                    if (Answer_number>1){
                      
                        let c:choice={
                            score:Input_score,
                            text:Input_answer,
                        }
                        setData(c,Question_number,Answer_number);
                    
                        getData(Question_number,Answer_number-1).then(result => {
                        setReading(result.text)})
                        setAnswer_number(Answer_number-1);
                    }
                    else{
                        alert("No Answers exist before Answer 1!");
                        
                    }
                }}>Previous answer</button>
               {/* <=A */}
                {/* <div>
                        Answer {Answer_number} 
                </div> */}
                <button onClick={()=>{
                    
                    let c:choice={
                        score:Input_score,
                        text:Input_answer,
                    }
                    setData(c,Question_number,Answer_number);
                
                    getData(Question_number,Answer_number+1).then(result => {
                    setReading(result.text)})
                    setAnswer_number(Answer_number+1) 
                    if(Answer_number>max_answer){
                        setMaxa(Answer_number)
                    }}
                                     }>Next answer</button>
                                     {/* A=> */}
            </div>
            <div className="a_little_more_distancec_from_sidebar">
                <button className="btn draw-border" onClick={async ()=>{

                    let b:choice={
                        score:Input_score,
                        text:Input_answer,
                    }
           
                   setData(b,Question_number,Answer_number);

                   localStorage.setItem(Question_number+"",Input_question)

                   let choice:choice={
                       score:'',
                       text:''
                   }
                   let choicess:choice[]=[]
                   
                    const questions:question[]=[]
                   for(let q = 1; q <= max_question+1; q++){
                        const question_value=localStorage.getItem(q+"")
                        let question:question={
                            choices:[],
                            question:''
                            }   
                        if (question_value!==null){
                            question.question=question_value

                        }
                    
                                for(let a = 1; a <= max_answer+1; a++){
                                    const answer_value=localStorage.getItem(q+","+a)
                                    if (answer_value!==null){
                                        choice=JSON.parse(answer_value)
                                        if(choice.score!=='' && choice.text!==''){
                                            choicess.push(choice)
                                        }
                                    }
                                }
                        question.choices=choicess
                        // console.log(question)
                        
                        questions.push(question)
                        choicess=[]
                       }
                let quiz:quiz={
                    name:'a quiz',
                    description:'easy quiz',
                    questions:questions
                };

                 exportData(quiz);
                }}>Done</button>
           
            </div>
        </div>
    );
};

                                                                                                                                                                                                                                                                                                           