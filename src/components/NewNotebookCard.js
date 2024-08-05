import React from "react";
import { Flex, Heading, Container } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewNotebookCard = () => {

    const navigate = useNavigate();
    return (
    <Container
      border="1px"
      borderRadius="20px"
      borderColor="#454F59"
      w="15rem"
      h="15rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="3"
      margin="1rem"
      cursor="pointer"
      onClick={()=>navigate('/notebook')}
    >
      <Flex flex="1" display="flex" justifyContent="space-between"></Flex>

      <Flex
        flex="2"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        <FaPlus size="40" color="#B6C2CF" cursor="pointer" />
        <Heading color="#fff" fontSize="1.5rem" marginTop="1rem">
          New Notebook
        </Heading>
      </Flex>
    </Container>
  );
};

export default NewNotebookCard;
