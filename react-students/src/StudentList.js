import React, { Component } from 'react';
import axios from 'axios'
import Student from './Student'

//recoger data de route 'localhost:3001/students' - AXIOS
//con esos datos cambiamos el state - setState
// 

class StudentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStudent: "",
            students: []
        }
    }
    componentDidMount() { //fetch
        axios.get("/students") //localhost:3001 package.json proxy
        .then(response => {
            
            this.setState({students: response.data})
        })
    }
    render() {
        let thisStudent = this.state.students
        .filter((student) => student.firstName === "Aaron")
        .map(student => {
    
            return(
                
                <Student firstName={student.firstName}
                            lastName={student.lastName}
                />
            )
        })
   
        return (
            <div>
            {/* {this.state.students.map((student) => {
                return <li>{student.firstName}</li>
            })} */}
            {/* <Student {...thisStudent}/> */}
            { thisStudent}
            </div>
        )
    }
}

export default StudentList