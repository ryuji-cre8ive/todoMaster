import React, {Component} from 'react';
import './index.css';
import TodoListItem from './todoListItem'
import How2Us from './use.js'

class App extends Component {
  state = {
    todoList: []
  }
  render(){
    return (
      <div className="App">
        <h1>TodoMaster</h1>
        <form className="form" onSubmit={ e => {
          e.preventDefault();

          const titleElement = e.target.elements["title"];
          const descriptionElement = e.target.elements["description"];

          this.setState({
            todoList: this.state.todoList.concat({
              title: titleElement.value,
              description: descriptionElement.value
            })
          },
          () => {
            titleElement.value = "";
            descriptionElement.value = "";
          });
        }}>
          <label for="title">Title</label>
          <input id="title" placeholder="" />
          <span class="separator"> </span>
          <label for="description">description</label>
          <textarea id="description" placeholder="" />
          <span class="separator"> </span>
          <div className="form-button">
            <button type="submit">Register</button>
          </div>
          
        </form>
        <div>
          {this.state.todoList.map(todo => (
            <div>
              <TodoListItem key={todo.title} title={todo.title} description={todo.description} 
                onClick={() => {
                  let result = window.confirm('Do you want to delete?');
                  if (result) {
                    this.setState({
                      todoList: this.state.todoList.filter(x => x !== todo)
                    })
                  } else {
                    return;
                  }
                }}
              />
            </div>
          )
          )}
        </div>
        <div>
          <How2Us />
        </div>
      </div>
    );
  }
}

export default App;
