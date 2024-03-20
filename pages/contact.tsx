import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ListenContact.module.scss";
import logo_sm from "../public/iyaneye-logo.png";
import contact_img from "../public/contact_img.jpg";
import React from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>IYANEYE the Band - Contact</title>
      </Head>

      <div className={styles.content}>
        <div className={styles.listen_container}>
          <section className={`${styles.col} ${styles.flex_between}`}>
            <div>
              <div className={styles.logo_wrapper}>
                <Image
                  src={logo_sm}
                  alt="logo IYANEYE the Band"
                  placeholder="blur"
                />
              </div>
              <article className={styles.main_text}>
                <h1 className={`${styles.title} ${styles.title_light}`}>
                  Management</h1>
                <p>
                  Email: iyanaeyetheband@gmail.com
                  <br />
                  +1 (876) 431-4646
                </p>
              </article>
            </div>
            <ContactForm />
          </section>
          <section className={styles.col}>
            <div className={styles.img_wrapper}>
              <Image
                src={contact_img}
                alt="Contact IYANEYE"
                placeholder="blur"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
