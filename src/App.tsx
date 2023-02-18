import React from 'react'
import {Container, Flex, useColorModeValue} from '@chakra-ui/react'
import Header from './components/header'
import Body from './components/body'

function App() {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Container maxW="container.lg" p={[4, 8]} bgColor={bgColor}>
      <Flex direction={{base: 'column'}}>
        <Header />
        <Body />
      </Flex>
    </Container>
  )
}

export default App
