import { getauthcookie } from '@/actions';
import { redirect } from 'next/navigation';
import React from 'react'

async function ProtectedRoute({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const auth = await getauthcookie('logged')
    // console.log('auth: ', auth)
    if (!auth) {
        redirect('/')
    }
    else {
        return <>{children}</>
    }

}

export default ProtectedRoute