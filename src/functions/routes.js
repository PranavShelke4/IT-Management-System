import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";


// HOD Routes

import HODDashbord from "../pages/HODPages/Dashboard"
import SYAchievementPage from "../pages/HODPages/SYAchievementPage"
import TYAchievementPage from "../pages/HODPages/TYAchievementPage"

import FacultyDetails from "../pages/HODPages/FacultyDetails";
import FacultyCR from "../pages/HODPages/FacultyCR";

import FYStudentPage from "../pages/HODPages/FYStudentsPage"
import SYStudentPage from "../pages/HODPages/SYStudentsPage"
import TYStudentPage from "../pages/HODPages/TYStudentsPage"

import HODFYDetentionPage from "../pages/HODPages/FYDetentionPage"
import HODSYDetentionPage from "../pages/HODPages/SYDetentionPage"
import HODTYDetentionPage from "../pages/HODPages/TYDetentionPage"

import HODFYFeedbackPage from "../pages/HODPages/FYFeedbackPage"
import HODSYFeedbackPage from "../pages/HODPages/SYFeedbackPage"
import HODTYFeedbackPage from "../pages/HODPages/TYFeedbackPage"

import HODProfile from "../pages/HODPages/HODProfile";
import AssignClassTeacher from '../pages/HODPages/AssignClassTeacher';
import FacyltyLeave from '../pages/HODPages/Leaves'
import EditHODleave from "../pages/HODPages/EditLeavePage";


//Third Year class Teacher routes 

import FYClassTeacherDashboard from '../pages/ClassTeacherPages/FirstYear/Dashboard';
import FYAddAchievement from "../pages/ClassTeacherPages/FirstYear/addAchievement";
import FYEditAchievement from "../pages/ClassTeacherPages/FirstYear/EditAchievementPage";

import FYClassFaculFY from "../pages/ClassTeacherPages/FirstYear/FacultyDetails";

import FYAssignST1stPage from "../pages/ClassTeacherPages/FirstYear/AssignST1stPage";
import FYAssignST2ndPage from "../pages/ClassTeacherPages/FirstYear/AssignST2ndPage";

import FYStudent from "../pages/ClassTeacherPages/FirstYear/studentpage";
import FYAddList from "../pages/ClassTeacherPages/FirstYear/addListPage";
import FYEditStudentlist from "../pages/ClassTeacherPages/FirstYear/EditListPage";

import FYDetentionPage from "../pages/ClassTeacherPages/FirstYear/DetentionPage";
import FYAddDetentionList from "../pages/ClassTeacherPages/FirstYear/addDetentionPage";
import FYEditDetentionlist from "../pages/ClassTeacherPages/FirstYear/EditDetention";

import FYFeedbackPage from "../pages/ClassTeacherPages/FirstYear/FeedbackPage";
import FYAddFeedbackList from "../pages/ClassTeacherPages/FirstYear/AddFeedbackPage";
import FYEditFeedbacklist from "../pages/ClassTeacherPages/FirstYear/EditFeedback";

import FYClassProfilePage from "../pages/ClassTeacherPages/FirstYear/ProfilePage";



// Second Year classTaecher Routes

import ClassTeacherDashboard from '../pages/ClassTeacherPages/SecondYear/Dashboard';
import AddAchievement from "../pages/ClassTeacherPages/SecondYear/addAchievement";
import EditAchievement from "../pages/ClassTeacherPages/SecondYear/EditAchievementPage";

import ClassFaculty from "../pages/ClassTeacherPages/SecondYear/FacultyDetails";

import AssignST3rdPage from "../pages/ClassTeacherPages/SecondYear/AssignST3rdPage";
import AssignST4thPage from "../pages/ClassTeacherPages/SecondYear/AssignST4thPage";

import Student from "../pages/ClassTeacherPages/SecondYear/studentpage";
import AddList from "../pages/ClassTeacherPages/SecondYear/addListPage";
import EditStudentlist from "../pages/ClassTeacherPages/SecondYear/EditListPage";

import DetentionPage from "../pages/ClassTeacherPages/SecondYear/DetentionPage";
import AddDetentionList from "../pages/ClassTeacherPages/SecondYear/addDetentionPage";
import EditDetentionlist from "../pages/ClassTeacherPages/SecondYear/EditDetention";

