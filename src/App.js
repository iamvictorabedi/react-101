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
render(){
  return (
    <div className="App">
      <header className="App-header">
        <Hello students= {this.state.students}/>
        <AddStudent plusStudent= {this.plusStudent}/>
      </header>
    </div>
  );
}
}

export default App;
