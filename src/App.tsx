import React from 'react'
import {Container, Flex} from '@chakra-ui/react'
import Header from './components/header'
import Body from './components/body'

function App() {
  return (
    <Container maxW="container.lg" p="8">
      <Flex direction={{md: 'column'}}>
        <Header />
        <Body />
      </Flex>
    </Container>
  )
}

export default App
