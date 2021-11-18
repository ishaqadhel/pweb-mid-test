import * as React from 'react';
import { MdChat, MdClose } from 'react-icons/md';

export default function LiveChat() {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div>
            <div
                onClick={() => setOpen(!isOpen)}
                className='fixed bottom-0 z-10 py-1 my-4 text-white bg-red-500 rounded-full shadow-md right-5'
            >
                <div className='items-center px-2 py-1'>
                    <MdChat
                        className={`${
                            isOpen ? 'hidden' : 'block'
                        } text-4xl font-bold`}
                    />
                    <MdClose
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } text-4xl font-bold`}
                    />
                </div>
            </div>

            <div
                className={`${isOpen ? 'block' : 'hidden'} bottom-16
                my-4 py-1 fixed z-10 w-full`}
                style={{ marginLeft: '79%' }}
            >
                <div className='flex flex-col bg-white rounded-xl lg:w-1/5'>
                    <div className='bg-red-500 rounded-t-xl'>
                        <p className='my-4 text-3xl text-center text-white'>
                            Tanya Tasia
                        </p>
                    </div>
                    <div
                        id='chat'
                        className='flex flex-col-reverse pb-3 mt-2 mb-20 space-y-3 '
                    >
                        <div className='float-none p-2 mt-2 ml-5 mr-auto break-all bg-gray-300 rounded-bl-none other rounded-2xl'>
                            Halo AutoFamily. Terima kasih telah menghubungi
                            Auto2000 Digiroom - The first Toyota Showroom in
                            Your Pocket. Perkenalkan nama saya Tasia. ada yang
                            bisa Tasia Bantu?
                        </div>
                    </div>
                    <div className='bottom-0 flex flex-row items-center w-full my-2'>
                        <div className='flex flex-row items-center w-full h-12 px-2 ml-2 border border-gray rounded-3xl'>
                            <button className='flex items-center justify-center w-10 h-10 ml-1 text-red-400 focus:outline-none hover:text-red-600'>
                                <svg
                                    className='w-5 h-5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                                    ></path>
                                </svg>
                            </button>
                            <div className='w-full'>
                                <input
                                    type='text'
                                    id='message'
                                    className='flex items-center w-full h-10 text-sm border border-transparent rounded-2xl focus:outline-none'
                                    placeholder='Type your message....'
                                />
                            </div>
                            <div className='flex flex-row'>
                                <button className='flex items-center justify-center w-8 h-10 text-red-500 focus:outline-none'>
                                    <svg
                                        className='w-5 h-5 '
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    id='capture'
                                    className='flex items-center justify-center w-8 h-10 ml-1 mr-2 text-green-400 focus:outline-none hover:text-green-600'
                                >
                                    <svg
                                        className='w-5 h-5'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                id='self'
                                className='flex items-center justify-center w-10 h-10 ml-3 mr-2 text-red-500 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none'
                            >
                                <svg
                                    className='w-5 h-5 -mr-px transform rotate-90'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
