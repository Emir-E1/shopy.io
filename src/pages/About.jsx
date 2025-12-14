import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./About.module.css";

function About() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 7L12 2L4 7V17L12 22L20 17V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L12 14L15 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Premium Quality",
      description:
        "We curate only the highest quality products from trusted brands worldwide, ensuring every item meets our strict standards.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Fast Delivery",
      description:
        "Lightning-fast shipping with real-time tracking to get your orders delivered quickly and securely to your doorstep.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Secure Shopping",
      description:
        "Shop with confidence using our secure payment gateway and multiple payment options. Your data is always protected.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 20H7C5.89543 20 5 19.1046 5 18V9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.1046 18.1046 20 17 20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Our dedicated customer support team is available around the clock to help you with any questions or concerns.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "50+", label: "Brands" },
    { number: "99%", label: "Satisfaction" },
  ];

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={`${styles.container} container`}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.logo}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L12 2L4 7V17L12 22L20 17V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L12 14L15 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className={styles.title}>About Shopy</h1>
            <p className={styles.subtitle}>
              Your trusted destination for premium products and exceptional
              shopping experiences
            </p>
          </section>

          {/* Story Section */}
          <section className={styles.story}>
            <h2 className={styles.storyTitle}>Our Story</h2>
            <p className={styles.storyText}>
              Founded with a passion for connecting people with exceptional
              products, Shopy has grown from a small online store to a trusted
              marketplace featuring premium brands from around the world. We
              believe in quality over quantity, carefully curating each product
              to ensure it meets our high standards for design, functionality,
              and value. Our commitment to customer satisfaction drives
              everything we do, from our secure shopping experience to our
              responsive customer support.
            </p>
          </section>

          {/* Features Grid */}
          <section className={styles.grid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.card}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className={styles.cardIcon}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardText}>{feature.description}</p>
              </div>
            ))}
          </section>

          {/* Stats Section */}
          <section className={styles.stats}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={styles.stat}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
