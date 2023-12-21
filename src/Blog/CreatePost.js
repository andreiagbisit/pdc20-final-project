import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import '../Css/create.css';
import Resizer from 'react-image-file-resizer';


const CreatePost = () => {
  const [posts, setPost] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', imageUrl: '' });
  const [selectedFile, setSelectedFile] = useState();
  const storedPosts = localStorage.getItem('blogPosts');
  useEffect(() => {
    if (storedPosts !=null) {
      setPost (JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPost([...posts, newPost]);
      setNewPost({ title: '', content: '', imageUrl: '' });
      alert("Neat! You have just successfully created a new post!");
    }
  };

  const handleClearPost = () => {
    const confirmed = window.confirm("Looks like you're trying to delete all posts you've created at this point. Are you sure want remove all of your posts?");
    if (confirmed) {
      setPost([]);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Resizer.imageFileResizer(
        file,
        600, // Max width
        400, // Max height
        'JPEG',
        100,
        0, // Rotation
        (resizedImage) => {
          setNewPost({ ...newPost, imageUrl: resizedImage });
          setSelectedFile(file);
        },
        'base64'
      );
    }
  };
  
  return (
      <div>
        <div className="form-container" style={{backgroundColor: "#ab7676"}}>
          <div className="container-actual">
            <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)"}}><b>What will be your post all about?</b></h1>
            <p>Share your thoughts, ideas, and experiences on our user-<br></br>friendly post creation page. Your voice matters, and we're<br></br>excited to see what you create. Start composing your<br></br>post now and join the conversation!</p><br></br>
            <label><b>Post Title:</b></label>
            <input
              type="text"
              placeholder="The title of my post is..."
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <br></br>
            <label><b>Content:</b></label>
            <textarea
              rows="10"
              placeholder="The content covering my post's topic is..."
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            />
            <br></br>
            <label><b>Image:</b></label>
            <div className="button-wrapper">
              <input id="file-button" type="file" accept="image/*" onChange={handleImageChange} hidden/>
              <label htmlFor="file-button">Choose Image</label>
            </div><br></br>
            {selectedFile && (
              <span><b>Chosen Image:</b> {selectedFile.name}</span>
            )}
            <br></br><br></br>
            
            <button className="button-add" onClick={handleAddPost}>Add Post</button>&nbsp;&nbsp;
            <button className="button-delete" onClick={handleClearPost}>Delete All Posts</button>
          </div>
          <img className="image-1" src="img/miffy1.png"/>
          <div className="create-post-note-area">
            <img className="image-3" src="img/miffy4.png"/>
            <p className="create-post-note-area-text">If you have created any posts beforehand, they should pop up right below for your convenience.</p>
          </div>
        </div>
        <BlogList post={posts} />
      </div>
  );
};

export default CreatePost;