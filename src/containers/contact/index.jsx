import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import Swal from 'sweetalert2'

const Contact = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    formData.append("access_key", "32ded8a1-7c2b-4dc2-b366-45840a63f199"); // Replace with your actual access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    setIsSubmitting(true); // Set submitting state to true

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    
    setIsSubmitting(false); // Reset submitting state

    
    //   setResponseMessage("Your message has been sent successfully!");
      // Clear form fields
      setName("");
      setEmail("");
      setDescription("");
    if (res.success) {Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success"
      })
    } else {
      setResponseMessage("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={onSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;

