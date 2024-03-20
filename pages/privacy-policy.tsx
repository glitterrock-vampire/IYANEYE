import Head from "next/head";
import styles from "../styles/RODOPolicyCookies.module.scss";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>IYANEYE the Band - Privacy Policy</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p>
          We respect and protect the safety and privacy of our contractors, 
          which is why we have developed this document to explain the purposes 
          for which we process personal data, how it is processed, where the 
          data may be transferred, and what rights are available to the data 
          subjects in relation to the processing of their data.
        </p>
        <p>
          For the purposes of this privacy policy, the following definitions shall mean:
        </p>
        <i className={styles.i}>Personal data.</i>
        <p>
          {"- means information about an identified or identifiable natural person "}
          {"(\"data subject\"); an identifiable natural person is one who can be identified, "}
          {"directly or indirectly, in particular by reference to an identifier such as a name "}
          {"and surname, identification number, location data, internet identifier, or one or "}
          {"more factors specific to the physical, physiological, genetic, mental, economic, "}
          {"cultural, or social identity of that natural person."}
        </p>
        <i className={styles.i}>Processing.</i>
        <p>
          {"- means an operation or set of operations performed on personal data or sets of "}
          {"personal data in an automated or non-automated manner, such as collecting, recording, "}
          {"organizing, structuring, storing, adapting or modifying, retrieving, consulting, using, "}
          {"disclosing by transmission, disseminating, or otherwise making available, aligning or combining, "}
          {"restricting, erasing, or destroying."}
        </p>
        <i className={styles.i}>GDPR.</i>
        <p>
          {"- Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on "}
          {"the protection of natural persons with regard to the processing of personal data and on the "}
          {"free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."}
        </p>
\      </div>
    </>
  );
};

export default PrivacyPolicy;
