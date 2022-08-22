import React from "react";
import  { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Form_sec.css'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import {GoDesktopDownload} from "react-icons/go"
import {MdDeleteForever} from "react-icons/md"
import { FcPlus } from "react-icons/fc";
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
    // const [mode,setMode]=useState([""]);
    const exportData = (quiz:quiz) => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(quiz)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "questions.json";
        link.click();
    };
    const[max_answer,setMaxa]=useState(1);

    const [Read_answer,setReading]=useState("");
    const [read_question,setQuestion]=useState("");
    const [Input_answer,setAnswer]=useState("");
    const [Input_score,setScore]=useState('0');

    const [Question_number,setQuestion_number]=useState(0);
    const [Answer_number,setAnswer_number]=useState(1);


    const[questions,setQuestions_hold]=useState([""]);
    const[question_hold,setQuestion_hold]=useState("");
    const[question_count,setCount]=useState(0);

    const myComponent = {
        width: '500px',
        height: '400px',
        overflow: 'auto'
        
    }  
    useEffect(() => {
        localStorage.clear();
      },[]);

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
    function delete_Item(index){
        const newList = questions.filter((item) => (questions.indexOf(item)) !== index);
        localStorage.removeItem("Question "+(index)+" :")
        var i=1;
        while (localStorage.getItem(""+index+","+i) != null){

            localStorage.removeItem(""+index+","+i);
            i++;
        }
        
        setQuestions_hold(newList);
    }
    
    return(
       
      <div className="flexing">
        
        {/* Adding questions domaine */}
        <div >
           
            <div className="text_btn">
           <div className="text_btn_align">

                <input className="input_top form_div_glass" onChange={event=>setQuestion_hold(event.target.value)} placeholder="Add question"></input>
           </div>
       
            <div>
            <button onClick={()=>{
            setQuestions_hold([...questions, question_hold]);
            setCount(question_count+1);
            setQuestion_number(question_count+1)
            localStorage.setItem("Question "+(question_count+1)+" :",""+question_hold)
            }} className="btn-draw-border-small btn form_div_glass">
                <FcPlus/>
                
                <span>Add Question</span>
            </button>
            </div>
   
            </div>
            <div style={myComponent} className="text_btn">
                <table>
                { questions.map((q,d=questions.indexOf(q))=>{
                    if(q!==""){
                        return(<tr>
                            <td key={d} className="flexing">
                            <button onClick={()=>{
                                setQuestion_number(d)
                                setQuestion(q)
                                setAnswer_number(1)
                            }} className="not_normal">
                            <strong>Question  {d}:</strong> {q}
                            </button>
                            </td>
                            <td>
                            <button className="btn-draw-border-delete" onClick={
                                ()=>{
                                    
                                    delete_Item(d)
                                    for(var i=d+1;i<=question_count;i++){
                                        localStorage.removeItem("Question "+(i)+" :");
                                    }
                                    for(var i=d+1;i<=question_count;i++){
                                        localStorage.setItem("Question "+(i-1)+" :",questions[i]);
                                    }
                                    setCount(question_count-1)
                                    setQuestion_number(question_count-1)
                                    
                                }
                                }>
                            <span>Delete</span>
                            <MdDeleteForever/>
                            </button>
                            </td>
                        </tr>)
                    }
                   })}
                   </table>
            </div>
        </div>
        {/* Adding questions domaine */}

        {/* Entering answers domaine  */}
        <div className="form_div_glass">
       
                {/* This div is for Answer entring and visualisation */}
            <div className="a_little_more_distancec_from_sidebar">
                <div className="margin_question">
                    <text className="glow">
                        <strong>
                        Question {Question_number}
                        </strong>
                        
                    </text>
                </div>
                <div>
                
                    <input className="input" value={Read_answer} placeholder="Read Only">

                    </input>
                </div>
                <div >
                  
                    <input className="input" onChange={event=>setAnswer(event.target.value)} placeholder="Answer">
                        
                    </input>
                </div>
                <div >
                    <input className="input" onChange={event=>setScore(event.target.value)} placeholder="Score"   ></input>
                </div>
                {/* This div is for Answer navigation */}
            </div>
            <div className="flexing even_a_little_more_distancec_from_sidebar" >
               
                <button className="btn-draw-border-small" onClick={()=>{
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
                }}>
             
                <AiOutlineDoubleLeft/>
                
                <span>Back</span>
              </button>
               {/* <=A */}
                <div className="margin_answer">
                    <strong className="answer_color">
                    Answer {Answer_number}
                    </strong>
                         
                </div>
                <button  className="btn-draw-border-small" onClick={()=>{
                    
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
                    }}}><span>Next</span>
                        <AiOutlineDoubleRight/>
                
                    </button>
                                     {/* A=> */}
            </div>
            
           
            <div className="margin_download_btn">
                <button className="btn draw-border" onClick={async ()=>{

                    let b:choice={
                        score:Input_score,
                        text:Input_answer,
                    }
                // if(max_answer!==Answer_number){
                //    setData(b,Question_number,Answer_number);
                // }
                   localStorage.setItem(Question_number+"",read_question)

                   let choice:choice={
                       score:'',
                       text:''
                   }
                   let choicess:choice[]=[]
                   
                    const questions:question[]=[]
                   for(let q = 1; q <= question_count; q++){
                        const question_value=localStorage.getItem("Question "+q+" :")
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
                }}><GoDesktopDownload/></button>
                

            </div>
        </div>
        {/* Entering asnwers domaine  */}
      </div>
       
    );
};

                                                                                                                                                                                                                                                                                                           