// Import necessary modules and styles
import Head from 'next/head';
import styles from '../styles/UpcomingPerformances.module.scss'; // Make sure you have this CSS/SASS file set up

// Static data for demonstration purposes
const performances = [
  {
    id: 1,
    name: "LIVE REGGAE MUSIC ",
    date: "March 30, 2024",
    location: "COMFITANYA Lounge, Kingston, Jamaica",
    description: "Join us for a of reggae bliss at the .",
    ticketsUrl: "https://touchstonelink.com/event/live-with-iyaneye-comfitanya-lounge"

  },
  {
    id: 2,
    name: "Dub Club",
    date: "April 21, 2024",
    location: "Dub Club, Skyline Drive, Kingston, Jamaica",
    description: "Experience the roots of reggae music with a modern twist at the iconic Dub Club.",
    ticketsUrl: "https://example.com/reggae-sunsplash-tickets"

  },

  {
    id: 3,
    name: "I AM ON THE RISE",
    date: "June 24, 2024",
    location: "22 Jerk, Kingston, Jamaica",
    description: "Experience the roots of reggae music with a modern twist at the iconic 22 Jerk. Come drink and have a vibe",
    ticketsUrl: "https://example.com/reggae-sunsplash-tickets"

  },

  
  // Add more performances as needed
];
const UpcomingPerformances = () => {
    return (
      <>
        <Head>
          <title>Upcoming Performances - IYANEYE</title>
        </Head>
  
        <div className={styles.content}>
          <article className={styles.article_container}>
            <h1 className={styles.title}>Upcoming Performances</h1>
            {performances.map(({ id, name, date, location, description, ticketsUrl }) => (
              <div key={id} className={styles.performance_item}>
                <h2 className={styles.performance_name}>{name}</h2>
                <p className={styles.performance_date}>{date} - {location}</p>
                <p className={styles.performance_description}>{description}</p>
                {/* "Buy Tickets" Button */}
                <a href={ticketsUrl} target="_blank" rel="noopener noreferrer" className={styles.buy_tickets_button}>
                  Buy Tickets
                </a>
              </div>
            ))}
          </article>
        </div>
      </>
    );
  };
  

export default UpcomingPerformances;
