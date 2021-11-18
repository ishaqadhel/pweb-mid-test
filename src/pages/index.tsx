import clsx from 'clsx';
import * as React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

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
                className='transition duration-500 hover:text-red-500'
              >
                Beranda
              </BaseLink>
              <BaseLink
                href='/pricing'
                className='transition duration-500 hover:text-red-500'
              >
                Pesan Service
              </BaseLink>
              <BaseLink
                href='/'
                className='transition duration-500 hover:text-red-500'
              >
                Bantuan
              </BaseLink>
              <BaseLink href='/'>
                <Button variant='red'>Login</Button>
              </BaseLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
