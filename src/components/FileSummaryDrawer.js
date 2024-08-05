import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  chakra,
  Box,
  Heading
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";

const StyledBox = chakra(Box, {
  baseStyle: {
    overflowY: 'scroll',
    height: '200px',
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#9FADBC',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    '&::-webkit-scrollbar-corner': {
      background: '#f1f1f1',
    },
  },
});

const FileSummary = ({ isOpen, onClose }) => {
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
          backgroundColor="#38414A"
          p="4"
          w="80vw"
          borderRadius="20px"
          h="80vh"
          position="absolute"
          top="10vh"
          left="10vw"
        >
          <ModalHeader color="#B6C2CF" fontSize="24">
            File Name
          </ModalHeader>
          <ModalCloseButton
            color="#B6C2CF"
            position="absolute"
            right="4"
            top="4"
          />
          <ModalBody w="full" h="full">
            <Flex display="flex" w="full" flexDirection="row" h="full" p="8">
              <StyledBox
                flex="1"
                backgroundColor="rgba(204,224,255,0.3)"
                h="full"
                 p="8" overflowY="auto"
                 color="#85B8FF"
                 borderRadius="20px"
              >
                <Heading display="flex" alignItems="center" fontSize="24" fontWeight="semibold"><BsStars color="#85B8FF" /><Text color="#85B8FF"> Source Guide</Text></Heading>
                <Heading display="flex" alignItems="center" fontSize="20" fontWeight="semibold"><Text color="#85B8FF" my="4">Summary</Text></Heading>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quam soluta eveniet nesciunt, sapiente delectus eius temporibus reprehenderit ut possimus eum provident perspiciatis expedita exercitationem animi. Impedit, non earum! Odio, ad tenetur assumenda at suscipit ea eum provident, obcaecati beatae culpa doloribus quia neque aspernatur! Facilis autem neque reprehenderit illum temporibus id, error nemo beatae repellendus consequuntur deserunt facere veniam aliquam minus modi nisi doloribus ex a? Mollitia adipisci voluptate delectus asperiores ab dolore nihil, vero inventore ducimus sunt autem corporis ipsum iure velit, quasi tempore quia provident voluptates molestias esse? Omnis, voluptatem debitis sit maxime optio quia similique natus.
              </StyledBox>

              <StyledBox flex="1" h="full" p="8" overflowY="auto" color="#fff">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi at tempore natus, itaque eveniet minus porro aliquid tenetur doloribus nobis asperiores repellat excepturi facilis illum laudantium, quidem laboriosam distinctio. Similique minima, consequatur nihil error ab in harum, fuga eius quam at, ipsam vel tempore officia! Quo, atque voluptatum. Quas numquam, sit nam explicabo, soluta incidunt quidem pariatur eum labore odit doloremque repellat eligendi odio voluptatibus similique! Optio recusandae ea voluptate quisquam sapiente quibusdam nulla veritatis accusantium amet ullam nesciunt exercitationem voluptas aut distinctio, facilis dicta reiciendis, atque totam error delectus repellendus labore mollitia ipsum sequi. Unde eveniet eum cumque perferendis a eligendi sed, saepe, omnis libero iste animi soluta iure, quos dicta dolorem ratione consequatur deleniti quasi! Aliquam inventore quo minus, ut neque ipsam totam libero atque laboriosam temporibus dolorem magni voluptatum fugiat numquam eius repudiandae dolorum. Est, omnis. Labore, aut quis cum ratione sequi tenetur quam quas, suscipit quaerat ipsa, pariatur commodi iure consequatur? Aliquam illo, fugiat aut ducimus maiores explicabo nemo praesentium saepe alias voluptatibus! Porro laborum esse molestias in voluptates? Cum, deserunt eius quis minima molestiae quaerat saepe aliquam dolorum voluptatibus, vitae corrupti, voluptates quam iste nihil quas. Excepturi maxime voluptatum ipsam, impedit possimus accusantium odio.

              </StyledBox>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FileSummary;
