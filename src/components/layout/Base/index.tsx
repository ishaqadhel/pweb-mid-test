import * as React from 'react';

import NavBar from '../NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
    // Put Header or Footer Here
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
