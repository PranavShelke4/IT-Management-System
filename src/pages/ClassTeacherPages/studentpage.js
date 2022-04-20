import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import StudentTable from "../../components/ClassTeacher/Students/students";

function studentPage(){
    return (
    <div>
        <ClassNavbar />
        <StudentTable />
    </div>
    );
}

export default studentPage;