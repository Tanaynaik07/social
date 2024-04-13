import React from 'react';
import Post from '../Post/Post';
import postsData from '../../../src/postData'; // Import the posts data
import "../Main/home.css";

const Home = () => {
  return (
    <div className="home">
      {postsData.map(post => (
        <Post
          key={post.id}
          profileImage={post.profileImage}
          username={post.username}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
}

export default Home;
