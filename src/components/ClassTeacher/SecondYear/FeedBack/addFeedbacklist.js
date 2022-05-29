import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Feedbacklist from "../../../../api/SecondYear/Feedbacklist";
import "../../../SubjectTeacher/SnehaRaut/Fideology/createPedelogy.css"

function Cancel(){
  window.location.href="/class-teacher/class-feedback";
}


function  AddFeedbackList() {

  const [year,SetYear] = useState("");
  const [facultyName,SetFacultyName] = useState("");
  const [linkName,SetLinkName] = useState("");



  // const history = useHistory();

  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const feedbacklist = {
      year:year,
      faculty:facultyName,
      link:linkName
    }

    console.log(feedbacklist);
   const res = await Feedbacklist.post("/add-feedbacklist",feedbacklist);
   console.log(res.data.msg)
   window.location.href="/class-teacher/class-feedback";
  //  if(res.data.msg =="success"){
  //   //  history.push("/subject-teacher-dashboard");
  //  }
  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        <div>
          <label>Year</label><br/>
          <input 
          className='input-box'
          type = "text"
          name="date"
          value={year}
          onChange={(e) => {
            SetYear(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Faculty Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {facultyName}
          onChange={(e)=>{
            SetFacultyName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Link</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="subName"
          value ={linkName}
          onChange={(e)=>{
            SetLinkName(e.target.value);
          }}
          />
        </div>
        
        <input className ="subButton" type="submit" value="Submit"/>
        <input className ="cancelButton" type="button" onClick={Cancel} value="Cancel"/>
      </form>
    </div>
    </div>
  )
}

export default AddFeedbackList;     