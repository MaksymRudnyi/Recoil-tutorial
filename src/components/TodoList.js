import React from 'react';
import {useRecoilValue} from 'recoil';

import { filteredTodoListState } from '../atoms';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
  
    return (
      <>
        <TodoListStats /> 
        <TodoListFilters />
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }

  export default TodoList;