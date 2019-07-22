import React from 'react';
//sample functional ui components
const Hello = ({students}) => {
    //{{}} descructuring 
    //functional components
        return (
<div className="studentsList">
    {
        students.map( student => {
           return student.age > 20? (
                <div className='hello' key={student.id}>
                <div>I am {student.name}</div>
                <div>Aged: {student.age}</div>
                <div>My belt color is {student.belt}</div>
                </div>
           ): null
        })
    }
    </div>)
    }
  
export default Hello;