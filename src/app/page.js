import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const HomePage = () => {
  // Example events data - this would typically come from a CMS
  const upcomingEvents = [
    {
      id: 1,
      title: "Art Exhibition: Local Perspectives",
      date: "2024-04-15",
      image: "/images/events/art-exhibition.jpg",
      category: "Exhibition"
    },
    {
      id: 2,
      title: "Tango Workshop",
      date: "2024-04-20",
      image: "/images/events/tango-workshop.jpg",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Poetry Reading Night",
      date: "2024-04-25",
      image: "/images/events/poetry-night.jpg",
      category: "Performance"
    }
  ]

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <Image
            src="/images/hero-image.jpg"
            alt="Centro Cultural building facade"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Centro Cultural Buenos Aires</h1>
            <p>A space for art, culture, and community in the heart of Buenos Aires</p>
            <div className={styles.heroCtas}>
              <Link 
                href="/events"
                className={styles.primaryButton}
                aria-label="View our upcoming events"
              >
                Explore Events
              </Link>
              <Link
                href="/contact"
                className={styles.secondaryButton}
                aria-label="Contact us"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2>Our Mission</h2>
          <p>
            Founded in the heart of Buenos Aires, our cultural center serves as a vibrant hub for artistic expression, cultural exchange, and community engagement. We believe in the power of arts and culture to transform lives and strengthen our community.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className={styles.container}>
          <h2>Upcoming Events</h2>
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event) => (
              <article 
                key={event.id}
                className={styles.eventCard}
              >
                <div className={styles.eventImageContainer}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className={styles.eventImage}
                  />
                </div>
                <div className={styles.eventContent}>
                  <span className={styles.eventCategory}>
                    {event.category}
                  </span>
                  <h3>{event.title}</h3>
                  <time>
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.viewAllContainer}>
            <Link
              href="/events"
              className={styles.primaryButton}
              aria-label="View all events"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
