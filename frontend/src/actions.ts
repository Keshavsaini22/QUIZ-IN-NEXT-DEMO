'use server'

import { cookies } from 'next/headers'

export async function cookiecreate(name: string, value: any) {
    cookies().set({
        name: name,
        value: value,
        httpOnly: true,
        path: '/',
    })
}