import FeedbackPage from "../pages/ClassTeacherPages/SecondYear/FeedbackPage";
import AddFeedbackList from "../pages/ClassTeacherPages/SecondYear/AddFeedbackPage";
import EditFeedbacklist from "../pages/ClassTeacherPages/SecondYear/EditFeedback";

import ClassProfilePage from "../pages/ClassTeacherPages/SecondYear/ProfilePage";

//Third Year class Teacher routes 

import TYClassTeacherDashboard from '../pages/ClassTeacherPages/ThirdYear/Dashboard';
import TYAddAchievement from "../pages/ClassTeacherPages/ThirdYear/addAchievement";
import TYEditAchievement from "../pages/ClassTeacherPages/ThirdYear/EditAchievementPage";

import TYClassFaculty from "../pages/ClassTeacherPages/ThirdYear/FacultyDetails";

import TYAssignST5thPage from "../pages/ClassTeacherPages/ThirdYear/AssignST5thPage";
import TYAssignST6thPage from "../pages/ClassTeacherPages/ThirdYear/AssignST6thPage";

import TYStudent from "../pages/ClassTeacherPages/ThirdYear/studentpage";
import TYAddList from "../pages/ClassTeacherPages/ThirdYear/addListPage";
import TYEditStudentlist from "../pages/ClassTeacherPages/ThirdYear/EditListPage";

import TYDetentionPage from "../pages/ClassTeacherPages/ThirdYear/DetentionPage";
import TYAddDetentionList from "../pages/ClassTeacherPages/ThirdYear/addDetentionPage";
import TYEditDetentionlist from "../pages/ClassTeacherPages/ThirdYear/EditDetention";

import TYFeedbackPage from "../pages/ClassTeacherPages/ThirdYear/FeedbackPage";
import TYAddFeedbackList from "../pages/ClassTeacherPages/ThirdYear/AddFeedbackPage";
import TYEditFeedbacklist from "../pages/ClassTeacherPages/ThirdYear/EditFeedback";

import TYClassProfilePage from "../pages/ClassTeacherPages/ThirdYear/ProfilePage";



// Sneha Raut Routes.....

import Dashbord from '../pages/SubjectTeacherPages/SnehaRaut/Dashbord';
import CreateExercise from "../pages/SubjectTeacherPages/SnehaRaut/FideologyForm";
import EditExercise from "../pages/SubjectTeacherPages/SnehaRaut/EditPedeology";


import FYStudents from "../pages/SubjectTeacherPages/SnehaRaut/FYStuddentsPage";
import SYStudents from "../pages/SubjectTeacherPages/SnehaRaut/SYStudentsPage";
import TYStudents from "../pages/SubjectTeacherPages/SnehaRaut/SYStudentsPage";

import Course from '../pages/SubjectTeacherPages/SnehaRaut/coursePage';

import StudyPage  from "../pages/SubjectTeacherPages/SnehaRaut/studyPage";
import AddStudymaterial from "../pages/SubjectTeacherPages/SnehaRaut/StudyMaterialPage";
import EditStudymaterial from "../pages/SubjectTeacherPages/SnehaRaut/EditStudyMaterialPage";

import QuestionPaper from '../pages/SubjectTeacherPages/SnehaRaut/questionPaper';
import AnswerKey from '../pages/SubjectTeacherPages/SnehaRaut/answerKey';
import AssignmentPage from "../pages/SubjectTeacherPages/SnehaRaut/Assignmentpage";

import ProfilePage from "../pages/SubjectTeacherPages/SnehaRaut/ProfilePage";
import LeavePage from '../pages/SubjectTeacherPages/SnehaRaut/LeavePage';


// Sheetal Sutar Routes.....

import SutarDashbord from '../pages/SubjectTeacherPages/SheetalSutar/Dashbord';
import SutarCreateExercise from "../pages/SubjectTeacherPages/SheetalSutar/FideologyForm";
import SutarEditExercise from "../pages/SubjectTeacherPages/SheetalSutar/EditPedeology";


import SutarCourse from '../pages/SubjectTeacherPages/SheetalSutar/coursePage';

