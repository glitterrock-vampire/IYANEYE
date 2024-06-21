import Head from "next/head";
import styles from "../styles/Gallery.module.scss";
import Image from "next/image";
import gallery_img1 from "../public/img_gallery/Phil.jpg";
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
import gallery_img14 from "../public/img_gallery/jacobii.png";
import gallery_img15 from "../public/img_gallery/jacobphil.jpg";
import gallery_img16 from "../public/img_gallery/RANCE2.png";
import gallery_img17 from "../public/img_gallery/17.png"
import gallery_img18 from "../public/img_gallery/theband.jpg"
import gallery_img19 from "../public/img_gallery/rance.jpg"
// import gallery_img19 from "../public/img_gallery/rance.jpg"


const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.gallery_container}>
          <div className={styles.img_wrapper}>
            <Image src={gallery_img1} alt="IYANEYE band members" placeholder="blur" layout="fill" objectFit="cover" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>One for all...</h3>
              <p className={styles.desc_text}>
                IYANEYE, five musical musketeers! We really enjoy playing together and taking the audience on crazy concert journeys.
              </p>
            </div>
          </div>

          <div className={styles.img_wrapper}>
            <Image src={gallery_img6} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description} style={{ marginBottom: "0px" }}>
              <h3 className={styles.desc_title}></h3>
              <p className={styles.desc_text}>
              </p>
            </div>
          </div>

          <div className={styles.img_wrapper}>
            <Image src={gallery_img7} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description} style={{ marginBottom: "0px" }}>
              <h3 className={styles.desc_title}></h3>
              <p className={styles.desc_text}>
              </p>
            </div>
          </div>

          
          <div className={styles.img_wrapper}>
            <Image src={gallery_img10} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
              </p>
            </div>
          </div>

          <div className={styles.img_wrapper}>
            <Image src={gallery_img16} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
              </p>
            </div>
          </div>          
          
          <div className={styles.img_wrapper}>
            <Image src={gallery_img14} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                come see us live
              </p>
            </div>
          </div>
          
          <div className={styles.img_wrapper}>
            <Image src={gallery_img18} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                come see us live
              </p>
            </div>
          </div>

                    
          <div className={styles.img_wrapper}>
            <Image src={gallery_img15} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
              </p>
            </div>
          </div>

          <div className={styles.img_wrapper}>
            <Image src={gallery_img19} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                come see us live
              </p>
            </div>
          </div>

          <div className={styles.img_wrapper}>
            <Image src={gallery_img17} alt="IYANEYE band members" layout="fill" objectFit="cover" placeholder="blur" />
            <div className={styles.description}>
              <h3 className={styles.desc_title}>See you at the concerts!</h3>
              <p className={styles.desc_text}>
                come see us live
              </p>
            </div>
          </div>
          
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
        </div>
      </div>
    </>
  );
};

export default Gallery;
