import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import '../App.css';
{/*import '../Css/home.css';*/}

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);



  return (
    <div className='bg'>
      <div className="posts-form-container">
      <img className="image-4" src="img/miffy6.png"/>
        <div className="posts-header-description">
        <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)"}}><b>Instantaneous sharing of your life snippets</b></h1>
        <p>Join everyone's journey of self-discovery, laughter, and the everyday moments that make life extraordinary. This is Latchet, a space to share stories, reflections, and a sprinkle of creativity. Expect musings on your interests, candid snapshots of daily life, and a dash of inspiration.</p>
        </div>
      </div>

      <BlogList post={posts}/>
    </div>
  );
};

export default HomePage;