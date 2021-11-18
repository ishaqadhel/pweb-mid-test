import * as React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import BaseLink from '@/components/shared/BaseLink';

export default function Footer() {
    return (
        <div className='my-10 text-center layout'>
            <hr className='w-full mt-8 border-black rounded-full border-1' />
            <div className='flex justify-center my-5 space-x-5 text-3xl'>
                <BaseLink href='/'>
                    <FaFacebook className='transition duration-300 hover:text-red-500' />
                </BaseLink>
                <BaseLink href='/'>
                    <FaWhatsapp className='transition duration-300 hover:text-red-500' />
                </BaseLink>
                <BaseLink href='/'>
                    <FaInstagram className='transition duration-300 hover:text-red-500' />
                </BaseLink>
            </div>
            <p className='text-center'>
                © Astra 2000 - Created By Ishaq Adheltyo & Adjie Mahesa
            </p>
            <style jsx>{`
                border-1 {
                    border-width: 1px;
                }
            `}</style>
        </div>
    );
}
