import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ListenContact.module.scss";
import logo_sm from "../public/iyaneye-logo.png";
import React from "react";
import Player from "../components/Player/Player";

const Listen = () => {
  return (
    <>
      <Head>
        <title>IYANEYE the Band - Listen</title>
      </Head>

      <div className={styles.content}>
        <div className={styles.listen_container}>
          <section className={styles.col}>
            <div className={styles.logo_wrapper}>
              <Image src={logo_sm} alt="logo Bimber Boys" placeholder="blur" />
            </div>
            <article className={styles.main_text}>
              <h1 className={`${styles.title}`}>Discover Our Music Journey</h1>
              <p>
                Welcome to the musical world of IYANEYE, where every note tells a story and every melody
                invites you into our journey. Here, we share our souls through the strings of spontaneity
                and the rhythms of passion.
              </p>
              <p>
                Our collection features songs mostly recorded live, capturing the raw energy and unfiltered
                essence of our performances. Among these, the ballad "SONG NAME" a heartfelt cover of
                NAME classic, holds a special place. Recorded in a single take, it embodies the
                spirit of our music—direct, sincere, and from the heart.
              </p>

              <p>
                The music video for "SONG NAME" is a testament to the creative collaboration of our friends,
                a serious endeavor that showcases not just our musical vision but also the talents of those
                who share our path. But our journey doesn't stop at covers. We're constantly weaving our own
                stories into songs, with dreams of an album that fully represents us. Our own compositions are
                on the horizon, and we can't wait to share the first of these songs with you. Stay tuned for original
                releases that promise to enrich our shared tapestry of melodies and memories.
              </p>

              <p>
                Listen and See for Yourself
                You can listen to us here and see our stories unfold. Each song, a spontaneous burst of creativity;
                each performance, a window into our souls. Join us as we continue to create, share, and dream.
                Thank you for being part of our musical voyage.
              </p>
            </article>
            <Player />
          </section>
          {/* <section className={styles.col}>
            <div className={styles.video_wrapper}>
              <YouTube videoId="Y5xyvx4hAKg" className={styles.video} />
            </div>

            <div className={styles.video_wrapper}>
              <YouTube videoId="t0mzXsh45Q4" className={styles.video} />
            </div>
            <div className={styles.video_wrapper}>
              <YouTube videoId="d6X35Y30p2A" className={styles.video} />
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Listen;
