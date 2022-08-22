import { maxWidth } from "@mui/system";
import { useEffect, useState } from "react";
import generateQuiz from "../../socketsModule/facade/FactoryFacade";
import Quiz from "../../socketsModule/quizEntities/Quiz";
import HostFile from "./HostFile";





const UploadQuiz = ()=> {

    const [quiz, setQuiz] = useState<Quiz>();

    const [hosted, setHosted] = useState(false);

    const onFileChange = event => {

        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = (e: ProgressEvent<FileReader> ) => {
          console.log("e.target.result", (e.target?.result));
          if (!( e.target?.result instanceof ArrayBuffer) && e.target?.result)  {

          console.log(JSON.parse(e.target?.result));
          setQuiz(generateQuiz(JSON.parse(e.target?.result)));
          }
        };

    
    
    };

    if (quiz && hosted)
    return (<HostFile quiz={quiz}></HostFile>)

    return (
        <>
        <div className="card">
            <h2>My Quizzes</h2><br/>
            {!quiz && <h5>put a working file</h5>}
            <input type="file" onChange={onFileChange}/>


		<div className='bouttons'>
        <button onClick={()=>{ if (quiz)setHosted(true)}} style={{maxWidth:"60px"}} className="play">Host</button>
        {/* <button className="host">Upload</button> */}
        </div>
        </div>
        </>
    );

}

export default UploadQuiz;