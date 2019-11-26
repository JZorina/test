import React from 'react';
import CourseCard from './CourseCard';

const CourseList = (props)=>{
    const courses=props.courses.map((course)=>{
        return <CourseCard key={course.CourseID} course={course} changeCourse={props.changeCourse}/>
    });
    return <div>{courses}</div>
};

export default CourseList;