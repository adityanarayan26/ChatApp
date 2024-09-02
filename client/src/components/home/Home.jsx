import React, { useContext, useState } from 'react'
import SideBar from '../sidebar/SideBar'
import { Send } from 'lucide-react';
import Message from '../Message/Message';
import useConversation from '../../zustand/useConversation';
import SendMessage from '../../hooks/SendMessage';
import { ping } from 'ldrs'
import AuthContext from '../../context/Authcontext';

ping.register()

const Home = () => {
    const [MessageInput, setMessageInput] = useState()
    const { AuthUser } = useContext(AuthContext)
    const { loading, sendMessage } = SendMessage()
    const { selectedConversation, setselectedConversation } = useConversation()
    const handleSubmitMessageInput = async (e) => {
        e.preventDefault()
        if (!MessageInput) return;
        await sendMessage(MessageInput)
        setMessageInput('')
    }
    return (
        <div className='h-full w-full flex bg-zinc-800'>
            <SideBar />
            <div className='h-full w-full flex flex-col '>
                <div className='w-full h-[8%] fixed top-0  z-[999]  flex items-center px-10 bg-gradient-to-r from-primary to-indigo-500'>


                    {selectedConversation && <div className='text-xl text-white font-medium flex items-center  justify-center'>
                        <img src={selectedConversation?.profilePic} className='w-14 h-14 mx-2' alt="" />
                        <h1 className='font-bold capitalize'>{selectedConversation?.fullname}</h1>

                    </div>}

                </div>
                <div className='h-[92%] z-[8] w-full' >
                    {selectedConversation ? <Message /> :
                        <div className='h-full w-full mt-[4rem] bg-gradient-to-r from-primary to-indigo-500  flex flex-col justify-center items-center text-white'>
                            <h1 className='text-3xl font-bold capitalize'>Welcome {AuthUser?.fullname} to ChatApp🥰</h1>
                            <h2 className='text-2xl font-medium'>Select a friend to chat with...</h2>
                        </div>
                    }
                </div>
                <div className='h-[10%] z-[20]  bg-zinc-800   w-full flex items-center
                justify-center '>
                    <label className="input input-bordered  flex items-center gap-2 w-full mx-8 ">
                        <input type="text" value={MessageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder='send message' className="grow w-full" />
                        {loading ?
                            <div className='flex items-center justify-center'>
                                <l-ping
                                    size="35"
                                    speed="2"
                                    color="white"
                                ></l-ping>
                            </div>
                            : <Send className=' cursor-pointer' onClick={handleSubmitMessageInput} />}
                    </label>
                </div>
            </div>

        </div >
    )
}

export default Home