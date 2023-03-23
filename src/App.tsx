import React, {Component} from 'react';
import './index.css';
import TodoListItem from './todoListItem'
import How2Us from './use.tsx'

interface Todo {
  title: string,
  description: string
}

class App extends Component {
  state = {
    todoList: [] as any
  }
  render(){
    return (
      <div className="App">
        <h1>TodoMaster</h1>
        <form className="form" onSubmit={ (e: React.FormEvent<HTMLFormElement>): void => {
          e.preventDefault();

          const titleElement = (e.target as HTMLFormElement).elements[("title" as any)] as HTMLInputElement;
          const descriptionElement = (e.target as HTMLFormElement).elements[("description" as any)] as HTMLInputElement;
          if (!titleElement.value && !descriptionElement.value) {
            return
          }
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
          <label htmlFor="title">Title</label>
          <input id="title" placeholder="" />
          <span className="separator"> </span>
          <label htmlFor="description">description</label>
          <textarea id="description" placeholder="" />
          <span className="separator"> </span>
          <div className="form-button">
            <button type="submit">Register</button>
          </div>
          
        </form>
        <div>
          {this.state.todoList.map((todo: Todo) => (
            <div>
              <TodoListItem key={todo.title} title={todo.title} description={todo.description} 
                onClick={() => {
                  let result = window.confirm('Do you want to delete?');
                  if (result) {
                    this.setState({
                      todoList: this.state.todoList.filter((x: any) => x !== todo)
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