import SutarStudyPage  from "../pages/SubjectTeacherPages/SheetalSutar/studyPage";
import SutarAddStudymaterial from "../pages/SubjectTeacherPages/SheetalSutar/StudyMaterialPage";
import SutarEditStudymaterial from "../pages/SubjectTeacherPages/SheetalSutar/EditStudyMaterialPage";

import SutarQuestionPaper from '../pages/SubjectTeacherPages/SheetalSutar/questionPaper';
import SutarAnswerKey from '../pages/SubjectTeacherPages/SheetalSutar/answerKey';
import SutarAssignmentPage from "../pages/SubjectTeacherPages/SheetalSutar/Assignmentpage";

import SutarProfilePage from "../pages/SubjectTeacherPages/SheetalSutar/ProfilePage";
import SutarLeavePage from '../pages/SubjectTeacherPages/SheetalSutar/LeavePage';

// Poonam Fafat Routes.....

import FafatDashbord from '../pages/SubjectTeacherPages/PoonamFafat/Dashbord';
import FafatCreateExercise from "../pages/SubjectTeacherPages/PoonamFafat/FideologyForm";
import FafatEditExercise from "../pages/SubjectTeacherPages/PoonamFafat/EditPedeology";

import FafatStudentDetail from '../pages/SubjectTeacherPages/PoonamFafat/studentDetail';
import FafatCourse from '../pages/SubjectTeacherPages/PoonamFafat/coursePage';

import FafatStudyPage  from "../pages/SubjectTeacherPages/PoonamFafat/SEN/studyPage";
import FafatAddStudymaterial from "../pages/SubjectTeacherPages/PoonamFafat/SEN/StudyMaterialPage";
import FafatEditStudymaterial from "../pages/SubjectTeacherPages/PoonamFafat/SEN/EditStudyMaterialPage";

import FafatETIStudyPage  from "../pages/SubjectTeacherPages/PoonamFafat/ETI/studyPage";
import FafatETIAddStudymaterial from "../pages/SubjectTeacherPages/PoonamFafat/ETI/StudyMaterialPage";
import FafatETIEditStudymaterial from "../pages/SubjectTeacherPages/PoonamFafat/ETI/EditStudyMaterialPage";


import FafatProfilePage from "../pages/SubjectTeacherPages/PoonamFafat/ProfilePage";
import FafatLeavePage from '../pages/SubjectTeacherPages/PoonamFafat/LeavePage';

// Jyoti Dabhade Routes.....

import DabhadeDashbord from '../pages/SubjectTeacherPages/JyotiDabhade/Dashbord';
import DabhadeCreateExercise from "../pages/SubjectTeacherPages/JyotiDabhade/FideologyForm";
import DabhadeEditExercise from "../pages/SubjectTeacherPages/JyotiDabhade/EditPedeology";

import DabhadeFYStudents from "../pages/SubjectTeacherPages/JyotiDabhade/StudentsPages/FYStuddentsPage";
import DabhadeSYStudents from "../pages/SubjectTeacherPages/JyotiDabhade/StudentsPages/SYStudentsPage";
import DabhadeTYStudents from "../pages/SubjectTeacherPages/JyotiDabhade/StudentsPages/TYStudentsPage";

import DabhadeCourse from '../pages/SubjectTeacherPages/JyotiDabhade/coursePage';

import DabhadeStudyPage  from "../pages/SubjectTeacherPages/JyotiDabhade/studyPage";
import DabhadeAddStudymaterial from "../pages/SubjectTeacherPages/JyotiDabhade/StudyMaterialPage";
import DabhadeEditStudymaterial from "../pages/SubjectTeacherPages/JyotiDabhade/EditStudyMaterialPage";

import DabhadeQuestionPaper from '../pages/SubjectTeacherPages/JyotiDabhade/questionPaper';
import DabhadeAnswerKey from '../pages/SubjectTeacherPages/JyotiDabhade/answerKey';
import DabhadeAssignmentPage from "../pages/SubjectTeacherPages/JyotiDabhade/Assignmentpage";

import DabhadeProfilePage from "../pages/SubjectTeacherPages/JyotiDabhade/ProfilePage";
import DabhadeLeavePage from '../pages/SubjectTeacherPages/JyotiDabhade/LeavePage';


