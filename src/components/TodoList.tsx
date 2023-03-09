/* libs */
import React from "react"
import { useRecoilValue } from "recoil"

/* recoilStore */
import { filteredTodoListState } from "../recoil/recoilStore"

/* components */
import TodoListStats from "./TodoList/TodoListStats"
import TodoListFilters from "./TodoList/TodoListFilters"
import TodoItemCreator from "./TodoList/TodoItemCreator"
import TodoItem from "./TodoList/TodoItem"

/* todo 기능 최상위 컨테이너 */
export default function TodoList() {
  /* 리코일 저장소의 값을 구독 */
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      <br /><div>TodoList</div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  )
}