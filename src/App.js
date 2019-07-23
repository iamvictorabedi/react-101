import React, {Component} from 'react';
import Hello from './Hello'
import AddStudent from './AddStudent';
class App extends Component {
  state = {
   students: [
     {
    name: 'Sally',
    age: 5,
    belt: 'Black'
  },
  {
    name: 'Kings',
    age: 30,
    belt: 'Yello'
  },
  {
    name: 'Pedro',
    age: 5,
    belt: 'Pink'
  }]
}
  plusStudent =(student) => { 
    student.id = Math.random();
  let students = [...this.state.students, student];
  this.setState({
  students: students
  })}

  deleteStudent= (id) => {
    let students = this.state.students.filter(student => {
      return student.id !== id;
    });
    this.setState({
      students: students
    })
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <Hello deleteStudent= {this.deleteStudent} students= {this.state.students}/>
        <AddStudent plusStudent= {this.plusStudent}/>
      </header>
    </div>
  );
}
}

export default App;