// Yogesh Bodhe Routes.....

import BodheDashbord from '../pages/SubjectTeacherPages/YogeshBodhe/Dashbord';
import BodheCreateExercise from "../pages/SubjectTeacherPages/YogeshBodhe/FideologyForm";
import BodheEditExercise from "../pages/SubjectTeacherPages/YogeshBodhe/EditPedeology";

import BodheFYStudents from "../pages/SubjectTeacherPages/YogeshBodhe/StudentsPages/FYStuddentsPage"
import BodheSYStudents from "../pages/SubjectTeacherPages/YogeshBodhe/StudentsPages/SYStudentsPage";
import BodheTYStudents from "../pages/SubjectTeacherPages/YogeshBodhe/StudentsPages/TYStudentsPage";

import BodheCourse from '../pages/SubjectTeacherPages/YogeshBodhe/coursePage';

import BodheStudyPage  from "../pages/SubjectTeacherPages/YogeshBodhe/studyPage";
import BodheAddStudymaterial from "../pages/SubjectTeacherPages/YogeshBodhe/StudyMaterialPage";
import BodheEditStudymaterial from "../pages/SubjectTeacherPages/YogeshBodhe/EditStudyMaterialPage";

import BodheProfilePage from "../pages/SubjectTeacherPages/YogeshBodhe/ProfilePage";
import BodheLeavePage from '../pages/SubjectTeacherPages/YogeshBodhe/LeavePage';


// Priyanka Ghode Routes.....

import GhodeDashbord from '../pages/SubjectTeacherPages/PriyankaGhode/Dashbord';
import GhodeCreateExercise from "../pages/SubjectTeacherPages/PriyankaGhode/FideologyForm";
import GhodeEditExercise from "../pages/SubjectTeacherPages/PriyankaGhode/EditPedeology";

import GhodeFYStudents from "../pages/SubjectTeacherPages/PriyankaGhode/StudentsPages/FYStuddentsPage";
import GhodeSYStudents from "../pages/SubjectTeacherPages/PriyankaGhode/StudentsPages/SYStudentsPage"
import GhodeTYStudents from "../pages/SubjectTeacherPages/PriyankaGhode/StudentsPages/TYStudentsPage"

import GhodeCourse from '../pages/SubjectTeacherPages/PriyankaGhode/coursePage';

import GhodeStudyPage  from "../pages/SubjectTeacherPages/PriyankaGhode/C/studyPage";
import GhodeAddStudymaterial from "../pages/SubjectTeacherPages/PriyankaGhode/C/StudyMaterialPage";
import GhodeEditStudymaterial from "../pages/SubjectTeacherPages/PriyankaGhode/C/EditStudyMaterialPage";
import GhodejavaStudyPage  from "../pages/SubjectTeacherPages/PriyankaGhode/Java/studyPage";
import GhodejavaAddStudymaterial from "../pages/SubjectTeacherPages/PriyankaGhode/Java/StudyMaterialPage";
import GhodejavaEditStudymaterial from "../pages/SubjectTeacherPages/PriyankaGhode/Java/EditStudyMaterialPage";

import GhodeProfilePage from "../pages/SubjectTeacherPages/PriyankaGhode/ProfilePage";
import GhodeCR from '../pages/SubjectTeacherPages/PriyankaGhode/CRPage';
import GhodeLeavePage from '../pages/SubjectTeacherPages/PriyankaGhode/LeavePage';
import AddGhodeleave from "../pages/SubjectTeacherPages/PriyankaGhode/AddLeavePage";



// Deepak Rewadkar Routes.....

import RewadkarDashbord from '../pages/SubjectTeacherPages/DeepakRewadkar/Dashbord';
import RewadkarCreateExercise from "../pages/SubjectTeacherPages/DeepakRewadkar/FideologyForm";
import RewadkarEditExercise from "../pages/SubjectTeacherPages/DeepakRewadkar/EditPedeology";

import RewadkarStudentDetail from '../pages/SubjectTeacherPages/DeepakRewadkar/studentDetail';
import RewadkarCourse from '../pages/SubjectTeacherPages/DeepakRewadkar/coursePage';

