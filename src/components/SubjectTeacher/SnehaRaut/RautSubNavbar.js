//import React, { useContext } from "react";
import "./RautSubNavbar.css";
import {Link} from 'react-router-dom';
import RautMadamImg from "../../../assets/img/raut-madam.jpg"
//import { AuthContext } from "../../functions/Auth"
//import firebaseConfig from "../../functions/fire"


function eventHandle() {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

function subNavbar() {
  return (
    <div>
      <div className="sidebar close">
        <div className="logo-details">
          <img alt=""
            className="gpa_logo" 
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span className="logo_name">GPA</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/subject-teacher/sneha-raut/dashboard">
              <i className="bx bx-home-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/subject-teacher/sneha-raut/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="">
                <i className="bx bx-user"></i>
                <span className="link_name">Students</span>
              </Link>
              <i  onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link to="" className="link_name">
                Students
                </Link>
              </li>
              <li>
                <Link to="/subject-teacher/sneha-raut/FY-Students">First Year</Link>
              </li>
              <li>
                <Link to="/subject-teacher/sneha-raut/SY-Students">Second Year</Link>
              </li>
              <li>
                <Link to="/subject-teacher/sneha-raut/TY-Students">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/subject-teacher/sneha-raut/course">
              <i className="bx bx-book"></i>
              <span className="link_name">Course</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/subject-teacher/sneha-raut/course">
                Course
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0" >
              <i className="bx bx-file-find"></i>
              <span className="link_name">CPP Project</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0">
                CPP Project
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className="bx bxs-book-content"></i>
                <span className="link_name">Time Table</span>
              </Link>
              <i onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="#">
                Time Table
                </Link>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1chDe5cx6ljpuNmQ1nOH8MrPsq7F149MZ/view" target="_blank" rel="noopener noreferrer">First Year</a>
              </li>
              <li>
              <a href="https://drive.google.com/file/d/1w_1HrLTeJM02rtjA6pjyGuzv-2N-F7dp/view" target="_blank" rel="noopener noreferrer">Second Year</a>
               
              </li>
              <li>
              <a href="https://drive.google.com/file/d/1u9kw1RYBUUFIw8cKsDvTdHjid0yGAcol/view" target="_blank" rel="noopener noreferrer">Third Year</a>
                
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className="bx bx-food-menu"></i>
              <span className="link_name">Teaching / Lab Plan</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="#">
                 Teaching / Lab Plan
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className="bx bx-spreadsheet"></i>
              <span className="link_name">MSBTE Result</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="#">
                MSBTE Result
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className="bx bxs-user"></i>
                <span className="link_name">My Details</span>
              </Link>
              <i onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="#">
                My Details
                </Link>
              </li>
              <li>
                <Link to="#">CR</Link>
              </li>
              <li>
                <Link to="/subject-teacher/sneha-raut/profile">Profile</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/subject-teacher/sneha-raut/leave">
              <i className="bx bxs-comment-detail"></i>
              <span className="link_name">Leaves</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/subject-teacher/sneha-raut/leave">
                Leaves
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">
              <i className="bx bx-log-out"></i>
              <span className="link_name">Logout</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img alt="" src={RautMadamImg} />
              </div>
              <div className="name-job">
                <div className="profile_name">Mrs. Sneha D. Raut</div>
                <div className="job">Lecturer in IT</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={eventHandle}></i>
          <span className="text">Subject Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default subNavbar;