import React from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/useQueries';

const SinglePost = () => {
  const id = useParams()
  const { error, data, loading } = useUser(3);
  console.log({
    error,loading,data
  })
  return (
    <div>
      
    </div>
  );
};

export default SinglePost;