import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  useDisclosure,
  Checkbox,
} from "@chakra-ui/react";
import FileSummaryDrawer from "./FileSummaryDrawer.js";

const SideBarItem = ({ icon, title, description, active, navSize }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex mt={2} flexDir="column" w="100%" alignItems={"flex-start"}>
      <Menu placement="right">
        <Link
          backgroundColor={active && "#B6C2CF"}
          p={2}
          borderRadius={8}
          w={navSize === "large" && "100%"}
        >

            
          <MenuButton w="100%" onClick={onOpen} >
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#101214" : "gray.500"}
              />
              <Text
                color={active ? "#101214" : "#B6C2CF"}
                ml={5}
                display={navSize === "small" ? "none" : "flex"}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <Checkbox size="xl" colorScheme="red">
          Checkbox
        </Checkbox>
      </Menu>
      <FileSummaryDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default SideBarItem;
