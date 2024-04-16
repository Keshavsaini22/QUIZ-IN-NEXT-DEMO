import React from 'react'
import { cookies } from 'next/headers'
async function Home() {
  function delay(milliseconds: number) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  const dd = await delay(2000);
  return (
    <div>HomexssssSSSSS</div>
  )
}

export default Home