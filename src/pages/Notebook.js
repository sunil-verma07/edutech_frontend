import React from 'react'
import Sidebar from '../components/Sidebar'
import { Flex } from '@chakra-ui/react'
import BottomSearchBar from '../components/BottomSearchBar'
import ChatWindow from '../components/ChatWindow.js'

const Mainpage = () => {
  return (
    <Flex w="100%" h="100vh" display="flex" flexDir="row">
    <Flex flex="1"  backgroundColor="#101214">
    <Sidebar />
    </Flex>

    <Flex flex="5" backgroundColor="#101214" display="flex" flexDirection="col">

      <Flex flex="4"backgroundColor="#101214" >
      <ChatWindow/>


      </Flex>
      <BottomSearchBar />
  
    </Flex>
  </Flex>
  )
}

export default Mainpage