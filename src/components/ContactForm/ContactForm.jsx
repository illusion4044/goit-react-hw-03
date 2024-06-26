import { useId } from 'react';
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
    const id = useId();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        onAdd({
            username: form.elements.username.value,
            number: form.elements.number.value,
        });
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.group}>
                <label htmlFor={`username-${id}`} className={css.label}>Username:</label>
                <input className={css.input} type="text" name="username" id={`username-${id}`}/>
            </div>
            <div className={css.group}>
                <label id={`number-${id}`} className={css.label}>Number:</label>
                <input className={css.input} 
                type="text" name="number" id={`number-${id}`} />
            </div>
            <button type="submit">Add contact</button>
        </form>
    );
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};
