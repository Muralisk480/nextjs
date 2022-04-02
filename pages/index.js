import React from 'react'
import Link from 'next/link';
import styles from '../styles/home.module.css'
import Head from 'next/head';

export async function getServerSideProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data =  await response.json();

  return {
    props: {
      data
    }
  }
}

const HomePage = ({ data }) => {


  return (
    <div className={styles.user__container}>
      <Head>
        <title>User</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <div className={styles.title}>Users Name</div>
        <ul className={styles.user__name_ul}>
          {
            data.map(val => (
              <li key={val.id}>
                <Link href={`/user/${val.id}`}>
                  <a className={styles.name__btn}>{val.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default HomePage;