import React, {Component} from 'react';

class Hello extends Component{
    render(){
        const {name, age, belt} = this.props.user;
        return (
<div className='hello'>
    <div>I am {name}</div>
    <div>Aged: {age}</div>
    <div>My belt color is {belt}</div>

</div>
            )
    }
} 
  
export default Hello;