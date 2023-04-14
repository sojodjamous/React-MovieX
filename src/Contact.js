import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0f2pyns",
        "template_uopeybl",
        form.current,
        "ahB1oSP0T0evk7oLf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


    return(
        <>
          <div className="auth-form-containerr">

<section className ="contact">
    <div className="content">
        <h2>Contact Us</h2>
        <p className="t"> Tell us what do you think about our website? Do you have any Qustions or Feedback?</p>
    </div>
    <div className  ="container">
        <div className="contactInfo">
            <div className="box">
                <div className="text">
                    <h3>Instagram</h3>
                    <p className="t">Follow us  on our page MovieX</p>
                </div>
            </div>
            <div className="box">
                <div className="text">
                    <h3>Facebook</h3>
                    <p className="t">Follow us  on our page MovieX</p>
                </div>
            </div>
            <div className="box">
                <div className="text">
                    <h3>Email</h3>
                    <p className="t">moviex.5.2022@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="ContactForm">

        <form ref={form} onSubmit={sendEmail}>
                           <h2>Talk to Us</h2>
                <div className="inputBox">
                    <input type="text" name="to_name" required="required" />
                    <span className="gt"> Name</span>
                </div>
                <div className="inputBox">
                    <input type="email" name="user_email" required="required"  />
                    <span className="gt">Email</span>
                </div>
                <div className="inputBox">
                    <textarea   name="message" required ="required" ></textarea>
                    <span className="gt">Your Message!...</span>
                </div>
                <div className="inputBox">
                <button className="em" type="submit">Send
        </button>
                </div>

            </form>

        </div>
    </div>

</section>
</div>

        </>
    )
}
export default Contact;