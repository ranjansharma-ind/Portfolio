import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Portfolio.css";
import { useState } from "react";

function Contact(props) {
  useEffect(() => {
    document.title = `${props.capital(props.category)} - Ranjan Sharma`;
  });

  const intitlaValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(intitlaValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "Name is required";
    }
    if (!values.name) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not valid email address!";
    }
    if (!values.name) {
      error.message = "Message is required";
    }
    return error;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors, formValues, isSubmit]);
  return (
    <>
      <div style={{ height: "92.5vh" }}>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              alert('Thankyou for being a member of this Comunnity')
            ) : (
              <div></div>
            )}
            <div className="row container-fluid">
              <div className="col-lg-4">
                <h1>Get In Touch</h1>
                <p>ranjansharma.ind@gmail.com</p>
              </div>
              <div className="col-lg-8" style={{ marginTop: "150px" }}>
                <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
                
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                </div>
                <span style={{marginRight:'22%',color:'maroon'}}>{formErrors.name}</span>
                <span style={{color:'maroon'}}>{formErrors.email}</span>
                <div>
                <input
                  type="text"
                  placeholder="Message"
                  name="message"
                  className="message"
                  value={formValues.message}
                  onChange={handleChange}
                  autoComplete="off"
                />
                </div>
                <span style={{marginRight:'32%',color:'maroon'}}>{formErrors.message}</span><br/>
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
