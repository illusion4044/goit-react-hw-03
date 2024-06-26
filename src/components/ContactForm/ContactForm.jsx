// import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
const handleSubmit = (event) => {
    event.preventDefault();
console.log("handleSybmit");
};

    return (
        <form className={css.form} onSubmit={handleSubmit} >
            <div className={css.group}>
                <label className={css.label} >Username:</label>
                <input className={css.input} type="text" name="username"  />
            </div>
            <div className={css.group}>
                <label className={css.label} >Number:</label>
                <input className={css.input} type="text" name="number"  />
            </div>
            <button type="submit">Add contact</button>
        </form>
    );
}
