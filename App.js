import React from 'react';
import ServerData from '../api/ServerData';
import StudentList from './StudentList';
import CourseList from './CourseList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            courses:[],
            students:[],
            UserID:localStorage.getItem('userid'),
            userName:localStorage.getItem('userName'),
            rememberMe:localStorage.getItem('rememberMe'),
            token:localStorage.getItem('token'),
            selectedCourse:0,
            ExamID:''

        };
        
       
    }
 
    componentDidMount()
    {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('token') : '';
        this.GetCourses();;
      
    }

    GetCourses= async ()=>{
        await ServerData.get('/GetCourses/'+this.state.token+"/"+this.state.UserID)
        .then((res)=>{
            this.setState({
                courses: res.data.Exams,
                selectedCourse:res.data.Exams[0].CourseID, 
                ExamID:res.data.Exams[0].ExamID
            }); 
        
        });
        this.GetStudents();
    }

    GetStudents= async (ExamID=this.state.ExamID)=>{
        var result=  ServerData.get('/GetStudentsInCourseExam/'+this.state.token+"/"+this.state.UserID+"/"+ExamID)
        .then((res)=>{
            this.setState({
                students: res.data.CourseParticipant,
            }); 
        });
    }

    changeCourse=(e)=>{
        this.GetStudents(e);
    }

    render(){
        return(
            <div className="ui container" style ={{marginTop:'10px',flex: 1,textAlign: 'center'}}>
                <div className="ui segment">
                    <div className="ui header" style={{marginBottom:"60px"}}>
                        Hello {this.state.userName}
                    </div>
                </div>
          
 
                <div style={students}>
                    <StudentList students={this.state.students}/>
                </div>
                <div style={courses}>
                    <CourseList 
                    courses={this.state.courses} 
                    changeCourse={this.changeCourse}
                    />
                    </div>
                </div>
        );
    }
}

const students={
    float:"left" ,width:"500px",height:"100px", margin:"20px"
}
const courses={
    float:"right",width:"200px",height:"100px", margin:"10px"
}
export default App;