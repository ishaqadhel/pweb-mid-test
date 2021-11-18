import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/shared/ButtonLink';
import Seo from '@/components/shared/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1>Next.js + Tailwind CSS + TypeScript Starter</h1>
            <p className='mt-2 text-sm text-gray-300'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
