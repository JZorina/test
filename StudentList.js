import React from 'react';

class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    changeStatus=(student)=>{
      if(student.ParExamStatus<3){
            student.ParExamStatus+=1;
      }
      //i wanted to render a single row in every status change but didnt had enough time.
    } 
    
    render()
    {
        return(
            <div>
                <table  className="ui single line table">
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{this.props.students.map((student,key)=>{
                        return(
                            <tr key={key}>
                                <td data-labe ="ParId"> {student.ParId}</td>
                                <td data-labe ="ParExamStatus"> {student.ParExamStatus}</td>
                            </tr>
                        )})}
                    </tbody>
                </table >
            </div>
        );
    }
  
}


  
export default StudentList;