import React from 'react'
import { Flex ,Heading,Container } from '@chakra-ui/react'
import NotebookCard from '../components/NotebookCard.js'
import NewNotebookCard from '../components/NewNotebookCard.js'

const LandingScreen = () => {
  return (
    <Flex w="100%" h="100vh" display="flex" flexDir="row">
    <Flex flex="1"  backgroundColor="#101214">
    </Flex>

    <Flex flex="5" backgroundColor="#101214" display="flex" flexDirection="column" paddingTop="20vh">
    <Heading color="#fff" fontSize="2rem">Notebooks</Heading>

    <Container display="flex" flexWrap="wrap">
        <NewNotebookCard/>
        <NotebookCard/>
        <NotebookCard/>

    </Container>
  
    </Flex>
  </Flex>
  )
}

export default LandingScreen