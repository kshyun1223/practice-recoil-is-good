import React from 'react'
import styled from 'styled-components'

import TodoList from './components/TodoList'

export default function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  )
}

const Container = styled.div`
`


