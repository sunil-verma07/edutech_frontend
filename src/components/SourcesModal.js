import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Container,
  ModalBody,
  ModalCloseButton,
  Text
} from "@chakra-ui/react";
import { FaRegFilePdf } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { GrCopy } from "react-icons/gr";
import { MdAddToDrive } from "react-icons/md";

const SourcesModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        w="100vw"
        h="100vh"
        position="relative"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent
          backgroundColor="#1D2125"
          p="4"
          w="15vw"
          borderRadius="20px"
          h="40vh"
          position="absolute"
          top="30vh"
          left="42.5vw"
        >
          <ModalHeader color="#B6C2CF" fontSize="24">Upload From</ModalHeader>
          <ModalCloseButton
            color="#B6C2CF"
            position="absolute"
            right="4"
            top="4"
          />
          <ModalBody>
            <Container display="flex" alignItems="center" margin="2" marginTop="4">
              <FaRegFilePdf color="#B6C2CF" size="20"/>
              <Text color="#B6C2CF" fontSize="18" marginLeft="6">PDF</Text>
            </Container>

            <Container display="flex" alignItems="center" margin="2" marginTop="4">
              <TiDocumentText color="#B6C2CF" size="20"/>
              <Text color="#B6C2CF" fontSize="18" marginLeft="6">Text</Text>
            </Container>

            <Container display="flex" alignItems="center" margin="2" marginTop="4">
              <GrCopy color="#B6C2CF" size="20"/>
              <Text color="#B6C2CF" fontSize="18" marginLeft="6">Copied Text</Text>
            </Container>

            <Container display="flex" alignItems="center" margin="2" marginTop="4">
              <MdAddToDrive color="#B6C2CF" size="20"/>
              <Text color="#B6C2CF" fontSize="18" marginLeft="6">Drive</Text>
            </Container>


          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};

export default SourcesModal;
