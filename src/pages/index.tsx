import * as React from 'react';
import {
    AiFillCar,
    AiFillClockCircle,
    AiFillDollarCircle,
} from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaHandshake, FaStopwatch } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { GoChecklist } from 'react-icons/go';

import Layout from '@/components/layout/Base';
import BaseLink from '@/components/shared/BaseLink';
import Button from '@/components/shared/Button';
import CustomLink from '@/components/shared/CustomLink';
import LiveChat from '@/components/shared/LiveChat';
import NextImage from '@/components/shared/NextImage';
import Seo from '@/components/shared/Seo';

export default function HomePage() {
    return (
        <Layout>
            <Seo />
            <LiveChat />
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
                                We Make Anything Car Related Hassle Free
                            </h1>
                            <p>
                                Pemberian jasa penjualan, perawatan, perbaikan,
                                dan penyediaan suku cadang terbaik sejak tahun
                                1975.
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
                            <AiFillCar className='mx-auto text-5xl' />
                            <p>Pembelian Kendaraan</p>
                        </div>
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <AiFillDollarCircle className='mx-auto text-5xl' />
                            <p>Jual Kendaraan</p>
                        </div>
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <GoChecklist className='mx-auto text-5xl' />
                            <p>Order Suku Cadang</p>
                        </div>
                    </div>
                </section>
                {/* End of Feature Highlight Section */}

                {/* Benefit Section */}
                <section className='py-10 md:py-20'>
                    <div className='space-y-10 layout'>
                        <div className='space-y-2 text-center'>
                            <p className='text-gray-500'>
                                Dapatkan Keuntungan Terbaik Dari Paket-Paket
                                Kami
                            </p>
                            <h2>We Have the Best Plan for you</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                            <div className='p-5 space-y-4 transition duration-300 border border-gray-100 rounded hover:scale-105 hover:border-red-500'>
                                <div className='items-center justify-center w-24 p-5 bg-red-200 rounded'>
                                    <FaHandshake className='text-5xl text-red-600' />
                                </div>
                                <h3>Deal Terbaik</h3>
                                <p className='text-gray-600'>
                                    Dapatkan deal dengan harga terbaik untuk
                                    mobil impianmu sekarang juga!
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
                                    <FaStopwatch className='text-5xl text-red-600' />
                                </div>
                                <h3>Service Cepat</h3>
                                <p className='text-gray-600'>
                                    Jaminan waktu yang cepat untuk melayani
                                    service kendaraan anda
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
                                    <AiFillClockCircle className='text-5xl text-red-600' />
                                </div>
                                <h3>Layanan 24/7</h3>
                                <p className='text-gray-600'>
                                    Siap melayani kebutuhan anda selama 24 jam
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
                                Lebih mudah mengelola orderan service mobil
                                dimanapun kamu berada dengan sistem manajemen
                                yang baik, cukup melalui satu sistem.
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

                {/* Car Show Section */}
                <section className='py-10 md:py-20'>
                    <div className='space-y-10 layout'>
                        <div className='space-y-2 text-center'>
                            <p className='text-gray-500'>Only The Best Cars</p>
                            <h1>Our Vehicle Fleet</h1>
                        </div>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                            <NextImage
                                className='w-full transition duration-300 hover:scale-105'
                                imgClassName='rounded-xl'
                                src='/images/car/alphard.png'
                                alt='car'
                                width={4096}
                                height={2306}
                            />
                            <NextImage
                                className='w-full transition duration-300 hover:scale-105'
                                imgClassName='rounded-xl'
                                src='/images/car/alphard.png'
                                alt='car'
                                width={4096}
                                height={2306}
                            />
                            <NextImage
                                className='w-full transition duration-300 hover:scale-105'
                                imgClassName='rounded-xl'
                                src='/images/car/alphard.png'
                                alt='car'
                                width={4096}
                                height={2306}
                            />
                            <NextImage
                                className='w-full transition duration-300 hover:scale-105'
                                imgClassName='rounded-xl'
                                src='/images/car/alphard.png'
                                alt='car'
                                width={4096}
                                height={2306}
                            />
                            <NextImage
                                className='w-full transition duration-300 hover:scale-105'
                                imgClassName='rounded-xl'
                                src='/images/car/alphard.png'
                                alt='car'
                                width={4096}
                                height={2306}
                            />
                            <NextImage
                                className='w-full transition duration-300 hover:scale-105'
                                imgClassName='rounded-xl'
                                src='/images/car/alphard.png'
                                alt='car'
                                width={4096}
                                height={2306}
                            />
                        </div>
                        <div className='text-center'>
                            <BaseLink href='/'>
                                <Button variant='light'>
                                    <div className='flex items-center space-x-1'>
                                        <p>Lihat Mobil Lainnya</p>
                                        <BsArrowRightShort />
                                    </div>
                                </Button>
                            </BaseLink>
                        </div>
                    </div>
                </section>
                {/* End of Car Show Section */}

                {/* Closing Box Section */}
                <section className='py-8 md:py-14'>
                    <div className='p-4 bg-red-600 rounded-xl layout md:p-8'>
                        <div className='items-center md:flex space-y-7'>
                            <div className='hidden text-center md:block md:w-1/2 md:mr-4'>
                                <NextImage
                                    className='w-full'
                                    src='/images/download-now.png'
                                    alt='download-now'
                                    width={1061}
                                    height={508}
                                />
                            </div>
                            <div className='space-y-6 text-white md:w-1/2 md:space-y-10'>
                                <div className='space-y-2'>
                                    <h1 className='text-center md:text-left'>
                                        Siap untuk mencoba?
                                    </h1>
                                    <p>
                                        Segera rawat mobilmu demi kenyamanan dan
                                        kelancaran bepergian.
                                    </p>
                                </div>
                                <div>
                                    <BaseLink href='/booking'>
                                        <Button variant='light'>
                                            Pesan Jasa Sekarang
                                        </Button>
                                    </BaseLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Closing Box Section */}
            </main>
        </Layout>
    );
}
