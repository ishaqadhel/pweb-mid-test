import * as React from 'react';
import { GiAutoRepair } from 'react-icons/gi';

import Layout from '@/components/layout/Base';
import BaseLink from '@/components/shared/BaseLink';
import Button from '@/components/shared/Button';
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
                    <div className='grid grid-cols-2 gap-5 text-gray-500 md:grid-cols-5 layout'>
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
                        <div className='items-center space-y-2 text-center transition duration-300 hover:text-red-500'>
                            <GiAutoRepair className='mx-auto text-5xl' />
                            <p>Perawatan Kendaraan</p>
                        </div>
                    </div>
                </section>
                {/* End of Feature Highlight Section */}
            </main>
        </Layout>
    );
}
