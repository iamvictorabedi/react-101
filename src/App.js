import React, {Component} from 'react';
import Hello from './Hello'
class App extends Component {
  state = {
   students: [
     {name: 'Sally', age: 5, belt: 'Black', id: 1},
     {name: 'Kings', age: 5, belt: 'Yello', id: 2},
     {name: 'Pedro', age: 5, belt: 'Pink', id: 3}]
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <Hello students={this.state.students} />
      </header>
    </div>
  );
}
}

export default App;
