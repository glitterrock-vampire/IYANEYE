import Head from "next/head";
import styles from "../styles/RODOPolicyCookies.module.scss";
import React from "react";

const RODOPolicy = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - Privacy Policy</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Cookies Policy</h1>
        <ol className={styles.ol}>
          <li>
            The website www.bimberboys.pl (hereinafter referred to as the “Site”) does not automatically collect any information, except for information contained in cookies.
          </li>
          <li>
            Cookies (so-called “cookies”) are IT data, in particular text files, which are stored in the end device of the Site User and are intended for using the Site's web pages. Cookies usually contain the name of the website from which they originate, the time of storage on the end device, and a unique number.
          </li>
          <li>
            The entity placing cookies on the end device of the Site User and accessing them is the operator of the Site – Bimber Boys. based at ul. Wolności 39/59 22-100 Chełm. Cookies are used for the purpose of:
          </li>
          <ol type="a">
            <li>
              adjusting the content of the Site's web pages to the User's preferences and optimizing the use of websites; in particular, these files allow recognizing the Site User's device and appropriately displaying the website, tailored to their individual needs;
            </li>
            <li>
              creating statistics that help understand how Site Users use websites, which allows improving their structure and content;
            </li>
            <li>
              maintaining the Site User's session (after logging in), thanks to which the User does not have to re-enter their login and password on every subpage of the Site;
            </li>
          </ol>
          <li>
            Two basic types of cookies are used within the Site: “session” cookies and “persistent” cookies. “Session” cookies are temporary files that are stored in the User's end device until logging out, leaving the website, or turning off the software (web browser). “Persistent” cookies are stored in the User's end device for the time specified in the parameters of the cookies or until they are deleted by the User.
          </li>
          <li>
            The following types of cookies are used within the Site:
          </li>
          <ol type="a">
            <li>
              “necessary” cookies, enabling the use of services available within the Site, e.g., authentication cookies used for services that require authentication within the Site;
            </li>
            <li>
              cookies used to ensure security, e.g., used to detect fraud in the field of authentication within the Site;
            </li>
            <li>
              “performance” cookies, enabling the collection of information on the use of the Site's web pages;
            </li>
            <li>
              “functional” cookies, allowing “remembering” the settings selected by the User and personalizing the User's interface, e.g., in terms of the selected language or region from which the User comes, font size, website appearance, etc.;
            </li>
            <li>
              “advertising” cookies, allowing the delivery of advertising content to Users more tailored to their interests.
            </li>
          </ol>

          <li>
            In many cases, the software used for browsing websites (web browser) by default allows storing cookies on the User's end device. Site Users can change their cookies settings at any time. These settings can be changed in particular in such a way as to block the automatic handling of cookies in the web browser settings or to inform about their every placement in the device of the Site User. Detailed information about the possibilities and ways of handling cookies is available in the software (web browser) settings.
          </li>
          <li>
            The Site operator informs that restrictions on the use of cookies may affect some functionalities available on the Site's web pages.
          </li>
          <li>
            Cookies placed in the User's end device and used may also be used by advertisers and partners cooperating with the Site operator.
          </li>
          <li>
            More information about cookies is available in the “Help” section in the web browser menu.
          </li>
          <li>
            <p style={{ display: "inline", margin: "4px" }}>
              The above cookie policy template is protected by copyright, which belongs to IAB Poland. Source:
            </p>
            <a className={styles.a} href="http://wszystkoociasteczkach.pl/">
              wszystkoociasteczkach.pl
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default RODOPolicy;
