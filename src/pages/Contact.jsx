import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8L10.89 4.26C11.2187 4.10222 11.6049 4.10222 11.9333 4.26L19.6667 8M3 8L3 16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16V8M3 8L10.5 12M21 8L13.5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Email Us",
      text: "Get in touch via email",
      contact: "support@shopy.com",
      link: "mailto:support@shopy.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.86026 3 9.40406 3.30493 9.73544 3.80385L10.6422 5.19615C10.9736 5.69507 11.5174 6 12.0984 6H19C20.1046 6 21 6.89543 21 8V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Call Us",
      text: "Speak with our team",
      contact: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.657 16.657L13.414 20.9C12.6332 21.6808 11.3668 21.6808 10.586 20.9L6.34302 16.657C5.56222 15.8762 5.56222 14.6098 6.34302 13.829L10.586 9.58599C11.3668 8.80519 12.6332 8.80519 13.414 9.58599L17.657 13.829C18.4378 14.6098 18.4378 15.8762 17.657 16.657Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.5C12.8284 12.5 13.5 11.8284 13.5 11C13.5 10.1716 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Visit Us",
      text: "Come to our office",
      contact: "123 Commerce St, Suite 100",
      subContact: "New York, NY 10001",
      link: "#",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 12H16M8 16H16M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Live Chat",
      text: "Chat with us online",
      contact: "Available 24/7",
      link: "#",
    },
  ];

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={`${styles.container} container`}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </section>

          {/* Main Content */}
          <div className={styles.content}>
            {/* Contact Form */}
            <div className={styles.contactForm}>
              <div className={styles.formTitle}>
                <svg
                  className={styles.formIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12H16M8 16H16M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Send us a message
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitMessage && (
                  <div
                    style={{
                      marginTop: "var(--spacing-4)",
                      padding: "var(--spacing-4)",
                      background: "var(--color-success)",
                      color: "var(--color-text-inverse)",
                      borderRadius: "var(--border-radius-lg)",
                      textAlign: "center",
                    }}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={styles.infoCard}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={styles.infoHeader}>
                    <div className={styles.infoIcon}>{method.icon}</div>
                    <h3 className={styles.infoTitle}>{method.title}</h3>
                  </div>
                  <p className={styles.infoText}>{method.text}</p>
                  <a
                    href={method.link}
                    className={styles.infoLink}
                    onClick={(e) => {
                      if (method.link === "#") {
                        e.preventDefault();
                        alert(`${method.title} feature coming soon!`);
                      }
                    }}
                  >
                    {method.contact}
                  </a>
                  {method.subContact && (
                    <div
                      style={{
                        color: "var(--color-text-tertiary)",
                        fontSize: "var(--font-size-sm)",
                        marginTop: "var(--spacing-1)",
                      }}
                    >
                      {method.subContact}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <section className={styles.mapSection}>
            <h3
              style={{
                fontSize: "var(--font-size-2xl)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--spacing-4)",
              }}
            >
              Find Us
            </h3>
            <div className={styles.mapPlaceholder}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: "var(--spacing-2)" }}
              >
                <path
                  d="M17.657 16.657L13.414 20.9C12.6332 21.6808 11.3668 21.6808 10.586 20.9L6.34302 16.657C5.56222 15.8762 5.56222 14.6098 6.34302 13.829L10.586 9.58599C11.3668 8.80519 12.6332 8.80519 13.414 9.58599L17.657 13.829C18.4378 14.6098 18.4378 15.8762 17.657 16.657Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12.5C12.8284 12.5 13.5 11.8284 13.5 11C13.5 10.1716 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Interactive Map Coming Soon
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
