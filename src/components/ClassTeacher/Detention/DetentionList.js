import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
//import './ExercisesList.css';

import Detentionlists from '../../../api/Detentionlist';

const Detentionlist = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.detentionlist.date}</td>
        <td>{props.detentionlist.description}</td>
        <td><a href={props.detentionlist.link}>{props.detentionlist.link}</a></td>
        
        <td>
            <Link to={"/detentionlist/edit/"+props.detentionlist._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteDetentionlist(props.detentionlist._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class DetentionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          detentionlists: []
        }

        this.deleteDetentionlist = this.deleteDetentionlist.bind(this);
    }

    componentDidMount() {
      Detentionlists.get('/get-detentionlists')
            .then(res => {
                this.setState({ detentionlists: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteDetentionlist(id) {
      Detentionlists.delete('/delete-detentionlist/' +id)
            .then(res => console.log(res.data));

        this.setState({ detentionlists: this.state.detentionlists.filter(el => el._id !== id)})
    }

    detentionlistsList() {
        return this.state.detentionlists.map(currentdetentionlist => {
            return <Detentionlist detentionlist={currentdetentionlist} deletedetentionlist={this.deleteDetentionlist} key={currentdetentionlist._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                <h3 className='fidoh3'>Pedelogy Activities</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>Year</th>
		                    <th>Link</th>
		                    <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.detentionlistsList()}
                    </tbody>
                </table>
                <Link to={'/class-teacher/add-detentionlist'}><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default DetentionList;

