import React from 'react';
//downloaded emailjs for smtp
import emailjs from 'emailjs-com';
import '../Css/contact.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xdf9skr', 'template_b57foxs', e.target, 'fYUIBW3hmECUNmY4O')
      .then((result) => {
        return(
            alert('Message Successfully sent')
        )
      }, (error) => {
        return(
            alert('Something Wong')
        )
      });
  }

  return (
    <div>
      <div className="form-containerrr">
        <div className="containerrr-actual">
          <form onSubmit={sendEmail}>
          <h1 style={{textShadow:"1px 1px 15px rgba(0, 0, 0, 0.7)"}}><b>Questions? Concerns? Keep <br></br>in touch with us!</b></h1>
          <p>Connect with us! Reach out through this contact page to<br></br>get in touch with our dedicated team. Whether you have<br></br>questions, feedback, or partnership inquiries, we're here<br></br>to assist you. Fill out the form, and we'll respond<br></br>promptly as much as we can.</p><br></br>
            <input type="hidden" name="contact_number" required/>
            <label><b>Name:</b></label>
            <input class="name" placeholder="What's your name?" type="text" name="from_name" required/>
            <br></br>
            <label><b>Email:</b></label>
            <input class="name" placeholder="What's your email?" type="text" name="from_email" required/>
            <br></br>
            <label><b>Message:</b></label>
            <textarea rows="10" placeholder="What would you like to say?" name="message" />
            <br></br>
            <input class="submit" type="submit" value="Send Message" />
          </form>
        </div>
        <img className="image-2" src="img/miffy2.png"/>
      </div>
    </div>
  );
}