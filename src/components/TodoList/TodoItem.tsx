/* libs */
import React from "react"
import { useRecoilState } from "recoil"

/* recoilStore */
import { todoListState } from "../../recoil/recoilStore"

/* 개별 아이템을 담는 컨테이너 */
export default function TodoItem({item}) {
  /* 리코일 setter 호출 */
  const [todoList, setTodoList] = useRecoilState(todoListState)
  
  /* 리코일 저장소에서 현재 항목의 인덱스를 검색 */
  const index = todoList.findIndex((listItem) => listItem === item)

  /* 입력 내용을 실시간으로 리코일 저장소에 반영 */
  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    }) // 입력이 반영된 새로운 배열

    setTodoList(newList) // 리코일 저장소를 새로 만든 배열로 교체
  }

  /* 체크박스 */
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    }) // 체크가 반영된 새로운 배열

    setTodoList(newList) // 리코일 저장소를 새로 만든 배열로 교체
  }

  /* 삭제 버튼 */
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index) // 삭제가 반영된 새로운 배열
    setTodoList(newList) // 리코일 저장소를 새로 만든 배열로 교체
  }

  return (
    <div>
      <div>할 일 {index+1} {" "}</div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>삭제</button>
    </div>
  )
}

/* 할 일 변경에 사용되는 함수 */
function replaceItemAtIndex(arr, index, newValue) {
  console.log(arr)
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

/* 할 일 삭제에 사용되는 함수 */
function removeItemAtIndex(arr, index) {
  console.log(arr)
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}