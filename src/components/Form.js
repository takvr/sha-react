import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({description: ""})
  }
  
  render() {
      return (
          <div className="form">
            <form className="myForm" onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} value={this.state.description} placeholder="New task" />
              <button type="submit">Add Item</button>
            </form>          
          </div>
      );
  }
}

export default Form;