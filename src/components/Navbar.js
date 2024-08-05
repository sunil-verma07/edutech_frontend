import React from "react";
import {
  Avatar,
  Flex,
  Container,

} from "@chakra-ui/react";

import { IoSunnySharp } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <Flex position="absolute" top="5" right="5">
      <Container
        backgroundColor="#1D2125"
        borderRadius="100px"
        h="10vh"
        w="20vw"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="4"
      >
        <Container
        w="8vw"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginLeft="2vw"
      >
        <IoSunnySharp size="24" color="#B6C2CF" cursor="pointer"/>
        <BiHelpCircle size="24" color="#B6C2CF" cursor="pointer"/>
        </Container>

        <Container
          w="12"
          h="12"
          borderRadius="50%"
          backgroundColor="#fff"
          p="1"
          cursor="pointer"
        >
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

        </Container>
      </Container>
    </Flex>
  );
};

export default Navbar;
