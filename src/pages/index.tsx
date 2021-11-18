import * as React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { GiAutoRepair } from 'react-icons/gi';

import Layout from '@/components/layout/Base';
import BaseLink from '@/components/shared/BaseLink';
import Button from '@/components/shared/Button';
import CustomLink from '@/components/shared/CustomLink';
import NextImage from '@/components/shared/NextImage';
import Seo from '@/components/shared/Seo';

export default function HomePage() {
    return (
        <Layout>
            <Seo />

            <main>
                {/* Header Section */}
                <section className='py-10 md:py-20'>
                    <div className='space-y-10 md:flex md:flex-row-reverse md:space-x-5 md:space-y-0 layout'>
                        <div className='md:w-1/2'>
                            <NextImage
                                className='w-full'
                                src='/images/car/fortuner.png'
                                alt='car'
                                width={688}
                                height={408}
                            />
                        </div>
                        <div className='space-y-5 md:w-1/2'>
                            <h1 className='text-4xl md:text-6xl'>
                                We Make Car Repair Hassle Free
                            </h1>
                            <p>
                                Since the year 1972 we are always ready to give
                                you one of the best service.
                            </p>
                            <div>
                                <BaseLink href='/'>
                                    <Button variant='red'>
                                        Lihat Keuntungan
                                    </Button>
                                </BaseLink>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Header Section */}

                {/* Feature Highlight Section */}
                <section className='py-10 bg-gray-100'>
                    <div className='grid grid-cols-2 gap-5 text-gray-500 md:grid-cols-4 layout'>
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <GiAutoRepair className='mx-auto text-5xl' />
                            <p>Perawatan Kendaraan</p>
                        </div>
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <GiAutoRepair className='mx-auto text-5xl' />
                            <p>Perawatan Kendaraan</p>
                        </div>
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <GiAutoRepair className='mx-auto text-5xl' />
                            <p>Perawatan Kendaraan</p>
                        </div>
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <GiAutoRepair className='mx-auto text-5xl' />
                            <p>Perawatan Kendaraan</p>
                        </div>
                    </div>
                </section>
                {/* End of Feature Highlight Section */}

                {/* Benefit Section */}
                <section className='py-10 md:py-20'>
                    <div className='space-y-10 layout'>
                        <div className='space-y-2 text-center'>
                            <p className='text-gray-500'>Benefit From Us</p>
                            <h2>We Have the Plan for you to Give You Best</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                            <div className='p-5 space-y-4 transition duration-300 border border-gray-100 rounded hover:scale-105 hover:border-red-500'>
                                <div className='items-center justify-center w-24 p-5 bg-red-200 rounded'>
                                    <GiAutoRepair className='text-5xl text-red-600' />
                                </div>
                                <h3>Problem Solver</h3>
                                <p className='text-gray-600'>
                                    Lorem Ipsum dolor amit. Lorem Ipsum dolor
                                    amit. Lorem Ipsum dolor amit.
                                </p>
                                <CustomLink href='/'>
                                    <div className='flex items-center space-x-1'>
                                        <p>Lihat Selengkapnya</p>
                                        <BsArrowRightShort />
                                    </div>
                                </CustomLink>
                            </div>
                            <div className='p-5 space-y-4 transition duration-300 border border-gray-100 rounded hover:scale-105 hover:border-red-500'>
                                <div className='items-center justify-center w-24 p-5 bg-red-200 rounded'>
                                    <GiAutoRepair className='text-5xl text-red-600' />
                                </div>
                                <h3>Problem Solver</h3>
                                <p className='text-gray-600'>
                                    Lorem Ipsum dolor amit. Lorem Ipsum dolor
                                    amit. Lorem Ipsum dolor amit.
                                </p>
                                <CustomLink href='/'>
                                    <div className='flex items-center space-x-1'>
                                        <p>Lihat Selengkapnya</p>
                                        <BsArrowRightShort />
                                    </div>
                                </CustomLink>
                            </div>
                            <div className='p-5 space-y-4 transition duration-300 border border-gray-100 rounded hover:scale-105 hover:border-red-500'>
                                <div className='items-center justify-center w-24 p-5 bg-red-200 rounded'>
                                    <GiAutoRepair className='text-5xl text-red-600' />
                                </div>
                                <h3>Problem Solver</h3>
                                <p className='text-gray-600'>
                                    Lorem Ipsum dolor amit. Lorem Ipsum dolor
                                    amit. Lorem Ipsum dolor amit.
                                </p>
                                <CustomLink href='/'>
                                    <div className='flex items-center space-x-1'>
                                        <p>Lihat Selengkapnya</p>
                                        <BsArrowRightShort />
                                    </div>
                                </CustomLink>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Benefit Section */}

                {/* App Section */}
                <section className='py-10 md:py-20'>
                    <div className='items-center space-y-10 md:flex md:space-x-5 md:space-y-0 layout'>
                        <div className='md:w-1/2'>
                            <NextImage
                                className='w-full'
                                src='/images/app.png'
                                alt='car'
                                width={723}
                                height={637}
                            />
                        </div>
                        <div className='space-y-4 md:ml-14 md:w-1/2'>
                            <p className='text-gray-500'>Aplikasi Mobile</p>
                            <h1 className='leading-12'>
                                Pantau Status Perawatan Mobil Anda Lewat
                                Aplikasi Kami
                            </h1>
                            <p className='md:max-w-md'>
                                Lebih mudah mengelola orderan dimanapun kamu
                                berjualan baik di social media, di web toko
                                online atau di marketplace dengan sistem
                                manajemen yang baik, cukup melalui satu sistem.
                            </p>
                            <div>
                                <BaseLink href='/'>
                                    <Button variant='red'>
                                        Download Aplikasi
                                    </Button>
                                </BaseLink>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of App Section */}
            </main>
        </Layout>
    );
}
