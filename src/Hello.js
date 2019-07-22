import React from 'react';
//sample functional ui components
const Hello = ({students}) => {
    //{{}} descructuring 
    //functional components
        const studentsList = students.map( student => {
            return (
                <div className='hello' key={student.id}>
                <div>I am {student.name}</div>
                <div>Aged: {student.age}</div>
                <div>My belt color is {student.belt}</div>
                </div>
            )
        })
        return (
<div className="studentsList">
    {studentsList}
</div>
            )
    }
  
export default Hello;