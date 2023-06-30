import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/react'
import SideDrawer from '../components/Authentication/miscellaneous/SideDrawer'
import MyChats from '../components/Authentication/MyChats'
import ChatBox from '../components/Authentication/ChatBox'
const ChatPage = () => {


    const { user } = ChatState();

    return <div className='w-full'>
        {user && <SideDrawer />}
        <Box className='flex justify-between w-full h-[91.5vh] p-2'>
            {user && <MyChats />}
            {user && <ChatBox />}
        </Box>
    </div >
}

export default ChatPage
//nppm i axios
// const [chats, setChats] = useState([])
    // const fetchChats = async () => {
    //     const { data } = await axios.get("http://localhost:5000/api/chat");
    //     setChats(data);
    // }
    // useEffect(() => {
    //     fetchChats();
    // }, [])
    //{chats.map((chat) => <div key={chat.id}>{chat.chatName}</div>)}