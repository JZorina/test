import React from 'react';

class CourseCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
           color:''
           
        }
    }

    changeCourse=(e)=>{
        this.props.changeCourse(this.props.course.ExamID);
    }
    render(){
        return(
            <a className="ui card" style={{width:"200px"}} onClick={this.changeCourse}>
                <div className="content"  >
                    <div className="header"> course name :{this.props.course.ExamName}</div>
                    <div className="meta">
                        <span className="date">Teacher :{this.props.course.ExamTeacher}</span>
                    </div>
                    <div className="description">
                        CourseID :{this.props.course.CourseID}
                    </div>
                </div>
            </a>
        )
    }
}
       


  
export default CourseCard;