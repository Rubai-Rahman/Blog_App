import { useUserData } from '@nhost/react';
import React from 'react';
import Posts from '../blogs/Posts';


const Home = () => {
  const user = useUserData();


  return (
    <div>
      <h1>This is Home</h1>
      <Posts/>
    </div>
  );
};

export default Home;