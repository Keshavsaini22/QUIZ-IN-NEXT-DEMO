import React from 'react'
import { cookies } from 'next/headers'
function Home() {
    const cookieStore = cookies()
    const theme = cookieStore.get('name')
    console.log('themeeeee: ', theme);
    return (
        <div>Home</div>
    )
}

export default Home