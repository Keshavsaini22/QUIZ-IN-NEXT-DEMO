import React from 'react'
import { cookies } from 'next/headers'
function Home() {
    const cookieStore = cookies()
    const theme = cookieStore.get('name')
    console.log('themeeeee: ', theme);
    return (
        <div>Homexssssss</div>
    )
}

export default Home