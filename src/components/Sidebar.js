import React from 'react';
import {
  Flex,
  IconButton,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
} from 'react-icons/fi';
import NavItem from '../components/NavItem';
import { MdLibraryAdd } from "react-icons/md";
import SideBarItem from './SideBarItem.js'
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function Sidebar() {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box
      pos="sticky"
      left="2"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={isOpen ? "30px" : "15px"}
      w={isOpen ? "200px" : "60px"}
      transition="width 0.3s ease"
      backgroundColor="#1D2125"
    >
      <Flex
        p={isOpen ? "5%" : "10%"}
        flexDir="column"
        w="100%"
        alignItems={"flex-start" }
        as="nav"
      >
        <IconButton
          background="none"
          color="#B6C2CF"
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={onToggle}
        />
        <NavItem navSize={isOpen ? "large" : "small"} icon={MdLibraryAdd} title="Add Sources" />

        <SideBarItem navSize={isOpen ? "large" : "small"} icon={BsFileEarmarkPdf} title="Pdf File" />

        
        
      </Flex>
    </Box>
  );
}
