import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ increment, title, content, imageUrl }) => {

  return (
    <div className="blog-container">
      <div className="blog-title-container">
        <div className="blog-post-title-design-container">
          <img className="blog-post-title-design" src="img/miffy5.png"/>
          <div className="blog-post-title">BLOG POST</div>
        </div>
      </div>
      <div className="blog-title-h1">
        <h1><b>{title}</b></h1>
      </div>
      <br></br><br></br>
      <div className="blog-image"><img className="blog-img" src={imageUrl}/></div><br></br><hr className="blog-hr"></hr><br></br>
      <p className="card-text">{content}</p>
  </div>
  );
};

BlogPost.propTypes = {
  increment: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default BlogPost;