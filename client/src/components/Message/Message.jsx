import React, { useEffect, useRef } from 'react'
import GetMessage from '../../hooks/GetMessage'
import SkeletonMessage from '../SkeletonMessage'
import MessageComponent from './MessageComponent'
import './style.css'
import useListenMessage from '../../hooks/useListenMessage'

const Message = () => {
    const { messages, loading } = GetMessage()
    useListenMessage()
    const MessageScroll = useRef(null)
    useEffect(() => {
        setTimeout(() => {

            MessageScroll.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100);

    }, [messages])


    return (

        <div className='h-full w-full mt-[4rem] overflow-y-scroll py-20 px-10 bg-zinc-800 relative'>

            {
                !loading && messages?.length > 0 && messages?.map((message) => (
                    <div ref={MessageScroll}>

                        <MessageComponent key={message.id} message={message} />
                    </div>
                ))
            }

            {
                loading &&
                <SkeletonMessage />
            }
            {!loading && messages?.length === 0 &&
                <p className='text-xl text-white font-semibold capitalize'>Send a message to start a conversation 😄</p>
            }


        </div>



    )
}
export default Message