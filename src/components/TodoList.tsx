import React from "react";
import { useRecoilValue } from "recoil"
import { todoListState } from "../recoil/recoilStore";
import TodoItem from "./TodoList/TodoItem"
import TodoItemCreator from "./TodoList/TodoItemCreator";
import { TodoListFilters } from "./TodoList/TodoListFilters";
import { TodoListStats } from "./TodoList/TodoListStats";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}