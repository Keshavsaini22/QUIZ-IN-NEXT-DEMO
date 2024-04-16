import { getauthcookie } from "./actions";

export async function getcookie() {
    const cookie = await getauthcookie('logged')
    console.log('cookie: ', cookie);
    return cookie
} 