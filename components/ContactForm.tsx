import styles from "../styles/Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICheckboxInputs, IFormInputs } from "../types/props";
import { useContext, useState } from "react";
import { Checkbox } from "./Checkbox";
import Botpoison from "@botpoison/browser";
import axios from "axios";
import { useWrapForm } from "../hooks/useWrapForm";
import { checkboxContext } from "../context/checkboxContext";
import { AlertBanner } from "./common/Alert";

const FORMSPARK_ACTION_URL = process.env.NEXT_FORMSPARK_ACTION_URL;
const botpoison = new Botpoison({
  publicKey: "pk_62e6f8fe-3509-4f52-bac4-4e95be8b1876",
});
const contactFormIndex = 1;

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const methodsOriginal = useForm<ICheckboxInputs & IFormInputs>({
    criteriaMode: "all",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useWrapForm(methodsOriginal);
  const [submitting, setSubmitting] = useState(false);
  const { checked, setChecked } = useContext(checkboxContext);
  const [apiError, setApiError] = useState(false);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setSubmitting(true);
    const { solution } = await botpoison.challenge();
    try {
      if (FORMSPARK_ACTION_URL)
        await axios.post(FORMSPARK_ACTION_URL, {
          name: data.name,
          email: data.email,
          message: data.message,
          _botpoison: solution,
        });
      setMessage(`${data.name}, Thank you for sending a message!`);
      reset();
      setSubmitting(false);
      setChecked(
        checked.map((element, i) =>
          i === contactFormIndex ? !element : element
        )
      );
      window.scrollTo(0, 0);
    } catch (error) {
      setApiError(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <p className={styles.message}>{message}</p>
      {apiError ? (
        <AlertBanner text="There was a problem with submitting the form. Try again later." />
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor="name">
            Name and Surname          </label>
          <input
            id="name"
            className={styles.input_field}
            type="text"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className={styles.input_field}
            type="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address!",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor="message">
            Message          </label>
          <textarea
            className={styles.textarea}
            id="message"
            {...register("message", {
              required: "This field is required.",
            })}
          ></textarea>
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </div>
        <section className={styles.label}>
          <p>
            Filling out the form means consenting to the processing of personal 
            data provided in the form by Bimber Boys in order to respond to the 
            question asked and, depending on the content of the inquiry, to present an offer.
            {" "}
          </p>
          <Checkbox
            index={contactFormIndex}
            name="acceptTerms"
            setChecked={setChecked}
            checked={checked}
            checkboxMessage="I understand and accept. "
            requiredMessage="Consent is required!"
            register={register}
          />
          {errors.acceptTerms && (
            <span className={styles.error}>{errors.acceptTerms.message}</span>
          )}
        </section>
        <button
          disabled={submitting}
          className={
            submitting
              ? `${styles.button} ${styles.disabled}`
              : `${styles.button}`
          }
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
