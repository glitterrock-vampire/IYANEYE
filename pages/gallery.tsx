import Head from "next/head";
import styles from "../styles/Gallery.module.scss";
import Image from "next/image";
import gallery_img1 from "../public/img_gallery/1.jpg";
import gallery_img2 from "../public/img_gallery/2.jpg";
import gallery_img3 from "../public/img_gallery/3.jpg";
import gallery_img4 from "../public/img_gallery/4.jpg";
import gallery_img5 from "../public/img_gallery/5.jpg";
import gallery_img6 from "../public/img_gallery/6.jpg";
import gallery_img7 from "../public/img_gallery/7.jpg";
import gallery_img9 from "../public/img_gallery/9.jpg";
import gallery_img10 from "../public/img_gallery/10.jpg";
import gallery_img11 from "../public/img_gallery/11.jpg";
import gallery_img12 from "../public/img_gallery/12.jpg";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.gallery_container}>
          {/* Various photos with descriptions */}
          <div className={styles.img_wrapper}>
            <Image src={gallery_img1} alt="IYANEYE band members" placeholder="blur" layout="fill" objectFit="cover" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>One for all...</h3>
              <p className={styles.desc_text}>
                IYANEYE, five musical musketeers! We really enjoy playing together and taking the audience on crazy concert journeys.
              </p>
            </div>
          </div>
          {/* Additional photos omitted for brevity */}

          <div className={styles.img_wrapper}>
            <Image src={gallery_img6} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description} style={{ marginBottom: "0px" }}>
              <h3 className={styles.desc_title}>Bogdan, also known as Bodzio</h3>
              <p className={styles.desc_text}>
                Bogdan, also known as Bodzio, besides singing, playing the accordion, keyboards, and trombone, spends time meeting beautiful fans and army buddies. And he has buddies everywhere (and fans too).
              </p>
            </div>
          </div>

          <div className={styles.img_wrapper}>
            <Image src={gallery_img10} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                Bows to our audience, you&apos;re the best! We bow nicely (just like the Beatles used to do)! See you at the concerts!
              </p>
            </div>
          </div>

          {/* Embedding individual videos */}
          <div className={styles.video_wrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Our Live Performance 1</h3>
              <p className={styles.desc_text}>
                Watch one of our live performances and experience the energy and passion of our music.
              </p>
            </div>
          </div>

          <div className={styles.video_wrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Our Live Performance 2</h3>
              <p className={styles.desc_text}>
                Another one of our live performances showcasing our musical talent.
              </p>
            </div>
          </div>

          <div className={styles.video_wrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Our Live Performance 3</h3>
              <p className={styles.desc_text}>
                Another one of our live performances showcasing our musical talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
