import React from 'react'
import { cookies } from 'next/headers'
async function Home() {
  function delay(milliseconds: number) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  const dd = await delay(2000);
  // const cookieStore = cookies()
  // const theme = cookieStore.get('name')
  // console.log('themeeeee: ', theme);
  return (
    <div>Homexssssskkkks</div>
  )
}

export default Home