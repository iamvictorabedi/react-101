import React, {Component} from 'react';
import Hello from './Hello'
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
render(){
  return (
    <div className="App">
      <header className="App-header">
        <Hello students= {this.state.students}/>
      </header>
    </div>
  );
}
}

export default App;
