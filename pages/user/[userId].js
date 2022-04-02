import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './userId.module.css';

export const getServerSideProps = async (context) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.userId}`)
  const user = await response.json()

  return{
    props: {
      user
    }
  }

}

const  UserDetails = ({ user }) => {

  return (
    <div className={styles.user__details_container}>
      <Head>
        <title>User Details</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/" >
        <a className={styles.back__btn}>Go Back</a>
      </Link>
      <div className={styles.title}>User Details</div>
      <ul className={styles.user__details}>
        <li><div>Name: <span>{user.name}</span></div></li>
        <li><div>Username: <span>{user.username}</span></div></li>
        <li><div>Email: <span>{user.email}</span></div></li>
        <li><div>street: <span>{user.address.street}</span></div></li>
        <li><div>suite: <span>{user.address.suite}</span></div></li>
        <li><div>city: <span>{user.address.city}</span></div></li>
        <li><div>zipcode: <span>{user.address.zipcode}</span></div></li>
        <li><div>phone: <span>{user.phone}</span></div></li>
      </ul>
    </div>
  )
}





export default UserDetails