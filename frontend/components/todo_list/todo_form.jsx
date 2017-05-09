import React from 'react';
import uniqueId from '../../util/unique_id';


class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: "", title: "", body: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({id: uniqueId()});
    this.props.receiveTodo(this.state);
    this.setState({title: "", body: ""});
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleBody(event) {
    this.setState({body: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input type="text" onChange={this.handleTitle} value={this.state.title}/>
        </label>
        <label>Body:
          <input type="text" onChange={this.handleBody} value={this.state.body} ></input>
        </label>

        <button>Submit</button>
      </form>
    );
  }
}

window.NewTodo = NewTodo;

export default NewTodo;
