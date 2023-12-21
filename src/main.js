import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import Posts from './Blog/Posts';
import CreatePost from './Blog/CreatePost';
import About from './AboutUs/AboutPage';
import Contact from './ContactUs/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoute: sessionStorage.getItem('currentRoute') || 'Posts', // Default header text
        headerBackgrounds: {
          Posts: 'url("/img/posts.png")',
          'Create Post': 'url("/img/create-post.png")',
          'About Us': 'url("/img/about-us.png")',
          Contact: 'url("/img/contact.png")',
        },
    };
  }

  handleRouteChange = (route) => {
    this.setState({ currentRoute: route });
    sessionStorage.setItem('currentRoute', route);
  };

  render() {
    const { username } = this.props;
    const { currentRoute, headerBackgrounds } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <img className="logo-1" src="img/logo2.png"/>
              <a className="navbar-brand"></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/posts"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('Posts')}
                    >
                      Posts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/create-post"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('Create Post')}
                    >
                      Create Post
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about-us"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('About Us')}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('Contact')}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item"><Link className="nav-divider">&nbsp;&nbsp;|&nbsp;&nbsp;</Link></li>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link"
                      onClick={() => this.handleLogin('Login')}
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div>
        <header className="header py-5 mb-4"
        style={{
          backgroundImage: headerBackgrounds[currentRoute],
        }}
        >
            <div className="container">
                <div className="text-center my-5">
                    <h1 style={{textShadow:"1px 1px 15px #000"}} className="fw-bolder">{this.state.currentRoute}</h1>
                </div>
            </div>
        </header>
          <Routes>
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/create-post" element={<CreatePost />} />
            <Route exact path="/about-us" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;