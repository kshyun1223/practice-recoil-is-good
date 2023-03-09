/* libs */
import { atom, selector } from 'recoil'


/* 할 일 목록을 담는 저장소 */
export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

/* 필터 항목을 담는 저장소 */
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})


/* 필터링 된 목록을 만들어서 반환하는 함수 */
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

/* 저장소 내용에 대한 통계를 내서 반환하는 함수 */
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    /* 모든 할 일 */
    const todoList = get(todoListState)
    const totalNum = todoList.length
    /* 완료된 할 일 */
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    /* 아직 하지 않은 일 */
    const totalUncompletedNum = totalNum - totalCompletedNum
    /* 완료한 비율 */
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})