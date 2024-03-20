import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ROUTES } from "../routes/routes";
import styles from "../styles/Form.module.scss";
import { CheckboxProps } from "../types/props";

export const Checkbox = ({
  setChecked,
  checked,
  checkboxMessage,
  requiredMessage,
  register,
  name,
  index,
}: CheckboxProps) => {
  const handleClick = () => {
    const updatedState = checked.map((item, i) => (i === index ? !item : item));
    setChecked(updatedState);
  };

  return (
    <>
      <div className={styles.terms_wrapper}>
        <label className={styles.terms_label} htmlFor={name}>
          <input
            id={name}
            className={styles.terms}
            type="checkbox"
            onClick={handleClick}
            {...register(name, {
              required: requiredMessage,
            })}
          />
          {checked[index] && (
            <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
          )}
        </label>
        <div className={styles.label}>
          <p className={styles.checkbox_msg}>{checkboxMessage}</p>
          <Link href={ROUTES.PRIVACY_POLICY}>
            <a className={styles.link}>Privacy Policy</a>
          </Link>
          <span className={styles.link_separator}>&nbsp;&amp;&nbsp;</span>
          <Link href={ROUTES.COOKIES_POLICY}>
            <a className={styles.link}>Cookies Policy</a>
          </Link>
        </div>
      </div>
    </>
  );
};
