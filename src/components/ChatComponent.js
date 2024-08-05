import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const ChatComponent = ({ from,text,isTyping }) => {
  return (
    <Flex
      display="flex"
      justifyContent={from === "user" ? "flex-end":"flex-start"}
      alignItems="center"
      backgroundColor="#101214"
      w="full"
      my="2"
    >
      <Box
        backgroundColor={from === "user" ? "rgba(56,65,74,0.4)" : "rgb(56,65,74)"}
        borderRadius="20px"
        minHeight="2.5rem"
        maxWidth="50vw"
        px="8"
        py="6"
      >
        {isTyping ? <div class="dots-3"></div> : text}
      </Box>
    </Flex>
  );
};

export default ChatComponent;
