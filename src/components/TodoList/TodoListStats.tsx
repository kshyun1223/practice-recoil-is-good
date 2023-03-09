/* libs */
import React from "react"
import { useRecoilValue } from "recoil"

/* recoilStore */
import { todoListStatsState } from "../../recoil/recoilStore"

/* 상단의 통계 */
export default function TodoListStats() {
  /* 리코일 저장소의 값을 구독 */
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted * 100)

  return (
    <>
      <ul> TodoListStats
        <li>모든 할 일: {totalNum}</li>
        <li>완료된 할 일: {totalCompletedNum}</li>
        <li>아직 하지 않은 일: {totalUncompletedNum}</li>
        <li>완료한 비율: {formattedPercentCompleted}</li>
      </ul>
    </>
  )
}