import RewadkarStudyPage  from "../pages/SubjectTeacherPages/DeepakRewadkar/studyPage";
import RewadkarAddStudymaterial from "../pages/SubjectTeacherPages/DeepakRewadkar/StudyMaterialPage";
import RewadkarEditStudymaterial from "../pages/SubjectTeacherPages/DeepakRewadkar/EditStudyMaterialPage";

import RewadkarQuestionPaper from '../pages/SubjectTeacherPages/DeepakRewadkar/questionPaper';
import RewadkarAnswerKey from '../pages/SubjectTeacherPages/DeepakRewadkar/answerKey';
import RewadkarAssignmentPage from "../pages/SubjectTeacherPages/DeepakRewadkar/Assignmentpage";

import RewadkarProfilePage from "../pages/SubjectTeacherPages/DeepakRewadkar/ProfilePage";
import RewadkarLeavePage from '../pages/SubjectTeacherPages/DeepakRewadkar/LeavePage';

// Other

//import SignUpPage from "../components/Signup/signup";



const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>

         {/* Sneha Raut Routes */}
        <Route path="/subject-teacher/sneha-raut/dashboard" element={<Dashbord />}></Route>
        <Route path="/subject-teacher/sneha-raut/fideology-form" element={<CreateExercise />}></Route>
        <Route path="/subject-teacher/sneha-raut/edit/:id" element={<EditExercise/>}></Route>
        
        <Route path="/subject-teacher/sneha-raut/FY-Students" element={<FYStudents />}></Route>
        <Route path="/subject-teacher/sneha-raut/SY-Students" element={<SYStudents />}></Route>
        <Route path="/subject-teacher/sneha-raut/TY-Students" element={<TYStudents />}></Route>

        <Route path="/subject-teacher/sneha-raut/course" element={<Course />}></Route>
        <Route path="/subject-teacher/sneha-raut/study-material" element={<StudyPage />}></Route>
        <Route path="/subject-teacher/sneha-raut/add-studymaterial" element={<AddStudymaterial />}></Route>
        <Route path="/studymaterial/sneha-raut/edit/:id" element={<EditStudymaterial />}></Route>

        <Route path="/subject-teacher/sneha-raut/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/subject-teacher/sneha-raut/answer-key" element={<AnswerKey />}></Route>
        <Route path="/subject-teacher/sneha-raut/assignments" element={<AssignmentPage />}></Route>
        
        <Route path="/subject-teacher/sneha-raut/profile" element={<ProfilePage />}></Route>
        <Route path="/subject-teacher/sneha-raut/leave" element={<LeavePage />}></Route>


         {/* Sheetal Sutar Routes */}
         <Route path="/subject-teacher/sheetal-sutar/dashboard" element={<SutarDashbord />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/fideology-form" element={<SutarCreateExercise />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/edit/:id" element={<SutarEditExercise/>}></Route>
        
        {/* <Route path="/subject-teacher/sheetal-sutar/student-details" element={<SutarStudentDetail />}></Route> */}
        <Route path="/subject-teacher/sheetal-sutar/course" element={<SutarCourse />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/study-material" element={<SutarStudyPage />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/add-studymaterial" element={<SutarAddStudymaterial />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/studymaterial/edit/:id" element={<SutarEditStudymaterial />}></Route>

        <Route path="/subject-teacher/sheetal-sutar/question-paper" element={<SutarQuestionPaper />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/answer-key" element={<SutarAnswerKey />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/assignments" element={<SutarAssignmentPage />}></Route>
        
        <Route path="/subject-teacher/sheetal-sutar/profile" element={<SutarProfilePage />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/leave" element={<SutarLeavePage />}></Route>


         {/* Poonam Fafat Routes */}
         <Route path="/subject-teacher/poonam-fafat/dashboard" element={<FafatDashbord />}></Route>
        <Route path="/subject-teacher/poonam-fafat/fideology-form" element={<FafatCreateExercise />}></Route>
        <Route path="/subject-teacher/poonam-fafat/edit/:id" element={<FafatEditExercise/>}></Route>
        
        <Route path="/subject-teacher/poonam-fafat/student-details" element={<FafatStudentDetail />}></Route>
        <Route path="/subject-teacher/poonam-fafat/course" element={<FafatCourse />}></Route>
        <Route path="/subject-teacher/poonam-fafat/study-material" element={<FafatStudyPage />}></Route>
        <Route path="/subject-teacher/poonam-fafat/add-studymaterial" element={<FafatAddStudymaterial />}></Route>
        <Route path="/subject-teacher/poonam-fafat/studymaterial/edit/:id" element={<FafatEditStudymaterial />}></Route>

        <Route path="/subject-teacher/poonam-fafat/ETI/study-material" element={<FafatETIStudyPage />}></Route>
        <Route path="/subject-teacher/poonam-fafat/ETI/add-studymaterial" element={<FafatETIAddStudymaterial />}></Route>
        <Route path="/subject-teacher/poonam-fafat/ETI/studymaterial/edit/:id" element={<FafatETIEditStudymaterial />}></Route>

        
        <Route path="/subject-teacher/poonam-fafat/profile" element={<FafatProfilePage />}></Route>
        <Route path="/subject-teacher/poonam-fafat/leave" element={<FafatLeavePage />}></Route>


         {/* Jotyi Dabhade Routes */}
         <Route path="/subject-teacher/jyoti-dabhade/dashboard" element={<DabhadeDashbord />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/fideology-form" element={<DabhadeCreateExercise />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/edit/:id" element={<DabhadeEditExercise/>}></Route>
        
        <Route path="/subject-teacher/jyoti-dabhade/FY-Students" element={<DabhadeFYStudents />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/SY-Students" element={<DabhadeSYStudents />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/TY-Students" element={<DabhadeTYStudents />}></Route>

        <Route path="/subject-teacher/jyoti-dabhade/course" element={<DabhadeCourse />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/study-material" element={<DabhadeStudyPage />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/add-studymaterial" element={<DabhadeAddStudymaterial />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/studymaterial/edit/:id" element={<DabhadeEditStudymaterial />}></Route>

        <Route path="/subject-teacher/jyoti-dabhade/question-paper" element={<DabhadeQuestionPaper />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/answer-key" element={<DabhadeAnswerKey />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/assignments" element={<DabhadeAssignmentPage />}></Route>
        
        <Route path="/subject-teacher/jyoti-dabhade/profile" element={<DabhadeProfilePage />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/leave" element={<DabhadeLeavePage />}></Route>
       

        {/* Yogesh Bodhe Routes */}
        <Route path="/subject-teacher/yogesh-bodhe/dashboard" element={<BodheDashbord />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/fideology-form" element={<BodheCreateExercise />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/edit/:id" element={<BodheEditExercise/>}></Route>
        
        <Route path="/subject-teacher/yogesh-bodhe/FY-Students" element={<BodheFYStudents />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/SY-Students" element={<BodheSYStudents />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/TY-Students" element={<BodheTYStudents />}></Route>

        <Route path="/subject-teacher/yogesh-bodhe/course" element={<BodheCourse />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/study-material" element={<BodheStudyPage />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/add-studymaterial" element={<BodheAddStudymaterial />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/studymaterial/edit/:id" element={<BodheEditStudymaterial />}></Route>

        <Route path="/subject-teacher/yogesh-bodhe/profile" element={<BodheProfilePage />}></Route>
        <Route path="/subject-teacher/yogesh-bodhe/leave" element={<BodheLeavePage />}></Route>


        {/* Priyanka Ghode Routes */}
        <Route path="/subject-teacher/priyanka-ghode/dashboard" element={<GhodeDashbord />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/fideology-form" element={<GhodeCreateExercise />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/edit/:id" element={<GhodeEditExercise/>}></Route>
        
        <Route path="/subject-teacher/priyanka-ghode/FY-Students" element={<GhodeFYStudents />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/SY-Students" element={<GhodeSYStudents />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/TY-Students" element={<GhodeTYStudents />}></Route>

        <Route path="/subject-teacher/priyanka-ghode/course" element={<GhodeCourse />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/study-material" element={<GhodeStudyPage />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/add-studymaterial" element={<GhodeAddStudymaterial />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/studymaterial/edit/:id" element={<GhodeEditStudymaterial />}></Route>

        <Route path="/subject-teacher/priyanka-ghode/java/study-material" element={<GhodejavaStudyPage />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/java/add-studymaterial" element={<GhodejavaAddStudymaterial />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/java/studymaterial/edit/:id" element={<GhodejavaEditStudymaterial />}></Route>
        
        <Route path="/subject-teacher/priyanka-ghode/profile" element={<GhodeProfilePage />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/cr" element={<GhodeCR />}></Route>
        
        <Route path="/subject-teacher/priyanka-ghode/leave" element={<GhodeLeavePage />}></Route>
        <Route path="/subject-teacher/priyanka-ghode/add-leave" element={<AddGhodeleave />}></Route>
        

         {/* Deepak Rewa Routes */}
         <Route path="/subject-teacher/deepak-rewadkar/dashboard" element={<RewadkarDashbord />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/fideology-form" element={<RewadkarCreateExercise />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/edit/:id" element={<RewadkarEditExercise/>}></Route>
        
        <Route path="/subject-teacher/deepak-rewadkar/student-details" element={<RewadkarStudentDetail />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/course" element={<RewadkarCourse />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/study-material" element={<RewadkarStudyPage />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/add-studymaterial" element={<RewadkarAddStudymaterial />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/studymaterial/edit/:id" element={<RewadkarEditStudymaterial />}></Route>

        <Route path="/subject-teacher/deepak-rewadkar/question-paper" element={<RewadkarQuestionPaper />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/answer-key" element={<RewadkarAnswerKey />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/assignments" element={<RewadkarAssignmentPage />}></Route>
        
        <Route path="/subject-teacher/deepak-rewadkar/profile" element={<RewadkarProfilePage />}></Route>
        <Route path="/subject-teacher/deepak-rewadkar/leave" element={<RewadkarLeavePage />}></Route>
        


          {/* class teacher Routes First Year  */}
          <Route path="/class-teacher/FY/dashboard" element={<FYClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/FY/add-achievement" element={<FYAddAchievement />}></Route>
        <Route path="/CT/FY/edit/:id" element={<FYEditAchievement/>}></Route>

        <Route path="/class-teacher/FY/classfaculty" element={<FYClassFaculFY />}></Route>

        <Route path="/class-teacher/FY/student-table" element={<FYStudent />}></Route>
        <Route path="/class-teacher/FY/add-student-list" element={<FYAddList />}></Route>
        <Route path="/studentlist/FY/edit/:id" element={<FYEditStudentlist />}></Route>
        
        <Route path="/class-teacher/FY/assign-1stSem" element={<FYAssignST1stPage />}></Route>
        <Route path="/class-teacher/FY/assign-2ndSem" element={<FYAssignST2ndPage />}></Route>
        
        <Route path="/class-teacher/FY/class-detentionlist" element={<FYDetentionPage />}></Route>
        <Route path="/class-teacher/FY/add-detentionlist" element={<FYAddDetentionList />}></Route>
        <Route path="/detentionlist/FY/edit/:id" element={<FYEditDetentionlist />}></Route>

        <Route path="/class-teacher/FY/class-feedback" element={<FYFeedbackPage />}></Route>
        <Route path="/class-teacher/FY/add-feedbacklist" element={<FYAddFeedbackList />}></Route>
        <Route path="/feedbacklist/FY/edit/:id" element={<FYEditFeedbacklist />}></Route>
        <Route path="/class-teacher/FY/profile" element={<FYClassProfilePage />}></Route>
        


        {/* class teacher Routes Second Year  */}
        <Route path="/class-teacher/SY/dashboard" element={<ClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/SY/add-achievement" element={<AddAchievement />}></Route>
        <Route path="/CT/SY/edit/:id" element={<EditAchievement/>}></Route>

        <Route path="/class-teacher/SY/classfaculty" element={<ClassFaculty />}></Route>

        <Route path="/class-teacher/SY/student-table" element={<Student />}></Route>
        <Route path="/class-teacher/SY/add-student-list" element={<AddList />}></Route>
        <Route path="/studentlist/SY/edit/:id" element={<EditStudentlist />}></Route>
        
        <Route path="/class-teacher/SY/assign-3rdSem" element={<AssignST3rdPage />}></Route>
        <Route path="/class-teacher/SY/assign-4thSem" element={<AssignST4thPage />}></Route>
        
        <Route path="/class-teacher/SY/class-detentionlist" element={<DetentionPage />}></Route>
        <Route path="/class-teacher/SY/add-detentionlist" element={<AddDetentionList />}></Route>
        <Route path="/detentionlist/SY/edit/:id" element={<EditDetentionlist />}></Route>

        <Route path="/class-teacher/SY/class-feedback" element={<FeedbackPage />}></Route>
        <Route path="/class-teacher/SY/add-feedbacklist" element={<AddFeedbackList />}></Route>
        <Route path="/feedbacklist/SY/edit/:id" element={<EditFeedbacklist />}></Route>
        <Route path="/class-teacher/SY/profile" element={<ClassProfilePage />}></Route>
        
        
        {/* class teacher Routes Third Year  */}
        <Route path="/class-teacher/TY/dashboard" element={<TYClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/TY/add-achievement" element={<TYAddAchievement />}></Route>
        <Route path="/CT/TY/edit/:id" element={<TYEditAchievement/>}></Route>

        <Route path="/class-teacher/TY/classfaculty" element={<TYClassFaculty />}></Route>

        <Route path="/class-teacher/TY/student-table" element={<TYStudent />}></Route>
        <Route path="/class-teacher/TY/add-student-list" element={<TYAddList />}></Route>
        <Route path="/studentlist/TY/edit/:id" element={<TYEditStudentlist />}></Route>
        
        <Route path="/class-teacher/TY/assign-5thSem" element={<TYAssignST5thPage />}></Route>
        <Route path="/class-teacher/TY/assign-6thSem" element={<TYAssignST6thPage />}></Route>
        
        <Route path="/class-teacher/TY/class-detentionlist" element={<TYDetentionPage />}></Route>
        <Route path="/class-teacher/TY/add-detentionlist" element={<TYAddDetentionList />}></Route>
        <Route path="/detentionlist/TY/edit/:id" element={<TYEditDetentionlist />}></Route>

        <Route path="/class-teacher/TY/class-feedback" element={<TYFeedbackPage />}></Route>
        <Route path="/class-teacher/TY/add-feedbacklist" element={<TYAddFeedbackList />}></Route>
        <Route path="/feedbacklist/TY/edit/:id" element={<TYEditFeedbacklist />}></Route>
        <Route path="/class-teacher/TY/profile" element={<TYClassProfilePage />}></Route>
        


        {/* HOD Routes */}
        <Route path="/HOD/Dashbord" element={<HODDashbord />}></Route>
        <Route path="/HOD/Dashbord/SY-Achievements" element={<SYAchievementPage/>}></Route>
        <Route path="/HOD/Dashbord/TY-Achievements" element={<TYAchievementPage />}></Route>

        <Route path="/HOD/Faculty-Details" element={<FacultyDetails />}></Route>
        <Route path="/HOD/Faculty-CR" element={<FacultyCR />}></Route>

        <Route path="/HOD/assign-class-teacher" element={<AssignClassTeacher />}></Route>

        <Route path="/HOD/FY-Students" element={<FYStudentPage />}></Route>
        <Route path="/HOD/SY-Students" element={<SYStudentPage />}></Route>
        <Route path="/HOD/TY-Students" element={<TYStudentPage />}></Route>

        <Route path="/HOD/FY-Detention" element={<HODFYDetentionPage />}></Route>
        <Route path="/HOD/SY-Detention" element={<HODSYDetentionPage />}></Route>
        <Route path="/HOD/TY-Detention" element={<HODTYDetentionPage />}></Route>

        <Route path="/HOD/FY-Feedback" element={<HODFYFeedbackPage />}></Route>
        <Route path="/HOD/SY-Feedback" element={<HODSYFeedbackPage />}></Route>
        <Route path="/HOD/TY-Feedback" element={<HODTYFeedbackPage />}></Route>
        <Route path="/HOD/My-Profile" element={<HODProfile />}></Route>
        <Route path="/HOD/Facylty-Leave" element={<FacyltyLeave />}></Route>
        <Route path="/HOD/edit-leave/:id" element={<EditHODleave />}></Route>


        {/* <Route path="/SignUp" element={<SignUpPage />}></Route> */}

      </Routes>
    </>
  );
};
export default ConfigRoutes;