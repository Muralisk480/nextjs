import React from 'react'
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
        <h2>Home</h2>
        <ul>
            <li>
                <Link href='news'>News Page</Link>
            </li>
            <li>
                <Link href='news/welcome'>News Details Page</Link>
            </li>
        </ul>
    </>
  )
}

export default HomePage;