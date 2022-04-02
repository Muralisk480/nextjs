import React from 'react';
import { useRouter } from 'next/router';

const NewDetails = () => {

    const router = useRouter();

    console.log(router.query.newId);

  return (
    <div>NewDetails</div>
  )
}

export default NewDetails