/* libs */
import React, { useState }from "react"
import { useSetRecoilState } from "recoil"

/* recoilStore */
import { todoListState } from "../../recoil/recoilStore"

/* 새 항목을 입력하는 input */
export default function TodoItemCreator() {
  /* 임시 저장소 */
  const [inputValue, setInputValue] = useState('')
  
  /* 리코일 setter 호출 */
  const setTodoList = useSetRecoilState(todoListState)

  /* 추가 버튼 */
  const addItem = () => {
    setTodoList((oldTodoList) => [ // 리코일 setter 실행
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('') // 임시 저장소 초기화
  }

  /* 입력 내용을 실시간으로 임시 저장소에 반영 */
  const onChange = ({target: {value}}) => {
    setInputValue(value)
  }

  return (
    <div>
      <br /><div>TodoItemCreator</div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>추가</button>
    </div>
  )
}

/* 고유한 Id 생성을 위한 유틸리티 */
let id = 0
function getId() {
  return id++
}