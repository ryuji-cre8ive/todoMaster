import React from 'react';
import './index.css';

class TodoListItem extends React.Component{
  render(){
    const {
      title,
      description,
      ...props
    } = this.props;
    return (
      <div>
        <div className="todoListItem" {...props}>
          <dev className="title">Title: {title}</dev>
          <dev className="description">Desc: {description}</dev>
        </div>
      </div>
    );
  }
}

export default TodoListItem;