import React, { } from 'react'
import '../Css/about.css';

export default function AboutUs() {
    return (
      <div>
        <div className="form-container-2">
          <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)", textAlign: "center"}}><b>This is Latchet</b></h1><br></br>
          <img className="image-5" src="img/about-us-art.png"/><br></br>
          <p>
          Welcome to Latchet, where inspiration meets insight. We are more than just a blog; we're a community of storytellers, thought leaders, and creatives, united by a shared love for exploration and discovery. Our mission is to curate engaging content that sparks conversations, fosters connections, and inspires personal growth.
          </p><br></br><hr></hr>
          <img className="image-6" src="img/miffy_7.png"/>
          <div className="about-us-2nd-p-container">
            <p>
            Behind each post is a team passionate about diverse perspectives and the power of authentic storytelling. Join us on this journey as we navigate the realms of knowledge, creativity, and the human experience. Together, let's uncover the extraordinary in the ordinary and celebrate the beauty of shared stories.
            </p>
          </div>
        </div>
        <div className="form-container-3">
          <div className="about-us-3rd-p-container">
            <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)"}}><b>Who's On the Team?</b></h1><br></br>
            <p>
              Whether it's the creativity of our designers<br></br>or the technical prowess of our developers,<br></br>every team member contributes their<br></br>distinctive flair to create a tapestry of<br></br>engaging content. Together, we embark on<br></br>a journey of exploration, inspiration,<br></br>and connection. Join us as we introduce the personalities shaping the narrative and<br></br>breathe life into the stories that define<br></br>Latchet.
            </p>
          </div>
          <img className="image-7" src="img/miffy_8.png"/><br></br><br></br>
        </div>
        <div className="meet-team-banner-container">
          <div className="meet-team-banner">
          <h1>Meet the Team!</h1>
          </div>
        </div>
        
        <div className="members-area-container">
          <div className="member-container">
            <div className="member-pic"><img className="mem-pic-base" src="img/drei.png"/></div>
              <div className="mem-desc-container">
                <img className="image-8" src="img/miffy_9.png"/>
                <div className="member-desc-drei">
                  <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)", fontSize: "60px", fontWeight: "700"}}>Andrei Agbisit</h1>
                  <h4>Project Manager, System Analyst</h4>
              </div>  
            </div>
          </div>
          
          <div className="member-container">
              <div className="mem-desc-container" style={{paddingLeft:"276px"}}>
                <img className="image-10" src="img/miffy_10.png"/>
                <div className="member-desc-derick">
                  <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)", fontSize: "60px", fontWeight: "700"}}>Derick Pangilinan</h1>
                  <h4>Back-end Developer <i>(React.js)</i></h4>
                </div>
            </div>
            <div className="member-pic"><img className="mem-pic-base" src="img/derick.png"/></div>
          </div>

          <div className="member-container">
            <div className="member-pic"><img className="mem-pic-base" src="img/lean.png"/></div>
              <div className="mem-desc-container">
                <img className="image-9" src="img/miffy_11.png"/>
                <div className="member-desc-lean">
                  <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)", fontSize: "60px", fontWeight: "700"}}>Leandro Sangalang</h1>
                  <h4>Front-end Developer <i>(UI/UX - Bootstrap)</i></h4>
              </div>  
            </div>
          </div>
        </div>
      </div>
    );
  }