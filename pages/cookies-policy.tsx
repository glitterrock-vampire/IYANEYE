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
        <h1 className={styles.title}>Privacy Policy</h1>
        <ol className={styles.ol}>
          <li>
            The website www.bimberboys.pl (hereinafter referred to as &quot;the Website&quot;) does not
            automatically collect any information, except for the information contained in cookies.
          </li>
          <li>
            Cookies (so-called &quot;cookies&quot;) are IT data, in particular text files, which are stored
            in the end device of the Website User and are intended for using the Website&apos;s subpages. Cookies usually contain the name
            of the website from which they originate, the time they are stored on the end device, and a unique number.
          </li>
          <li>
            The entity placing cookies on the end device of the Website User and obtaining access to them is the Website operator -
            Bimber Boys, located at ul. Wolności 39/59, 22-100 Chełm. Cookies are used for the following purposes:
          </li>
          <ol type="a">
            <li>
              adapting the content of the Website&apos;s pages to the User&apos;s preferences and optimizing the use of the websites;
              in particular, these files allow recognizing the Website User&apos;s device and appropriately displaying the website,
              tailored to their individual needs;
            </li>
            <li>
              creating statistics that help understand how Website Users use websites, which allows improving their structure and content;
            </li>
            <li>
              maintaining the Website User&apos;s session (after logging in), thanks to which the User does not have to re-enter the login and password on each subpage of the Website;
            </li>
          </ol>
          <li>
            Two basic types of cookies are used within the Website: &quot;session&quot; (session cookies) and &quot;permanent&quot; (persistent cookies).
            &quot;Session&quot; cookies are temporary files that are stored on the User&apos;s end device until logging out, leaving the website, or turning off the software (web browser). &quot;Permanent&quot; cookies are stored on the User&apos;s end device for the time specified in the parameters of the cookies or until they are deleted by the User.
          </li>
          <li>
            The following types of cookies are used within the Website:
          </li>
          <ol type="a">
            <li>
              &quot;necessary&quot; cookies, enabling the use of services available within the Website, e.g., authentication cookies used for services requiring authentication within the Website;
            </li>
            <li>
              cookies used to ensure security, e.g., used to detect abuses in the field of authentication within the Website;
            </li>
            <li>
              &quot;performance&quot; cookies, enabling the collection of information about how the Website&apos;s pages are used;
            </li>
            <li>
              &quot;functional&quot; cookies, enabling &quot;remembering&quot; the settings selected by the User and personalizing the User&apos;s interface, e.g., in terms of the chosen language or region from which the User comes, font size, website appearance, etc.;
            </li>
            <li>
              &quot;advertising&quot; cookies, enabling providing Users with advertising content more tailored to their interests.
            </li>
          </ol>

          <li>
            In many cases, the software used for browsing websites (web browser) by default allows the storage of cookies on the User&apos;s end device.
            Website Users can change their cookie settings at any time. These settings can be changed in particular to block the automatic handling of cookies in the web browser settings or to inform about their every placement on the User&apos;s device.
            Detailed information about the possibilities and ways of handling cookies is available in the software (web browser) settings.
          </li>
          <li>
            The Website operator informs that restricting the use of cookies may affect some of the functionalities available on the Website&apos;s pages.
          </li>
          <li>
            Cookies placed on the User&apos;s end device and used may also be by advertisers and partners cooperating with the Website operator.
          </li>
          <li>
            More information about cookies is available in the &quot;Help&quot; section of the web browser menu.
          </li>
          <li>
            <p style={{ display: "inline", margin: "4px" }}>
              The above cookie policy template is protected by copyright, which is owned by IAB Poland. Source:
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
