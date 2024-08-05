import React from 'react'
import { Box,Container ,Input, useDisclosure} from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";
import { Button } from '@chakra-ui/react'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoNorthStar } from "react-icons/go";


const BottomSearchBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box 
   pos="absolute"
   bottom="0"
   h="25vh"
   marginTop="2.5vh"
   borderTopRadius={ "30px"}
   w={"70vw"}
   backgroundColor="#1D2125"
   display="flex"
   justifyContent="space-around"
   alignItems="center"   
   zIndex="100"
   >


<Button onClick={onOpen} leftIcon={<IoChatboxEllipsesOutline />} colorScheme='#101214' variant='solid'>
    View Chat
  </Button>


    <Container borderRadius="100px" w="60%" h="10vh" backgroundColor="#101214" display="flex">

        <Container flex="1" backgroundColor="#B6C2CF" borderLeftRadius="100px">

        </Container>
        <Input color="#B6C2CF" p="2" outline="none" flex="4" backgroundColor="#101214"/>
        <Box borderRadius="50%" cursor="pointer" backgroundColor="#B6C2CF" h="8vh" w="8vh" m="1vh" display="flex" justifyContent="center" alignItems="center">
        <FaArrowRight color="#101214" size="20"/>

        </Box>

    </Container>

    <Button leftIcon={<GoNorthStar />} colorScheme='#101214' variant='solid'>
    Notebook guide
  </Button>



   </Box>
  )
}

export default BottomSearchBar