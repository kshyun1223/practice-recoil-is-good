/* libs */
import React from "react"
import { useRecoilState } from "recoil"

/* recoilStore */
import { todoListFilterState } from "../../recoil/recoilStore"


export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState) // 리코일 setter 호출

  /* 드롭다운 버튼 */
  const updateFilter = ({target: {value}}) => {
    setFilter(value) // 리코일 setter 실행
  }

  return (
    <>
      <div>TodoListFilters</div>
      <>필터: </>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">모든 할 일</option>
        <option value="Show Completed">완료된 할 일</option>
        <option value="Show Uncompleted">아직 하지 않은 일</option>
      </select>
    </>
  )
}