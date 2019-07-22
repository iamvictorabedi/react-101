import React, {Component} from 'react'
class AddStudent extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange =(e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
    }
    handleSubmit = (e) => {
    e.preventDefault();
    console.log('form', this.state);
    this.props.plusStudent(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' onChange={this.handleChange}></input>
                    <label htmlFor='age'>Age:</label>
                    <input id='age' type='text' onChange={this.handleChange}></input>  
                    <label htmlFor='belt'>Belt:</label>
                    <input id='belt' type='text' onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}
export default AddStudent;