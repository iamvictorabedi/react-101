import React, {Component} from 'react';
import Hello from './Hello'
class App extends Component {
  state = {
   user: [
     {
    name: 'Sally',
    age: 5,
    belt: 'Black'
  },
  {
    name: 'Kings',
    age: 5,
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
        <Hello name="abedi" age='5' belt='black'/>
      </header>
    </div>
  );
}
}

export default App;
