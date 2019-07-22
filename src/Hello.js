import React, {Component} from 'react';

class Hello extends Component{
    render(){
        const {students} = this.props;
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
} 
  
export default Hello;