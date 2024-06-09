import Head from 'next/head';
import styles from '../styles/UpcomingPerformances.module.scss';

const performances = [
  {
    id: 1,
    name: "LIVE REGGAE MUSIC",
    date: "March 30, 2024",
    location: "COMFITANYA Lounge, Kingston, Jamaica",
    description: "Join us for a night of reggae bliss at the COMFITANYA Lounge.",
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
    name: "Dub Club",
    date: "April 21, 2024",
    location: "Dub Club, Skyline Drive, Kingston, Jamaica",
    description: "Experience the roots of reggae music with a modern twist at the iconic Dub Club.",
    ticketsUrl: "https://example.com/reggae-sunsplash-tickets"
  },

  {
    id: 4,
    name: "Dub Club",
    date: "April 21, 2024",
    location: "Dub Club, Skyline Drive, Kingston, Jamaica",
    description: "Experience the roots of reggae music with a modern twist at the iconic Dub Club.",
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
        <h1 className={styles.title}>Upcoming Performances</h1>
        <article className={styles.article_container}>
          {performances.map(({ id, name, date, location, description, ticketsUrl }) => (
            <div key={id} className={styles.performance_item}>
              <h2 className={styles.performance_name}>{name}</h2>
              <p className={styles.performance_date}>{date} - {location}</p>
              <p className={styles.performance_description}>{description}</p>
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
