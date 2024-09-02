import { Loader, LogOut, Search } from 'lucide-react'
import React, { useState } from 'react'
import UseLogout from '../../hooks/UseLogout.js'
import useConversation from '../../zustand/useConversation.js'
import GetConversation from '../../hooks/GetConversation.js'
import toast from 'react-hot-toast'
import { dotPulse } from 'ldrs'
import { useSocketContext } from '../../context/SocketContext/SocketProvider.jsx'
import UserShow from './UserShow.jsx'

dotPulse.register()
const SideBar = () => {
    const [sidebarOpen, setsidebarOpen] = useState(true)
    const { loading, logout } = UseLogout()


    const { Loading, conversation } = GetConversation()


    const [SearchInput, setSearchInput] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault()

        if (SearchInput === "") {
            toast.error('Search field cannot be empty. Please enter a term to proceed.')
            return;
        }

        if (SearchInput.length < 3) {
            toast.error('Search term must be at least 3 characters long. Please refine your input.')
            return;
        }

        const convo = conversation.find((c) => c.fullname.toLowerCase().includes(SearchInput.toLowerCase()))
        if (convo) {
            setselectedConversation(convo);
            setSearchInput("");
            return;
        }

        else { toast.error('No such user found!') }
    }
    return (
        <div className={` h-full border-r-4  relative border-black   overflow-y-scroll transition-all ease duration-200  bg-zinc-300  ${sidebarOpen ? 'w-[30rem] ' : 'w-0 border-none'}  `}>
            <div className='w-full h-full flex flex-col justify-start items-center py-5'>
                <form onSubmit={handleSubmit} className="input input-bordered  flex items-center gap-2 w-[90%]">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={SearchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type='submit'>
                        <Search className='cursor-pointer' />
                    </button>
                </form >

                <div className='mt-10 w-full px-5'>
                    {Loading ?
                        <div className='w-full text-center'>
                            <l-dot-pulse
                                size="43"
                                speed="1.3"
                                color="black"
                            ></l-dot-pulse>
                        </div>

                        :

                        <div>
                            {conversation?.map((Convo) =>

                                (<UserShow key={Convo._id} Convo={Convo} />)
                            )}


                        </div>

                    }

                </div>
            </div>
            <div className='absolute bottom-5 left-5'>
                {loading ? <Loader /> : <LogOut className='w-7 h-7  text-red-700 cursor-pointer' onClick={logout} />}
            </div>
        </div >
    )
}

export default SideBar