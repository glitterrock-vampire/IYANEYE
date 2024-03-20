import Head from "next/head";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import aboutPic from "../public/about.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <div className={styles.content}>
        <article className={styles.article_container}>
          <div className={styles.img_wrapper}>
            <Image
              src={aboutPic}
              alt="członkowie zespołu Bimber Boys"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
          <h1 className={styles.title}>IYANEYE the Band</h1>
          <p className={styles.main_text}>
            Welcome to the soulful world of IYANEYE, a roots reggae band that embodies the spirit of enduring friendship and the timeless vibes of reggae music.
            Our journey is one of unity, music, and a shared love for the rhythms that connect us all. Formed by a close-knit group of musicians who have been friends for over 30 years, IYANEYE is more than just a band—it's a testament to the bonds that music can forge.
            Each member, now above the age of 60, brings a wealth of experience and a deep passion for reggae's rich heritage to the ensemble.
          </p>
          <p>
            Our music is a homage to the roots reggae and the classic vibes of yesteryears.
            Inspired by the legends who paved the way, we strive to keep the flame of traditional reggae music burning bright, mixing the timeless with our unique twist.
            Our sound is a blend of the familiar and the new, intended to resonate with long-time reggae enthusiasts and new listeners alike.
          </p>
          <p>
            IYANEYE's repertoire is a carefully curated collection of songs that speak to the soul, uplift the spirit, and move the body.
            Our performances are not just concerts; they are gatherings of friends, old and new, united by a love for music that transcends time and age.

            Join us on this musical journey as we celebrate life, friendship, and the enduring power of reggae music.
            IYANEYE invites you to be part of our story, a story that proves it's never too late to pursue your passion, to create, and to
            share the joy of music with the world.
          </p>
          <p>
            Welcome to the family. Welcome to IYANEYE.
          </p>
          <div className={styles.band_members_container}>
            <div className={styles.col}>
              <p className={styles.name}>Phil Soltau</p>
              <p className={styles.caption}>vocals and piano</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>Bobo Lloyd</p>
              <p className={styles.caption}>piano</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>Rage</p>
              <p className={styles.caption}>bass guitar</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>Jeffery</p>
              <p className={styles.caption}>Congo Drums</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>Jacob</p>
              <p className={styles.caption}>bass guitar</p>
            </div>

            <div className={styles.col}>
              <p className={styles.name}>Name</p>
              <p className={styles.caption}>precussion</p>
            </div>
          </div>
        </article>
      </div>

    </>
  );
};

export default About;
