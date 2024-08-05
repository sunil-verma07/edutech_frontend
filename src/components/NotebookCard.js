import React from 'react'
import { Flex ,Heading,Container } from '@chakra-ui/react'
import { RxDotsVertical } from "react-icons/rx";

const NotebookCard = () => {
  return (
    <Container border="1px" cursor="pointer" margin="1rem" borderRadius="20px" backgroundColor="#2C333A" borderColor="#454F59" w="15rem" h="15rem" display="flex" alignItems="space-between" flexDirection="column" p="3">
     <Flex flex="1" display="flex" justifyContent="space-between">
      <Container backgroundColor="#000" borderRadius="50%" w="30px" h="30px"></Container>
     <RxDotsVertical size="24" color="#B6C2CF" cursor="pointer"/>

     </Flex>
     <Flex flex="2" flexDirection="column" justifyContent="space-between">
        <Heading color="#fff" fontSize="1.5rem" w="10rem">Notebook name</Heading>
        <Heading color="#fff" fontSize="0.9rem" w="10rem">31 June 2024 . 8 Sources</Heading>

     </Flex>
    </Container>
  )
}

export default NotebookCard