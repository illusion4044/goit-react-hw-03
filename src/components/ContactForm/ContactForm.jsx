// import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  

  

    return (
        <form className={css.form} >
            <div className={css.group}>
                <label className={css.label} >Username:</label>
                <input className={css.input} type="text" name="username"  />
            </div>
        </form>
    );
}
