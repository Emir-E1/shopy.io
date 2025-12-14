import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

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
        "Discover our curated collection of high-quality products from trusted brands worldwide.",
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
        "Lightning-fast shipping with real-time tracking to get your orders delivered quickly.",
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
      title: "Secure Payment",
      description:
        "Shop with confidence using our secure payment gateway and multiple payment options.",
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

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`${styles.heroContent} container`}>
            <h1 className={styles.heroTitle}>Discover Amazing Products</h1>
            <p className={styles.heroSubtitle}>
              Shop the latest trends and premium quality products with fast,
              secure delivery. Find everything you need in one place.
            </p>
            <div className={styles.heroActions}>
              <Button size="large" onClick={() => navigate("/shop")}>
                Start Shopping
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroDecoration}></div>
            <div className={styles.heroDecoration2}></div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.featuresTitle}>Why Choose Shopy?</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={styles.featureCard}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={styles.statItem}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Start Shopping?</h2>
              <p className={styles.ctaText}>
                Join thousands of satisfied customers and discover your next
                favorite product today.
              </p>
              <div className={styles.ctaActions}>
                <Button size="large" onClick={() => navigate("/shop")}>
                  Browse Products
                </Button>
                <Button
                  variant="secondary"
                  size="large"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
