import clsx from 'clsx';
import * as React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import BaseLink from '@/components/shared/BaseLink';
import Button from '@/components/shared/Button';
import NextImage from '@/components/shared/NextImage';

export default function NavBar() {
    return (
        <section className={clsx('py-4 md:py-6')}>
            <div className='flex items-center py-4 mx-auto layout'>
                <div className='flex-grow'>
                    <div className='flex items-center space-x-2'>
                        <div className='items-center'>
                            <BaseLink href='/'>
                                <NextImage
                                    className='w-32 md:w-36'
                                    src='/images/logo.png'
                                    alt='Auto-Logo'
                                    width={1600}
                                    height={399}
                                />
                            </BaseLink>
                        </div>
                    </div>
                </div>
                {/* Menu Mobile */}
                <div className='flex items-center space-x-5 md:hidden'>
                    <GiHamburgerMenu className='text-xl' />
                </div>
                {/* End of Menu Mobile */}
                <div className='items-center hidden space-x-5 md:flex'>
                    <BaseLink
                        href='/'
                        className='font-semibold transition duration-500 hover:text-red-500'
                    >
                        Beranda
                    </BaseLink>
                    <BaseLink
                        href='/booking'
                        className='font-semibold transition duration-500 hover:text-red-500'
                    >
                        Pesan Service
                    </BaseLink>
                    <BaseLink href='/login'>
                        <Button variant='red'>Login</Button>
                    </BaseLink>
                </div>
            </div>
        </section>
    );
}
