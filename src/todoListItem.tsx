import React from 'react';
import './index.css';

interface TodoListItemProps {
  title: string;
  description: string;
  [key: string]: any;
}


class TodoListItem extends React.Component<TodoListItemProps>{
  render(){
    const {
      title,
      description,
      ...props
    } = this.props;
    return (
      <div>
        <div className="todoListItem" {...props}>
          <div className="title">Title: {title}</div>
          <div className="description">Desc: {description}</div>
        </div>
      </div>
    );
  }
}

export default TodoListItem;