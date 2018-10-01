import React from 'react';
import header from '../img/contact_header.png';
import './Contact.css';
import { withFormik } from 'formik';
import { LoadingIcon } from '../icons';

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        placeholder="Your name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.name && touched.name ? (
            'text-input error'
          ) : (
            'text-input'
          )
        }
      />
      {errors.name &&
      touched.name && (
        <div className="input-feedback">{errors.name}</div>
      )}
      <input
        id="email"
        placeholder="Your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? (
            'text-input error'
          ) : (
            'text-input'
          )
        }
      />
      {errors.email &&
      touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}
      <input
        id="subject"
        placeholder="Purpose"
        type="text"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.subject && touched.subject ? (
            'text-input error'
          ) : (
            'text-input'
          )
        }
      />
      {errors.subject &&
      touched.subject && (
        <div className="input-feedback">{errors.subject}</div>
      )}
      <textarea
        id="message"
        placeholder="Your message"
        rows="5"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.message && touched.message ? (
            'text-input error'
          ) : (
            'text-input'
          )
        }
      />
      {errors.message &&
      touched.message && (
        <div className="input-feedback">{errors.message}</div>
      )}

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit {isSubmitting && (<LoadingIcon/>)}
      </button>
    </form>
  );
};

const ContactFormWrapper = withFormik({
  mapPropsToValues: () => ({ email: '', name: '', subject: '', message: '' }),

  // Custom sync validation
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address!';
    }
    if(!values.name) {
      errors.name = 'Required!';
    }
    if(!values.subject) {
      errors.subject = 'Required!';
    }
    if(!values.message) {
      errors.message = 'Required!';
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    var success = true;
    var url = 'https://sendgrid-mailer-api.herokuapp.com/contact';
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
    .catch(error => {
      alert("There's some error submitting the form. Please try again after some time!")
      console.error('Error:', error);
      setSubmitting(false);
      success = false;
    })
    .then(response => {
      if(success) {
        alert("Hey, I just received your email, and will surely get back to you as soon as possible!")
        console.log('Success:', response);
        setSubmitting(false);
      }
    });
  },

})(ContactForm);

export default class Contact extends React.Component {

  render() {
    return(
      <div id="contact">
        <img src={header} id="contact-header" alt=""/>
        <div id="contact-form">
          <ContactFormWrapper/>
        </div>
      </div>
    );
  }
}