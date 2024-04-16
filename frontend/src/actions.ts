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
export async function cookiedelete(name: string) {
    cookies().delete(name)
}

export async function getauthcookie(name: string) {
    const value = cookies().has(name)
    return value
}