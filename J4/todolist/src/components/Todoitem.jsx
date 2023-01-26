import React from 'react';

function Todoitem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.task.isCompleted} />
      <span>{props.task.title}</span>
    </div>
  );
}

export default Todoitem;
