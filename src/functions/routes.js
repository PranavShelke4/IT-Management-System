import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Dashbord from '../pages/SubjectTeacherPages/Dashbord';
import Fideology from '../pages/SubjectTeacherPages/FideologyForm';
import StudentDetail from '../pages/SubjectTeacherPages/studentDetail';
import Course from '../pages/SubjectTeacherPages/coursePage';
import QuestionPaper from '../pages/SubjectTeacherPages/questionPaper';
import StudyPage  from "../pages/SubjectTeacherPages/studyPage";
import ProfilePage from "../pages/SubjectTeacherPages/ProfilePage";

const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/fideology-form" element={<Fideology />}></Route>
        <Route path="/subject-teacher-dashbord" element={<Dashbord />}></Route>
        <Route path="/student-details" element={<StudentDetail />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/study-material" element={<StudyPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </>
  );
};

export default ConfigRoutes;