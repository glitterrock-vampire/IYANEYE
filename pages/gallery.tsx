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
          {/* photo 1 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img1}
              alt="Bimber Boys band members"
              placeholder="blur"
              priority
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>One for all...</h3>
              <p className={styles.desc_text}>
                Bimber Boys, five musical musketeers! We really enjoy playing
                together and taking the audience on crazy concert journeys.
              </p>
            </div>
          </div>
          {/* photo 2 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img2}
              alt="Bimber Boys band members"
              placeholder="blur"
              priority
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>At the table</h3>
              <p className={styles.desc_text}>
                We started as a quartet but one empty chair (with shoes) was
                waiting for Marek and his drums from the beginning. The
                incredible group Bimber Boys was born at this table! A
                (colorized) photo from the founding meeting.
              </p>
            </div>
          </div>
          {/* photo 3 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img3}
              alt="Bimber Boys band members"
              placeholder="blur"
              priority
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Favorite places</h3>
              <p className={styles.desc_text}>
                Small pubs are our favorite places for musical meetings. Of
                course, big stages also have their atmosphere, but in a cozy pub
                the audience is simply closer. We are also closer to the bar :)
              </p>
            </div>
          </div>
          {/* photo 4 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img4}
              alt="Bimber Boys band members"
              placeholder="blur"
              priority
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>We get the twist!</h3>
              <p className={styles.desc_text}>
                When the twist catches us, we switch instruments and let
                ourselves be carried away by crazy musical currents. That's when
                new songs, ideas, and arrangements are born. We joyfully
                distill our musical moonshine!
              </p>
            </div>
          </div>
          {/* photo 5 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img5}
              alt="Bimber Boys band members"
              placeholder="blur"
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Jarek</h3>
              <p className={styles.desc_text}>
                Jarek sews on the bass. He can also sing. Not just with the
                bass. Besides bass guitars, he loves the Bieszczady Mountains.
                And bicycles.
              </p>
            </div>
          </div>
          {/* photo 6*/}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img6}
              alt="Bimber Boys band members"
              layout="responsive"
              placeholder="blur"
            />
            <div style={{ marginBottom: "0px" }} className={styles.description}>
              <h3 className={styles.desc_title}>Bogdan, also known as Bodzio</h3>
              <p className={styles.desc_text}>
                Bogdan, also known as Bodzio, besides singing, playing the
                accordion, keyboards, and trombone, spends time meeting beautiful
                fans and army buddies. And he has buddies everywhere (and fans
                too).
              </p>
            </div>
          </div>
          {/* photo 7 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img7}
              alt="Bimber Boys band members"
              placeholder="blur"
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Kris</h3>
              <p className={styles.desc_text}>
                When Kris bellows with his powerful voice, he sounds like
                Vladimir Vysotsky. But if he wants to, he can also be lyrical
                like his violin. In his free time, he plays the organ.
              </p>
            </div>
          </div>

          {/* photo 9 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img9}
              alt="Bimber Boys band members"
              placeholder="blur"
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>Bart</h3>
              <p className={styles.desc_text}>
                Bart is a song hunter. He runs around the world (real and
                virtual) and stubbornly hunts for new songs for the Bimber Boys.
                When he can't find anything, he sits down and writes something
                himself. Here he looks up checking if a hit is falling on him.
              </p>
            </div>
          </div>
          {/* photo 10 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img10}
              alt="Bimber Boys band members"
              placeholder="blur"
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                Bows to our audience, you're the best! We bow nicely (just like
                the Beatles used to do)! See you at the concerts!
              </p>
            </div>
          </div>

          {/* photo 11*/}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img11}
              alt="Bimber Boys band members"
              placeholder="blur"
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                Bows to our audience, you're the best! We bow nicely (just like
                the Beatles used to do)! See you at the concerts!
              </p>
            </div>
          </div>

          {/* photo 12 */}
          <div className={styles.img_wrapper}>
            <Image
              src={gallery_img12}
              alt="Bimber Boys band members"
              placeholder="blur"
            />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                Bows to our audience, you're the best! We bow nicely (just like
                the Beatles used to do)! See you at the concerts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
