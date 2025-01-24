import React, { useState } from "react"
import Layout from "../components/Layout";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  contact_page,
  contact_intro,
  contact_form,
  form_group,
  recaptcha_container,
  submit_button,
  status_message,
} from "./contact.module.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerify = (token: string | null) => {
    setIsVerified(!!token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isVerified) {
      setSubmitStatus("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      // Replace with your actual form submission logic
      console.log("Form submitted:", formData);
      setSubmitStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsVerified(false);
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <Layout pageTitle="Contact Us">
      <div className={contact_page}>
<p className={contact_intro}>
          Have questions about membership, upcoming events, or just want to connect with
          the Red Deer Jazz Society? We'd love to hear from you! Fill out the form
          below and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className={contact_form}>
          <div className={form_group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={form_group}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={form_group}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              required
            />
          </div>

          <div className={recaptcha_container}>
            <GoogleReCaptchaProvider
              reCaptchaKey="6LcZRsAqAAAAAF3-V4PvZMz0Okae0OuVQ1Yv6xce">
	      <GoogleReCaptcha onVerify={handleVerify} />
            </GoogleReCaptchaProvider>
          </div>

          {submitStatus && (
            <div className={`status_message ${submitStatus.includes("success") ? "success" : "error"}`}>
              {submitStatus}
            </div>
          )}

          <button type="submit" className={submit_button} disabled={!isVerified}>
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>RDJS - Contact</title>;
