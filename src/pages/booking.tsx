import * as React from 'react';

import Layout from '@/components/layout/Base';
import Seo from '@/components/shared/Seo';

export default function Booking() {
    return (
        <Layout>
            <Seo />
            <div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
                        Book Appointment
                    </h2>
                </div>

                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
                        <form
                            className='space-y-6'
                            action='/booking'
                            method='GET'
                        >
                            <div>
                                <label
                                    htmlFor='car'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Tipe Mobil
                                </label>
                                <div className='mt-1'>
                                    <select
                                        name='car'
                                        id='car'
                                        className='text-sm bg-transparent outline-none'
                                    >
                                        <option value='alphard' selected>
                                            Toyota Alphard
                                        </option>
                                        <option value='fortuner'>
                                            Toyota Fortuner
                                        </option>
                                        <option value='yaris'>
                                            Toyota Yaris
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label
                                        htmlFor='service-type'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Jenis Service
                                    </label>
                                    <div className='mt-1'>
                                        <select
                                            name='service-type'
                                            id='service-type'
                                            className='text-sm bg-transparent outline-none'
                                        >
                                            <option value='oil-change' selected>
                                                Ganti Oli
                                            </option>
                                            <option value='oil-change-set'>
                                                Ganti Oli + Setting Mesin
                                            </option>
                                            <option value='bore-up'>
                                                Bore Up
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor='note'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Catatan
                                </label>
                                <div className='mt-1'>
                                    <input
                                        id='note'
                                        name='note'
                                        type='note'
                                        autoComplete='note'
                                        placeholder='opsional'
                                        className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                                >
                                    Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
