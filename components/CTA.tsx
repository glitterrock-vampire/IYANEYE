import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../styles/Home.module.scss";
import {
  ICheckboxInputs,
  IFormInputs,
  ISubscribeInputs,
  CTAProps,
} from "../types/props";
import { Checkbox } from "./Checkbox";
import parse from "html-react-parser";
import { checkboxContext } from "../context/checkboxContext";
const ctaCheckboxIndex = 0;

export const CTA = ({ status, message, onValidated }: CTAProps) => {
  const { checked, setChecked } = useContext(checkboxContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckboxInputs & IFormInputs>({
    criteriaMode: "all",
  });
  const onSubmit: SubmitHandler<ISubscribeInputs> = (data) => {
    data.email &&
      onValidated({
        MERGE0: data.email,
      });
    reset();
    setChecked(
      checked.map((element, i) => (i === ctaCheckboxIndex ? !element : element))
    );
  };

  return (
    <div className={styles.container_form}>
      {status === "success" && (
        <p className={styles.message}>
          Thank you for joining the newsletter!
        </p>
      )}
      {status === "error" && (
        // @ts-ignore
        <p className={styles.error_msg}>{parse(message)}</p>
      )}
      {status === "sending" && <p>Sending...</p>}
      <form className={styles.container_cta} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.col}>
          <input
            type="text"
            id="email"
            className={styles.input}
            placeholder="Enter your email..."
            {...register("email", {
              required: "This field is required!",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address!",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
          <Checkbox
            name="acceptTerms"
            index={ctaCheckboxIndex}
            setChecked={setChecked}
            checked={checked}
            checkboxMessage="I consent to the newsletter. "
            requiredMessage="Consent is required!"
            register={register}
          />
          {errors.acceptTerms && (
            <span className={styles.error}>{errors.acceptTerms.message}</span>
          )}
        </div>
        <div className={styles.col}>
          <button disabled={status === "sending"} className={styles.button}>
            Join the newsletter
          </button>
        </div>
      </form>
    </div>
  );
};
