import React from 'react'
import { Container ,chakra,Box} from '@chakra-ui/react'
import ChatComponent from './ChatComponent.js'


const StyledBox = chakra(Box, {
    baseStyle: {
      overflowY: 'scroll',
      height: '200px',
      '&::-webkit-scrollbar': {
        width: '0px',
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

  
const ChatWindow = () => {
  return (
    <StyledBox w="70vw" h="60vh" mt="15vh" backgroundColor="#101214" overflowY="auto" color="#fff">
        <ChatComponent from="user" text="mbuecvqujehb"/>
        <ChatComponent from="bot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia culpa a iste beatae! Ab quibusdam iste ullam. Ullam voluptates enim nam accusantium cupiditate tempore voluptatum tenetur, provident, cumque voluptatem culpa assumenda hic nesciunt iste distinctio sit ipsum ipsa voluptatibus commodi sunt deserunt veritatis voluptate! Corporis sed, quas iste vel consectetur quisquam ab reiciendis odio in libero, velit ex perferendis nesciunt molestias eligendi ducimus, itaque ut eaque tempora quidem dolorem non odit commodi consequuntur. Magni ratione tempore optio earum beatae? Nihil dolores harum necessitatibus odit qui quaerat unde fuga. Minima quia voluptatem nesciunt soluta ipsa consequuntur, facere vel et iusto veniam blanditiis esse ratione aspernatur beatae quam? Maxime ea vitae eaque vero distinctio eum iure accusamus iusto sit id voluptatem illum nesciunt, autem non commodi similique fugiat iste in incidunt repudiandae impedit. Ipsa quibusdam unde laboriosam illum distinctio sint, blanditiis error corrupti quis ex dignissimos architecto necessitatibus sit fugiat rerum earum magnam et aliquam repellendus in quasi eius voluptates recusandae! Vero voluptate velit ea cupiditate adipisci quibusdam ut iste culpa, at eum eligendi excepturi quos nostrum delectus corrupti iure facere debitis! Neque quae repellendus delectus voluptatum repellat laboriosam eveniet quaerat maiores, quisquam totam officia! Temporibus perferendis voluptatibus est cumque voluptatem?"/>
        <ChatComponent from="user" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid quis est, praesentium neque atque et veritatis adipisci veniam distinctio quae dolores pariatur, blanditiis perferendis deleniti quaerat. Et, quod nemo.\"/>
        <ChatComponent from="bot" text="hsjb2idbhbsln  jhqecjb jbd nu  nbj w "/>
        <ChatComponent from="user" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam optio nam, atque facilis cumque minima! Suscipit ut adipisci officia consequatur illo est eos necessitatibus accusamus, provident recusandae neque optio ipsum possimus, dolor tempore laboriosam quae ex corporis fugit sed rerum. Consectetur, recusandae dolores animi assumenda fugiat, dignissimos rem asperiores autem qui officiis reprehenderit facilis quae, corrupti beatae cumque perspiciatis debitis. Sit in quidem sunt dolorem earum at hic aut officiis veritatis. Fugiat et, fugit sequi magnam aspernatur ipsa modi nulla est maiores, doloribus eveniet debitis corporis repudiandae, suscipit vitae. Totam itaque repellat suscipit consequuntur, dicta culpa et harum commodi soluta!"/>
        <ChatComponent from="bot" isTyping="true" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim laudantium error sunt maxime quos distinctio ullam laboriosam? Unde, vel."/>
        
    </StyledBox>
  )
}

export default ChatWindow