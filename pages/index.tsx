import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import logo from "../public/iyaneye-logo.png";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Head>
        <title>IYANEYE the Band - Official Page</title>
      </Head>

      <div className={styles.main_container}>
        <div className={styles.content}>
          <div className={styles.img_container}>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2.5 }}
            >
              <Image
                src={logo}
                alt=" logo"
                layout="intrinsic"
                placeholder="blur"
                priority
              />
            </motion.div>
          </div>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="I understand."
          cookieName="cookieConsent"
          style={{ background: "#2B373B", fontSize: "13px" }}
          buttonStyle={{
            background: "#e5383bda",
            color: "#f5f3f4",
            fontSize: "13px",
          }}
          expires={150}
        >
          This website uses cookies to provide services at the highest level. 
          Further use of the website means that you agree to their use.{" "}
          <span style={{ fontSize: "10px" }}>
            <Link href="/cookies-policy">
              <a className={styles.link}>Cookies Policy</a>
            </Link>
          </span>
        </CookieConsent>
      </div>
    </>
  );
};

export default Home;
